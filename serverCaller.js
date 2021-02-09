const fs=require('fs');
const ParallelRequest = require('parallel-http-request');
let request=new ParallelRequest();
let data={};
let onlineServers=[];
try {
    data = fs.readFileSync('servers.json', 'utf8');
  } catch (err) {
    data=null;
  }
exports.findServer=()=>{
    return new Promise((resolve,reject)=>{
        if(data!=null){
            // sorting JSON Array by priority
           data = JSON.parse(data).sort(sortServersByPriority("priority"));
           data.forEach(el => {
                request.add({url:el.url,timeout:5000,method:'get'});
            });
            // all requests will be sent in parallel
            request.send(function(response){
               data = {};
               for(var i=0;i<response.length;i++){
                    //Going trough servers that are sorted from lowest to highest
                   if(response[i].status>=200 && response[i].status<=299){
                    onlineServers.push(response[i].url);
                   }                  
               }    
               if(onlineServers.length==0){
                    return reject("All servers are offline!");
               }else{
                  //returning server with lowest priority    
                  return resolve(onlineServers[0]);
               }                
            });
        }else{
            return reject("Cannot read file");
        }
    });        
}
//helper function    
function sortServersByPriority(prop) {    
    //sorting serves in order from lowest to highest
    return function(a, b) {    
        if (a[prop] > b[prop]) {    
            return -1;    
        } else if (a[prop] < b[prop]) {    
            return 1;    
        }    
        return 0;    
    }    
}
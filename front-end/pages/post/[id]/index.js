import style from "../../../styles/indPost.module.css";

const post = (props) => {
    console.log(props);
    return (
        <div key={props.article.id} className={style.post}>
            <h1>{props.article.title}</h1>
            <p>{props.article.body}</p>
        </div>
    )
}



export const getStaticProps = async (context) => {
    const res = await fetch(`http://jsonplaceholder.typicode.com/posts/${context.params.id}`);
    let article = await res.json();
    return{
        props:{
            article
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`http://jsonplaceholder.typicode.com/posts`);
    let article = await res.json();

    const ids = article.map(item=>(item.id));
    const paths = ids.map(id=>({params:{id:id.toString()}}));

    return{
       paths,
       fallback:false
    }
}


export default post;
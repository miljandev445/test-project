import Post from "../components/post";
import styles from "../styles/Posts.module.css";

const Posts = ({posts}) => {
    console.log(posts);
    return (
        <div className={styles.main}> 
           <h1>Recepies posts</h1>
           {posts.map(post=>(
               <Post key={post.id} post={post} />
           ))}
        </div>
    )
}

export const getStaticProps = async () => {
    let res = await fetch("http://jsonplaceholder.typicode.com/posts?_limit=10");
    let data = await res.json();
    console.log(data);
    return{
        props:{
            posts:data
        }
    }
}

export default Posts;
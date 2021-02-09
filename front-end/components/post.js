import styles from "../styles/Post.module.css";
import Link from "next/link";

const Posts = ({post}) => {
    return (
        <div className={styles.post} key={post.id}>
            <Link href="/post/[id]" as={`/post/${post.id}`}><h1>{post.title}</h1></Link>
            <p>{post.body}</p>
        </div>
    )
}

export default Posts;
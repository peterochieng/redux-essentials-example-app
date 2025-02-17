import { useSelector } from "react-redux"
import { Link } from "react-router-dom";


const PostsList = ()=> {
    const posts = useSelector(state => state.posts );
    const renderedPosts = posts.map(post => (
        <article className="post-excerpt" key={post.id}>
            <h3>{post.title}</h3>
        <p className="post-content">{post.content.substring(0, 100)}</p>
        <Link to={`/posts/${post.id}`} className="button muted-button" > View Post</Link>
        </article>
    ))

return (
    <section className="posts-list">
    <h1>Posts</h1>
    {renderedPosts}
    </section>
)
}

export default PostsList;
import { useState } from "react";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "First Post", likes: 0 },
    { id: 2, title: "Second Post", likes: 0 }
  ]);

  const handleLike = (id) => {
    setPosts(posts.map(post =>
      post.id === id
        ? { ...post, likes: post.likes + 1 }
        : post
    ));
  };

  const totalLikes = posts.reduce((sum, post) => sum + post.likes, 0);

  return (
    <div>
      <Stats totalPosts={posts.length} totalLikes={totalLikes} />
      <PostList posts={posts} onLike={handleLike} />
    </div>
  );
}
function Stats({ totalPosts, totalLikes }) {
  return (
   <div>
  <span>{totalPosts} posts</span>
  <span style={{ marginLeft: "10px" }}>{totalLikes} total likes</span>
</div>
  );
}
function PostList({ posts, onLike }) {
  return (
    <div>
      {posts.map(post => (
        <PostCard
          key={post.id}
          post={post}
          onLike={() => onLike(post.id)}
        />
      ))}
    </div>
  );
}
function PostCard({ post, onLike }) {
    return (
        <div className="post-card">
            <h3>{post.title}</h3>
            <button onClick={onLike}>
                ❤️ {post.likes}
            </button>
        </div>
    );
}
export default App;

import { useState } from "react";

function PostManager() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Learning React",
      author: "Ian",
      likes: 0
    },
    {
      id: 2,
      title: "JavaScript Practice",
      author: "Student",
      likes: 0
    }
  ]);

  const [newPost, setNewPost] = useState("");

  const addPost = () => {
    if (!newPost.trim()) return;

    const post = {
      id: Date.now(),
      title: newPost,
      author: "Ian",
      likes: 0
    };

    setPosts([...posts, post]);
    setNewPost("");
  };

  const deletePost = (id) => {
    setPosts(
      posts.filter((post) => post.id !== id)
    );
  };

  const likePost = (id) => {
    setPosts(
      posts.map((post) =>
        post.id === id
          ? { ...post, likes: post.likes + 1 }
          : post
      )
    );
  };

  return (
    <div>
      <h2>Community Posts</h2>

      <input
        type="text"
        placeholder="Write a post..."
        value={newPost}
        onChange={(e) =>
          setNewPost(e.target.value)
        }
      />

      <button onClick={addPost}>
        Add Post
      </button>

      {posts.map((post) => (
        <div
          key={post.id}
          style={{
            border: "1px solid gray",
            margin: "10px 0",
            padding: "10px"
          }}
        >
          <h3>{post.title}</h3>

          <p>By {post.author}</p>

          <button
            onClick={() =>
              likePost(post.id)
            }
          >
            ❤️ {post.likes}
          </button>

          <button
            onClick={() =>
              deletePost(post.id)
            }
            style={{
              marginLeft: "10px"
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default PostManager;

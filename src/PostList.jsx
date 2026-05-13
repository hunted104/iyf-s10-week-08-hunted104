import PostCard from "./PostCard";

function PostList() {
  const posts = [
    {
      id: 1,
      title: "React Basics",
      author: "Ian"
    },
    {
      id: 2,
      title: "JavaScript Tips",
      author: "Student"
    }
  ];

  return (
    <div>
      <h2>Posts</h2>

      {posts.map((post) => (
        <PostCard
          key={post.id}
          title={post.title}
          author={post.author}
        />
      ))}
    </div>
  );
}

export default PostList;

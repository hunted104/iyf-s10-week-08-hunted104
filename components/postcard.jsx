// Usage
function PostList() {
    return (
        <div className="post-list">
            <PostCard 
                title="Getting Started with React"
                excerpt="Learn the basics of React..."
                author="Ian Mutugi"
                date="Jan 15, 2026"
            />
            <PostCard 
                title="JavaScript Best Practices"
                excerpt="Write cleaner code..."
                author="Jane Smith"
                date="Jan 10, 2026"
            />
        </div>
    );
}
export default  PostCard;

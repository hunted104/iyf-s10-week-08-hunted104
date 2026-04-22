function Card({ children, title }) {
    return (
        <div className="card">
            {title && <h3 className="card-title">{title}</h3>}
            <div className="card-body">
                {children}
            </div>
        </div>
    );
}
<Card title="My Tasks">
  <TodoList />
</Card>

export default Card;

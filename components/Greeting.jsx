function UserGreeting({ user }) {
    return (
        <div>
            {user ? (
                <p>Welcome, {user.name}!</p>
            ) : (
                <p>Please log in</p>
            )}
        </div>
    );
}

export default UserGreeting;

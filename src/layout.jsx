function Layout({ children }) {
    return (
        <div className="layout">
            <Header />
            <main className="main-content">
                {children}
            </main>
            <Footer />
        </div>
    );
}

// Usage
function App() {
    return (
        <Layout>
            <h1>Home Page</h1>
            <PostList />
        </Layout>
    );
}
export default Layout;

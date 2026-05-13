import Layout from "./components/Layout";
import Card from "./components/Card";
import Counter from "./components/Counter";
import Toggle from "./components/Toggle";
import TodoList from "./components/TodoList";
import ContactForm from "./components/ContactForm";
import PostList from "./components/PostList";
import Button from "./components/Button";

import "./App.css";

function App() {
  const name = "Ian Mutugi";

  const today = new Date();
  const hour = today.getHours();

  let greeting = "";

  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  return (
    <Layout>
      <h1>{name}</h1>

      <p>I am passionate about programming.</p>
      <p>I enjoy learning React.</p>
      <p>I want to become a professional developer.</p>

      <p>{today.toLocaleDateString()}</p>
      <p>{greeting}</p>

      <Card title="About Me">
        <p>I am currently building React projects.</p>
      </Card>

      <Button text="Learn More" />
      <Button text="Delete" variant="danger" />

      <Counter />
      <Toggle />
      <TodoList />
      <PostList />
      <ContactForm />
    </Layout>
  );
}

export default App;

import Layout from "./components/Layout";
import Card from "./components/Card";
import Counter from "./components/Counter";
import Toggle from "./components/Toggle";
import TodoList from "./components/TodoList";
import ContactForm from "./components/ContactForm";
import Button from "./components/Button";

import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";

import "./App.css";

function App() {
  const name = "Ian Mutugi"; 
  const date = new Date();
  const time = date.getHours();

  let greeting = "";

  if (time < 12) {
    greeting = "Good morning";
  } else if (time < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }

  return (
    <Layout>
      {/* HERO SECTION */}
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" alt="hero" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>

        <div>
          <h1>{name}</h1>

          <p>I am a student passionate about programming and React.</p>
          <p>I enjoy building projects to improve my skills.</p>
          <p>My goal is to become a professional web developer.</p>
        </div>
      </section>

      {/* ABOUT CARD */}
      <Card title="About Me">
        <p>Currently learning React and building real projects.</p>
      </Card>

      {/* BUTTONS */}
      <Button text="Learn More" variant="primary" />
      <Button text="Delete" variant="danger" />

      {/* DATE + GREETING */}
      <div className="date">
        <p>{date.toLocaleDateString()}</p>
        <p>{greeting}</p>
      </div>

      {/* INTERACTIVE COMPONENTS */}
      <Counter />
      <Toggle />
      <TodoList />
      <ContactForm />
    </Layout>
  );
}

export default App;

import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/contact";
import Works from "./components/Works";
import { Helmet } from "react-helmet";
function App() {
  return (
    <>
      <Helmet>
        <title>Jimuel Baraero – Portfolio</title>
        <meta
          name="description"
          content="Portfolio site for Jimuel Baraero showcasing web development projects and contact information."
        />
      </Helmet>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="skills" />
          <Route path="projects" element={<Works />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

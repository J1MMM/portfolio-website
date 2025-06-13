import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/contact";
import Works from "./components/Works";
import { Helmet } from "react-helmet";
function App() {
  const meta = {
    title: "Jimuel Baraero – Portfolio",
    description:
      "Portfolio site for Jimuel Baraero showcasing web development projects and contact information.",
    image: "https://jimuelbaraero.vercel.app/favicon.ico",
  };

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:type" content="website" />
      </Helmet>

      <Helmet>
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Jimuel Baraero",
        "url": "https://jimuelbaraero.vercel.app",
        "sameAs": [
          "https://www.linkedin.com/in/jimuelbaraero",
          "https://github.com/jimuelbaraero"
        ],
        "jobTitle": "Web Developer",
        "worksFor": {
          "@type": "Organization",
          "name": "City of Government of San Pablo"
        }
      }
    `}
        </script>
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

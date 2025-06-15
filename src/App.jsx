import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/contact";
import Works from "./components/Works";
import { Helmet } from "react-helmet";

const meta = {
  title: "Jimuel Baraero – Portfolio",
  description:
    "Portfolio site for Jimuel Baraero showcasing web development projects and contact information.",
  image:
    "data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABtgAQAbIAbAGyAIQBrgBYAa4AIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADY/xkA1//AANf/4wLV+/YF0vX0Atf91QDZ/ywAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADY/04A1//WCszr/01+YP9nYCz/aF4o/2ViLv9Ajn3/HZ7EXwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1/+JEsLa/3NSEv9zURH/c1ER/3NREf9zURH/c1ER/2NkMvIuo6EkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH7S+KmZgK69zURH/c1ER/3NREftyUxT8c1ER/3NREf9zURH/WHBJbAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABEhWseaF4ooXJUFddtVx0WHLzGamldJv9zURH/c1ER/2xZH8M5kYgCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3LQ8FAAAAAADY/1tDinb/dFER/3NREf9wVRfTWW9FBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1/9bPo9//3RREP9zURH/cFUX01ttQgUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANf/Wz6Pf/90URD/c1ER/3BVF9NbbUIFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADX/1s+j3//dFEQ/3NREf9wVRfTW21CBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1/9bPo9//3RREP9zURH/cFUX01ttQgUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANf/Wz6Pf/90URD/c1ER/3BVF9NbbUIFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADX/1s+j3//dFEQ/3NREf9wVRfTW21CBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA2P9bPo9//3RREP9zURH/cFUX01ttQgUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANn/OESIctJ0URH/c1ER/3BUF9RcbEAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA2LRAxOikINDopCTQ6KQk0AAAAAAAAAAAAAAAA//8AAPg/AADwHwAA4A8AAPAPAAD5hwAA/4cAAP+HAAD/hwAA/4cAAP+HAAD/hwAA/4cAAP+HAAD/hwAA//8AAA==",
};

function App() {
  return (
    <>
      <Helmet>
        {/* <title>{meta.title}</title>
        <link href={meta.image} rel="icon" type="image/x-icon" />
        <meta name="description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta
          property="og:image"
          content={meta.image}
          rel="icon"
          type="image/x-icon"
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="NOODP" /> */}

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
          <Route path="projects" element={<Works />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

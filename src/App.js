import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/index.layout";
import Home from "./components/home/index.home";
import About from "./components/About/index.about";
import Contact from "./components/Contact/index.contact";
import Portfolio from "./components/Portfolio/index.portfolio";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="portfolio" element={<Portfolio />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

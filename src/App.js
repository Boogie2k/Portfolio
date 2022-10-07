import logo from "./logo.svg";
import { BrowserRouter, Switch, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./website/Navbar";
import Home from "./website/Home";
import { useEffect, useState } from "react";
import Footer from "./website/Footer";
import Projects from "./website/Projects";
import Testimonial from "./website/Testimonial";
import TestimonialPage from "./website/TestimonialPage";
import About from "./website/About";
import Error from "./website/Error";
function App() {
  const [isLoad, setIsLoad] = useState(true);
  let control = () => {
    console.log(window.innerWidth);
  };

  useEffect(() => {
    setIsLoad(false);
  }, []);
  useEffect(() => {
    if (isLoad == true) {
      console.log(true);
    } else {
      console.log(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", control);
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home isLoad={isLoad} />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/testimonials" element={<TestimonialPage />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer isLoad={isLoad} />
      </div>
    </BrowserRouter>
  );
}

export default App;

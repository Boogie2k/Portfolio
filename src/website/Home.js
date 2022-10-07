import React, { useEffect, useState } from "react";
import Testimonial from "./Testimonial";
import pfp from "./photos/image/pfp.jpg";
import japlore from "./photos/projects/images/japlorrre.png";
import calc from "./photos/projects/images/calc.png";
import yt from "./photos/projects/images/yt-clone.png";
import capp from "./photos/projects/images/capp.png";
import { refresher } from "./refresher/refresher";
import food from "./photos/projects/images/foodm.png";
import clock from "./photos/projects/images/dClock.png";
import { Link } from "react-router-dom";

const HomePage = ({ isLoad }) => {
  const [isRefresh, setIsRefresh] = useState(true);

  useEffect(() => {
    if (!isLoad) {
      setIsRefresh(false);
    }

    return () => {
      if (isRefresh) {
        console.log(true);
      } else {
        console.log(false);
      }
    };
  }, [isLoad, isRefresh]);

  return (
    <>
      {isRefresh ? (
        <div className="refresher"> {refresher.img}</div>
      ) : (
        <section className="homepage">
          <Home />
          <Testimonial />
        </section>
      )}{" "}
    </>
  );
};

const Home = () => {
  return (
    <>
      <article className="header">
        <div className="img-container">
          <img src={pfp} alt="" />
        </div>

        <div className="about-title">
          {" "}
          <h1>Hi, I'm Benjamin</h1>
          <p>I am a frontend developer</p>
          <Link to="/about"> ...more about me </Link>
        </div>
      </article>
      <article className="projects">
        {" "}
        <h1> My Projects </h1>
        <article>
          {/* Japlore */}
          <a
            href="https://github.com/Boogie2k/japlore"
            rel="noreferrer"
            target="_blank"
          >
            {" "}
            <div className="frame">
              <div className="inner-frame">
                <img src={japlore} alt="" />{" "}
              </div>
              <p>Home page of an hotel booking website</p>
            </div>{" "}
          </a>
          {/* YouTube clone */}
          <a
            href="https://joyful-lamington-cee686.netlify.app"
            rel="noreferrer"
            target="_blank"
          >
            <div className="frame">
              <div className="inner-frame">
                {" "}
                <img src={yt} alt="" /> <p>Youtube clone</p>
              </div>
            </div>{" "}
          </a>
          {/* calculator */}
          <a
            href="https://github.com/Boogie2k/A-JavaScript-Calculator"
            rel="noreferrer"
            alt=""
          >
            <div className="frame">
              <div className="inner-frame">
                {" "}
                <img src={calc} alt="" />
              </div>
              A simple calculator
            </div>
          </a>{" "}
          {/* Counter app frame */}
          <a
            href="https://github.com/Boogie2k/counter-app"
            rel="noreferrer"
            target="_blank"
          >
            {" "}
            <div className="frame">
              <div className="inner-frame">
                <img src={capp} alt="" />
              </div>
              <p>counter app</p>
            </div>
          </a>
          {/*food meal frame */}
          <a
            href="https://github.com/Boogie2k/Hero"
            rel="noreferrer"
            target="_blank"
          >
            {" "}
            <div className="frame">
              <div className="inner-frame">
                {" "}
                <img src={food} alt="" />
              </div>
              <p>An hero page of a resturant website</p>
            </div>
          </a>
          {/*clock frame */}
          <a
            href="https://github.com/Boogie2k/counter-app"
            rel="noreferrer"
            target="_blank"
          >
            {" "}
            <div className="frame">
              <div className="inner-frame">
                {" "}
                <img src={clock} alt="" />
              </div>
              <p> A Digital Clock</p>
            </div>
          </a>
        </article>
      </article>{" "}
      <div className="more-projects">
        <br />
        <Link to="/projects" className="more-projects-link">
          click here to view more projects
        </Link>{" "}
        <br />
      </div>
    </>
  );
};

export default HomePage;

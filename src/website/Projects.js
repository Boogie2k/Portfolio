import React, { useState, useEffect } from "react";
import japlore from "./photos/projects/images/japlorrre.png";
import calc from "./photos/projects/images/calc.png";
import yt from "./photos/projects/images/yt-clone.png";
import capp from "./photos/projects/images/capp.png";

import food from "./photos/projects/images/foodm.png";
import clock from "./photos/projects/images/dClock.png";
import { refresher } from "./refresher/refresher";

const Projects = ({ isLoad }) => {
  const [isSize, setIsSize] = useState(true);
  const [isRefresh, setIsRefresh] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 786) {
      setIsSize(false);
    }
  }, []);

  let size = () => {
    if (window.innerWidth < 786) {
      setIsSize(false);
    } else if (window.innerWidth > 786) {
      setIsSize(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", size);
  }, []);

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
        <section>
          <Project isSize={isSize} setIsSize={setIsSize} />
        </section>
      )}{" "}
    </>
  );
};

const Project = ({ isSize, setIsSize }) => {
  let newSize = () => {
    if (isSize) {
      setIsSize(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", newSize);
  });

  return (
    <section className="projects">
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
        </a>
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
        </a>{" "}
        <br />{" "}
        {/*  {isSize && (
          <a
            href="https://github.com/Boogie2k/counter-app"
            rel="noreferrer"
            target="_blank"
          >
            {" "}
            <div className="frame">, </div>{" "}
          </a>
        )}
        {isSize && (
          <a
            href="https://github.com/Boogie2k/counter-app"
            rel="noreferrer"
            target="_blank"
          >
            <div className="frame">m</div>
          </a>
        )}
        {isSize && (
          <a
            href="https://github.com/Boogie2k/counter-app"
            rel="noreferrer"
            target="_blank"
          >
            <div className="frame">n</div>
          </a>
        )}
        <br />*/}
      </article>
      {/* {isSize || (
        <p
          style={{ color: "blue" }}
          onClick={() => {
            setIsSize(true);
          }}
        >
          show all
        </p>
      )} */}
    </section>
  );
};

export default Projects;

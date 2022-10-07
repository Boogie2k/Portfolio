import React from "react";
import pfp from "./photos/image/pfp.jpg";
import { refresher } from "./refresher/refresher";
import { useState, useEffect } from "react";
const About = ({ isLoad }) => {
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
        <section>
          <AboutContent />
        </section>
      )}{" "}
    </>
  );
};

const AboutContent = () => {
  return (
    <div className="about-page ">
      <div className="img-container">
        <img src={pfp} alt="" />
      </div>
      <div className="texts">
        <br />
        <hr />
        <p style={{ textAlign: "left" }}>
          {" "}
          My name is Benjamin, I am a frontend developer with a one year of
          experience.
          <br /> my skill set Includes HTML, CSS, javaScript, reactJs. I have
          built numerous projects that showcases my skills. <br /> I am
          currently studying computer engineering in the University of Benin.{" "}
        </p>
        <p style={{ textAlign: "left" }}>
          When it comes to building projects some of my special traits are speed
          and accuracy, that I'm very fast, my works are always neat and
          reliable and I'm really good when it comes to working under pressure.
        </p>
        <p style={{ textAlign: "left" }}>
          I also teach teach people programming, in the past I have taught some
          people the core basics of programming and web development, and what
          they would need to know to kick start their career in web development.
        </p>
      </div>
    </div>
  );
};

export default About;

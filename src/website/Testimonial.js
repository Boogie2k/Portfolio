import React from "react";
import { Link } from "react-router-dom";

const Testimonial = () => {
  return (
    <>
      <section className="testimonial">
        <hr className="top-line"></hr>
        <h1>Testimonial</h1>
        <section className="testimonial-page">
          <div className="container">
            {/*  <button
              onClick={() => {
                setLeft(!left);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chevron-left"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                />
              </svg>
            </button>{" "} */}
            <article>
              <p>
                He is a very skilled developer. He has shown extreme proficiency
                in converting my UI/UX designs into code. I will definitely
                recommend him to anyone looking to develop a website.{" "}
                <h1>-Edoma Osadebamwen</h1>
              </p>
            </article>{" "}
            {/*  <button
              onClick={() => {
                setLeft(!left);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chevron-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </button> */}
          </div>
        </section>
        <Link to="/testimonials">View more testmonials</Link>
        <hr className="line" />
      </section>
    </>
  );
};

export default Testimonial;

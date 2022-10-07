import React from "react";
import { useEffect, useState } from "react";
import { refresher } from "./refresher/refresher";

const TestimonialPage = ({ isLoad }) => {
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
          {/* <Page /> */}
          <TestimonialContainer />
        </section>
      )}{" "}
    </>
  );
};

let TestimonialContainer = () => {
  return (
    <>
      <section className="testimonial-page">
        {" "}
        <h1>Testimonial</h1>
        <div className="container">
          <article>
            <Testimonials />
          </article>
        </div>
      </section>
    </>
  );
};

let Testimonials = () => {
  const [name, setName] = useState(1);

  if (name === 1) {
    return (
      <>
        {" "}
        <div>
          <p>
            He is a very skilled developer. He has shown extreme proficiency in
            converting my UI/UX designs into code. I will definitely recommend
            him to anyone looking to develop a website.{" "}
            <h4>-Edoma Osadebamwen</h4>
          </p>{" "}
          {/*   <button
            onClick={() => {
              setName(2);
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
      </>
    );
  } else if (name === 2) {
    return (
      <>
        <div>
          <button
            onClick={() => {
              setName(1);
            }}
          >
            {" "}
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
            </svg>{" "}
          </button>
          <p>
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.{" "}
            <h4>-Edoma Osadebamwen</h4>{" "}
          </p>
          <button
            onClick={() => {
              setName(3);
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
          </button>
        </div>
      </>
    );
  } else if (name === 3) {
    return (
      <>
        <SlideThree setName={setName} />
      </>
    );
  }
};

let SlideThree = ({ setName }) => {
  return (
    <>
      <div>
        <button
          onClick={() => {
            setName(2);
          }}
        >
          {" "}
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
          </svg>{" "}
        </button>
        <p>
          He is a very skilled developer. He has shown extreme proficiency in
          converting my UI/UX designs into code. I will definitely recommend
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. <h4>-Edoma Osadebamwen</h4>{" "}
        </p>
      </div>
    </>
  );
};

export default TestimonialPage;

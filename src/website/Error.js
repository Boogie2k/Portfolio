import React from "react";

const Error = () => {
  return (
    <div
      className="refresher"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <img
        src="https://cdn3.iconfinder.com/data/icons/emoticon-emoji-1/50/Dissapointed-512.png"
        alt=""
        height="80%"
      />
      <h1>Sorry An Error occured</h1>
      <h2>Make sure the URL you typed is correct</h2>
    </div>
  );
};

export default Error;

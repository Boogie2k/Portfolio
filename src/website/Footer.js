import React, { useEffect } from "react";
import { social } from "./data/social";
import { useState } from "react";

const Footer = ({ isLoad }) => {
  return (
    <footer
      style={{
        position: isLoad ? "absolute" : "initial",
        top: isLoad ? "85%" : "initial",
      }}
    >
      <h2>Get in touch with me through:</h2>
      <ul>
        {social.icons.map((icon) => {
          const { img, link } = icon;
          return (
            <li>
              <a target="_blank" href={link}>
                {img}
              </a>
            </li>
          );
        })}
      </ul>
    </footer>
  );
};

export default Footer;

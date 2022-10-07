import React from "react";
import { Link } from "react-router-dom";
import { social } from "./data/social";

const Navbar = () => {
  return (
    <>
      <nav class="navbar  navbar-expand-lg bg-light new">
        <div class="container-fluid new">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/" class="nav-link " aria-current="page">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/projects">
                  Projects
                </Link>
              </li>
              <li class="nav-item dropdown">
                <Link class="nav-link " to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/testimonials">
                  Testimonials
                </Link>
              </li>
            </ul>

            <ul className="socials">
              {social.icons.map((icon) => {
                const { img, link } = icon;
                return (
                  <li>
                    {" "}
                    <a target="_blank" href={link}>
                      {img}{" "}
                    </a>{" "}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

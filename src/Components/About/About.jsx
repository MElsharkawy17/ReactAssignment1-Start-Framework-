import React from "react";
import Title from "../Title/Title";
import "./About.css";

export default function About() {
  return (
    <section
      id="about"
      className="min-vh-100 bgg d-flex justify-content-center align-items-center text-white"
    >
      <div className="container px-lg-4 mt-5">
        <Title text="ABOUT COMPONENT" color="white" />
        <div className="row mt-4">
          <div className="col-md-6">
            <p>
             Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </p>
          </div>
          <div className="col-md-6">
            <p>
             Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

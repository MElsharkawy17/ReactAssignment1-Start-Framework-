import React from "react";
import avatar from "../../assets/imgs/avataaars.svg";
import "./Home.css";

export default function Home() {
  return (
    <section
      id="home"
      className="min-vh-100 bgg d-flex justify-content-center align-items-center text-center"
    >
      <div className="container mt-5">
        <img src={avatar} alt="avatar" />
        <h1 className="text-white display-6 fw-bold mt-4">START FRAMEWORK</h1>
        <div className="d-flex justify-content-center align-items-center my-3">
          <div className="bg-white" style={{ height: "3px", width: "70px" }}></div>
          <i className="fa fa-star text-white mx-3"></i>
          <div className="bg-white" style={{ height: "3px", width: "70px" }}></div>
        </div>
        <p className="text-white mb-0">
          Graphic Artist - Web Designer - Illustrator
        </p>
      </div>
    </section>
  );
}

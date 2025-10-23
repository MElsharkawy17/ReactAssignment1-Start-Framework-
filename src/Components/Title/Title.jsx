import React from "react";

export default function Title({ text, color = "#2C3E50" }) {
  return (
    <div className="text-center mb-2">
      <h2
        className="fw-bold text-uppercase fs-1"   
        style={{ color }}
      >
        {text}
      </h2>

      <div className="d-flex justify-content-center align-items-center">
        <div
          style={{ height: "5px", width: "70px", backgroundColor: color }}
        ></div>
        <i
          className="fa fa-star mx-3"
          style={{ color }}
        ></i>
        <div
          style={{ height: "5px", width: "70px", backgroundColor: color }}
        ></div>
      </div>
    </div>
  );
}

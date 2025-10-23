import React, { useState } from "react";
import "./Portfolio.css";
import Title from "../Title/Title";

import port1 from "../../assets/imgs/port1.png";
import port2 from "../../assets/imgs/port2.png";
import port3 from "../../assets/imgs/port3.png";

export default function Portfolio() {
  const [previewSrc, setPreviewSrc] = useState(null);

  const images = [port1, port2, port3, port1, port2, port3];

  const handlePreview = (src) => {
    setPreviewSrc(src);
  };

  const closePreview = () => {
    setPreviewSrc(null);
  };

  return (
    <section
  id="portfolio"
  className="min-vh-100 d-flex flex-column justify-content-center align-items-center mb-5 mt-4"
  style={{ paddingTop: "100px" }}
>

      <div className="container">
        <Title text="Portfolio Component" />

        <div className="row g-4 pt-2">
          {images.map((img, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div
                className="card overflow-hidden rounded-3 position-relative"
                onClick={() => handlePreview(img)}
              >
                <img
                  src={img}
                  className="img-fluid"
                  alt={`portfolio-${index}`}
                />
                <div className="overlay d-flex justify-content-center align-items-center position-absolute w-100 h-100">
                  <i className="fa fa-solid fa-plus fa-5x text-white"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {previewSrc && (
        <div
          className="preview-img d-flex justify-content-center align-items-center bg-info bg-opacity-25 position-fixed top-0 start-0 w-100 vh-100"
          onClick={closePreview}
        >
          <img
            src={previewSrc}
            alt="preview"
            className="w-50 mt-5 shadow-lg "
          />
        </div>
      )}
    </section>
  );
}

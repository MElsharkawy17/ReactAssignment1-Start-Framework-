import React from "react";
import Title from "../Title/Title";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-vh-100 py-5 d-flex justify-content-center align-items-center my-5"
    >
      <div className="container">
        <Title text="CONTACT SECTION" />
        <form action="" noValidate className="w-50 mx-auto mt-5">
          <div className="mb-5">
            <input
              type="text"
              className="form-control border-0 border-bottom bg-transparent shadow-none"
              placeholder="User Name"
              required
            />
          </div>
          <div className="mb-5">
            <input
              type="number"
              className="form-control border-0 border-bottom bg-transparent shadow-none"
              placeholder="User Age"
              required
            />
          </div>
          <div className="mb-5">
            <input
              type="email"
              className="form-control border-0 border-bottom bg-transparent shadow-none"
              placeholder="User Email"
              required
            />
          </div>
          <div className="mb-5">
            <input
              type="password"
              className="form-control border-0 border-bottom bg-transparent shadow-none"
              placeholder="User Password"
              required
            />
          </div>
         <button
  type="submit"
  className="btn text-white "
  style={{
    backgroundColor: "#1ABC9C",
    border: "none",
    textTransform: "capitalize",
    padding: "8px 10px",
    borderRadius: "6px",
  }}
>
  send Message
</button>

        </form>
      </div>
    </section>
  );
}

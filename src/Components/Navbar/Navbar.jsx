import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar-custom position-fixed top-0 start-0 w-100 d-flex justify-content-between align-items-center px-5 text-white z-3 ${
        isScrolled ? "navbar-shrink" : ""
      }`}
    >
      <Link to="/home" className="text-decoration-none text-white">
        <h1 className="my-0 fw-bold text-uppercase">Start Framework</h1>
      </Link>

      <ul className="list-unstyled d-flex justify-content-center align-items-center me-5 my-0">
        <li className="mx-3">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-decoration-none text-white fw-bold px-2 py-2 rounded bgg"
                : "text-decoration-none text-white fw-bold px-2 py-2 rounded"
            }
          >
            About
          </NavLink>
        </li>
        <li className="mx-3">
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              isActive
                ? "text-decoration-none text-white fw-bold px-2 py-2 rounded bgg"
                : "text-decoration-none text-white fw-bold px-2 py-2 rounded"
            }
          >
            Portfolio
          </NavLink>
        </li>
        <li className="mx-3">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-decoration-none text-white fw-bold px-2 py-2 rounded bgg"
                : "text-decoration-none text-white fw-bold px-2 py-2 rounded"
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

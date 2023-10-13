import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="flex px-12 py-8 justify-between">
      <NavLink to="/">Home</NavLink>

      <div className="flex gap-5">
        <NavLink to="/about" className="hover:text-blue-600">
          About
        </NavLink>
        <NavLink to="/blog" className="hover:text-blue-600">
          Blog
        </NavLink>
        <NavLink to="/contact" className="hover:text-blue-600">
          Contact Us
        </NavLink>
      </div>

      <div className="flex gap-3">
        <button onClick={() => navigate("/login")}>Login</button>
        <button className="bg-blue-600 text-white outline-none rounded-lg px-4 py-1">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Navbar;

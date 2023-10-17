import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";
import sign_up_icon from "./../assets/signupIcon.svg";

export default function Register() {
  return (
    <div>
      <Navbar />

      {/* Div for the body */}
      <div className="flex justify-center items-center gap-10">
        <form className="flex flex-col gap-2">
          <h3 className="flex text-[50px]">Welcome</h3>
          <h3 className="flex text-[30px] gap-3">
            Already have an account?{" "}
            <NavLink to="/login" className="text-blue-600">
              Login
            </NavLink>
          </h3>

          {/* Form input + button */}

          {/* Label */}
          <label>Username:</label>
          <input
            type="text"
            placeholder="Enter your username"
            className="border-2 outline-none border-black w-52 rounded-lg px-4 py-2"
          />

          {/* Email */}
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="border-2 outline-none border-black w-52 rounded-lg px-4 py-2"
          />

          {/* Password */}
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="border-2 outline-none border-black w-52 rounded-lg px-4 py-2"
          />

          {/* Password confirmation */}
          <label>Confirm Password:</label>
          <input
            type="password"
            placeholder="Confirm Password"
            className="border-2 outline-none border-black w-52 rounded-lg px-4 py-2"
          />

          {/* Register submit button */}
          {/* <input type="submit" value="register"/> */}
          <button
            type="submit"
            className="bg-blue-600 text-white w-52 py-2 outline-none rounded-lg"
          >
            Register
          </button>
        </form>
        <img src={sign_up_icon} alt="" className="w-2/4" />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

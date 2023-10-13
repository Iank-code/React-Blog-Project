import React from "react";
import Navbar from "../components/Navbar";
import { NavLink } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <Navbar />

      <div className="flex justify-center item-center">
        <form className="flex flex-col">
          <div>
            <h1 className="flex text-[50px]">Welcome Back</h1>
            <h3 className="flex text-[30px]">
              Don't have an account?{" "}
              <NavLink className="text-blue-600" to="/signup">
                Sign Up
              </NavLink>
            </h3>
          </div>

          <label>Email:</label>
          <input
            type="email"
            className="border-2 outline-none border-black w-52 rounded px-4 py-2"
            placeholder="Enter your email address"
          />

          <label>Password:</label>
          <input
            type="password"
            className="border-2 outline-none border-black w-52 rounded px-4 py-2"
            placeholder="Enter your password"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white w-52 py-2 outline-none rounded-lg"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

import React from "react";
import Navbar from "../components/Navbar";
import { NavLink } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <Navbar />

      <div>
        <form>

            <div>
                <h1>Welcome Back</h1>
                <h3>Don't have an account? <NavLink className="text-blue-600" to="/signup">Sign Up</NavLink></h3>
            </div>

        </form>
      </div>
    </div>
  );
}

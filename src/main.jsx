import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./../dist/output.css";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact={true} element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

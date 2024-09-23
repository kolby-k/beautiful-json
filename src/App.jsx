import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css";
import { FaCode } from "react-icons/fa";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <div className="title-section">
            <NavLink to="/" exact="true">
              <span className="title">
                <FaCode color="white" size={32} />
                <p>Beautiful JSON</p>
              </span>
              <p>A simple and free JSON formatting tool</p>
            </NavLink>
          </div>
          <ul>
            <li>
              <NavLink
                to="/"
                exact="true"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                About
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

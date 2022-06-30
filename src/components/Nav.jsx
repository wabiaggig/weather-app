import React from "react";
import SearchBar from "./SearchBar";
import "../styles/Nav.css";
import logo from "../logoHenry.png";

export default function Nav({ onSearch }) {
  return (
    <nav className="navbar">
      <div className="navbar-cimg">
        <img className="navbar-cimg_img" src={logo} alt="Logo" /> Henry -
        Weather App
      </div>

      <SearchBar onSearch={onSearch} />
    </nav>
  );
}

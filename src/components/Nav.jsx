import React from "react";
import SearchBar from "./SearchBar";
import { NavBar, Logo } from "../styles/Nav";
import logo from "../logoHenry.png";

export default function Nav({ onSearch }) {
  return (
    <NavBar>
      <div>
        <Logo src={logo} alt="Logo" /> Henry - Weather App
      </div>

      <SearchBar onSearch={onSearch} />
    </NavBar>
  );
}

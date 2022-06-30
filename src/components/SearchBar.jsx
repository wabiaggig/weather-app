import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  // acá va tu código
  const [city, setCity] = useState("");

  function handleInputChange(e) {
    setCity(e.target.value);
  }

  return (
    <form
      className="search"
      id="search"
      onSubmit={(e) => {
        e.preventDefault();
        onSearch();
      }}
    >
      <input
        className="search-input"
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={handleInputChange}
      />
      <input className="search-button" type="submit" value="Buscar" />
    </form>
  );
}

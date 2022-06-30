import React, { useState } from "react";
import { Input, Button, Search } from "../styles/SearchBar";

export default function SearchBar({ onSearch }) {
  // acá va tu código
  const [city, setCity] = useState("");

  function handleInputChange(e) {
    setCity(e.target.value);
  }

  return (
    <Search>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSearch();
        }}
      >
        <Input
          type="text"
          placeholder="Ciudad..."
          value={city}
          onChange={handleInputChange}
        />
        <Button onClick={onSearch}>Agregar</Button>
      </form>
    </Search>
  );
}

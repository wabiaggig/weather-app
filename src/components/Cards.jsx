import React from "react";
import Card from "./Card";
import "../styles/Cards.css";

export default function Cards({ cities }) {
  // acá va tu código
  // tip, podés usar un map
  return (
    <div className="container">
      {cities?.map((ciudad) => (
        <Card
          key={ciudad.id}
          max={ciudad.main.temp_max}
          min={ciudad.main.temp_min}
          name={ciudad.name}
          img={ciudad.weather[0].icon}
          onClose={() => alert(ciudad.name)}
        />
      ))}
    </div>
  );
}

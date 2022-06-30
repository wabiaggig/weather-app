import React from "react";
import "../styles/Card.css";
import { WeatherCard } from "../styles/WeatherCard";

export default function Card(props) {
  // acá va tu código
  return (
    <div className="weatherCard">
      <button className="weatherCard-close" onClick={props.onClose}>
        X
      </button>

      <div className="weatherCard-text">
        <h2 className="weatherCard-text_title">{props.name}</h2>

        <div className="weatherCard-text_values">
          <h5 className="weatherCard-text_values_text">MIN</h5>
          <h5 className="weatherCard-text_values_text">{props.min}</h5>

          <h5 className="weatherCard-text_values_text">MAX</h5>
          <h5 className="weatherCard-text_values_text">{props.max}</h5>

          <img
            className="weatherCard-text_img"
            src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}
            alt="weather"
          />
        </div>
      </div>
    </div>
  );
}

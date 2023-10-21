import "./styles/app.css";
import { useState } from "react";
import { useFetch } from "./hooks/useFetch";

const urlBase = "https://api.openweathermap.org/data/2.5/weather";
const api_key = import.meta.env.VITE_WEATHER_API;
const difKelvin = 273.15;
const lang = "es";

export const App = () => {
  const [url, setUrl] = useState(null);
  const [city, setCity] = useState("");

  const { data, isLoading } = useFetch(url);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUrl(`${urlBase}?q=${city}&appid=${api_key}&lang=${lang}`);
  };

  return (
    <div className="container">
      <h1>Aplicación de Clima</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          onChange={handleCityChange}
          placeholder="Enter city"
        />
        <button type="submit">Buscar</button>
      </form>
      {isLoading && url ? (
        <h3>Buscando...</h3>
      ) : data && data.message ? (
        <h3>Ups! Hubo un error: {data.message}</h3>
      ) : (
        data && (
          <div>
            <h2>{data.name}</h2>
            <p>Temperatura: {parseInt(data.main?.temp - difKelvin)}°C</p>
            <p>Condición: {data.weather[0]?.description}</p>
            <img
              src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              alt="Weather Icon"
            />
          </div>
        )
      )}
    </div>
  );
};

import "./styles/movieSearch.css";
import { useState } from "react";
import { useFetch } from "./hooks/useFetch";
import { FaSearch } from "react-icons/fa";

const URL_BASE = "https://api.themoviedb.org/3/search/movie";
const API_KEY = import.meta.env.VITE_MOVIE_API;
console.log(API_KEY);

export const MovieSearch = () => {
  const [busqueda, setBusqueda] = useState("");
  const [url, setUrl] = useState(null);

  const handleInputChange = (e) => {
    setBusqueda(e.target.value);
  };

  const { data, isLoading } = useFetch(url);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUrl(`${URL_BASE}?query=${busqueda}&language=es-ES&api_key=${API_KEY}`);
  };

  return (
    <div className="container">
      <h1 className="title">Buscador de Películas</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Buscar..."
          value={busqueda}
          onChange={handleInputChange}
        />
        <button type="submit" className="search-button">
          <FaSearch />
        </button>
      </form>

      <div className="movie-list">
        {isLoading && url ? (
          <div className="spinner"></div>
        ) : (
          data &&
          data.map((film) => (
            <div key={film.id} className="movie-card">
              <img
                src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                alt={film.title}
              />
              <h2>{film.title}</h2>
              <p>{film.overview}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

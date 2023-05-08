import React, { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";
import Loader from "./icons/Loader";



const Cards = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://swapi.dev/api/films");
        setFilms(response.data.results);
        console.log(films);
      } catch (err) {
         setError(true);
        console.log(err.message);
        // setFilms(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const movieCards = films.map((film) => (
    <Card key={film.episode_id} film={film}  />
  ));

  return (
    <div className="App">
      {loading ? (
        <Loader className="loader" />
      ) : (
        <div className="movie-grid">
          {films.length === 0 ? (
            <p className="message">No data available.</p>
          ) : (
            movieCards
          )}
        </div>
      )}
      {error && <p className="error">Error fetching data.</p>}
    </div>
  );
};

export default Cards;

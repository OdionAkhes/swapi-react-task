/** @format */

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "./icons/Loader";
import Section from "./Section";

const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [film, setFilm] = useState([]);
  const [loading, setLoading] = useState(true);

    
  // Function to fetch data from multiple URLs concurrently
  const fetchData = async (urls) => {
    const results = await Promise.all(urls.map((url) => axios.get(url)));
    return results.map((res) => res.data);
  };

  useEffect(() => {
    const getFilmData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://swapi.dev/api/films/${id}`);
        const filmData = response.data;

        const [characters, planets, species, starships, vehicles] =
          await Promise.all([
            fetchData(filmData.characters),
            fetchData(filmData.planets),
            fetchData(filmData.species),
            fetchData(filmData.starships),
            fetchData(filmData.vehicles),
          ]);

        setFilm({
          ...filmData,
          characters,
          planets,
          species,
          starships,
          vehicles,
        });
        console.log(film);
      } catch (err) {
        console.error(err.message);
        setFilm(null);
      } finally {
        setLoading(false);
      }
    };

    getFilmData();
  }, [id]);
  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div>
      {loading ? (
        <Loader className="loader" />
      ) : (
        <div className="details">
          <header>
            <div className="back">
              <button onClick={handleClick}>&larr; Back to list</button>
            </div>
            <h2>{film.title}</h2>
            <p>Director: {film.director}</p>
            <p>Producer: {film.producer}</p>
          </header>
          <div style={{ marginBottom: "1rem"}}>
            <h4 className="gray">Description</h4>
            <p>{film.opening_crawl}</p>
          </div>

          <Section title="Characters" items={film.characters} />
          <Section title="Planets" items={film.planets} />
          <Section title="Species" items={film.species} />
          <Section title="Starships" items={film.starships} />
          <Section title="Vehicles" items={film.vehicles} />
        </div>
      )}
    </div>
  );
};

export default MovieDetail;

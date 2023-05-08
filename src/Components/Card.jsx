import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({film}) => {
    const { title, opening_crawl, release_date,url} = film;
  
  const id = url.match(/\/(\d+)\/$/)[1];


  return (
    <div className="movie-card">
      <div className="title" >
        <h3>{title}</h3>
        <span className="date">
          {new Date(release_date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </span>
      </div>
      <p className="opening-crawl">{opening_crawl.substring(0, 260)}...</p>
      <Link to={`/movie/${id}`} className="more-info">
        More info
      </Link>
    </div>
  );
}

export default Card
import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({film}) => {
    const { title, opening_crawl, release_date,url} = film;
    const formatDate = (dateString) => {
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const [year, month, day] = dateString.split("-");
      return `${months[parseInt(month, 10) - 1]} ${parseInt(day, 10)}, ${year}`;
    };
  const id = url.match(/\/(\d+)\/$/)[1];


  return (
    <div className="movie-card">
      <div className="title">
        <h3>{title}</h3>
        <span className="date">{formatDate(release_date)}</span>
      </div>
      <p className="opening-crawl">{opening_crawl.substring(0, 260)}...</p>
      <Link to={`/movie/${id}`} className='more-info'>More info</Link>
    </div>
  );
}

export default Card
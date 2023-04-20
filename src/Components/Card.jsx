import React from 'react'

const Card = ({film}) => {
    const { title, opening_crawl, release_date } = film;
    // const formatDate = (dateString) => {
    //   const months = [
    //     "January",
    //     "February",
    //     "March",
    //     "April",
    //     "May",
    //     "June",
    //     "July",
    //     "August",
    //     "September",
    //     "October",
    //     "November",
    //     "December",
    //   ];
    //   const [year, month, day] = dateString.split("-");
    //   return `${months[parseInt(month, 10) - 1]} ${parseInt(day, 10)}, ${year}`;
    // }; this is impressive, but should be used when there is no inbuilt method avaliable
 

  return (

      <div className="movie-card">
        <div className='title'>   {/* font weight shuld be 700 */}
          <h3>{title}</h3>
          <span className="date">{new Date(release_date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric"
          })}</span>
        </div>
        <p className="opening-crawl">{opening_crawl.substring(0, 260)}...</p>

        <a href="#" className="more-info">
          More info
        </a>
      </div>

  );
}

export default Card
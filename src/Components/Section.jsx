/** @format */

import React from "react";

const Section = ({ title, items, description }) => {
  return (
    <div className="section">
      <h4 className="gray">{title}</h4>
      {items && <ul>
        {items.map((item) => (
          <li key={item.url}>{item.name}</li>
        ))} 
      </ul>}
      {description && <p>{description}</p>}
    </div>
  );
};

export default Section;

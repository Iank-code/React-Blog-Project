import React from "react";

export default function DisplaySelected({ data }) {
  return (
    <div>
      <h3>Location: {data.country || data.state || data.city}</h3>
      <h4>Category: {data.category}</h4>
      {data.countries.country.name ? (
        <h4>Present in: {data.countries.country.name}</h4>
      ) : null}
      <p>Mission: {data.mission}</p>
    </div>
  );
}

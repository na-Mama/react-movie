import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h1>
        <Link to={`/detail/${id}`}>{title}</Link>
      </h1>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.prototype = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;

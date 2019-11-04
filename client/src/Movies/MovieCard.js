import React from "react";

const MovieCard = props => {
  console.log(props);
  const { director, metascore, stars, title } = props.movie;
  console.log(props.movie);

  if (!props.movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        <div>
          {stars
            ? stars.map(cv => {
                return <p key={cv}>{cv}</p>;
              })
            : ""}
        </div>
      </div>
      <div className="save-button">Save</div>
    </div>
  );
};

export default MovieCard;

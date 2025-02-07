import React from 'react';

const MovieGrid = () => {
  const movies = [
    { title: 'Movie 1', imageUrl: 'https://via.placeholder.com/200' },
    { title: 'Movie 2', imageUrl: 'https://via.placeholder.com/200' },
    { title: 'Movie 3', imageUrl: 'https://via.placeholder.com/200' },
    { title: 'Movie 4', imageUrl: 'https://via.placeholder.com/200' },
    // Add more movies
  ];

  return (
    <div className="movie-grid">
      {movies.map((movie, index) => (
        <div className="movie-card" key={index}>
          <img src={movie.imageUrl} alt={movie.title} />
          <div className="movie-title">{movie.title}</div>
        </div>
      ))}
    </div>
  );
};

export default MovieGrid;


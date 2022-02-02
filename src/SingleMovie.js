import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { API_ENDPOINT } from './context';
import useFetch from './useFetch';
const SingleMovie = () => {
  const { id } = useParams();
  const { isLoading, error, data: movie } = useFetch(`&i=${id}`);

  console.log(movie);

  if (isLoading) {
    return <div className='loading'></div>;
  }
  if (error.show) {
    return (
      <div className='page-error'>
        <h1>{error.msg}</h1>
        <Link to='/' className='btn'>
          back to movies
        </Link>
      </div>
    );
  }
  const {
    Poster: poster,
    Title: title,
    Plot: plot,
    Year: year,

    Runtime: runtime,
    Genre: genre,
    Director: director,
    Actors: actors,
  } = movie;
  return (
    <section className='single-movie'>
      <img src={poster} alt={title} />
      <div className='single-movie-info'>
        <div className='single-movie-info-flex'>
          <h2>{title}</h2>
          <h4>{year}</h4>
        </div>
        <h4>{director}</h4>
        <div className='single-movie-info-flex'>
          <h5>{genre}</h5>
          <h4>{runtime}</h4>
        </div>
        <h5>{actors}</h5>
        <p>{plot}</p>
        <Link to='/' className='btn'>
          back to movies
        </Link>
      </div>
    </section>
  );
};

export default SingleMovie;

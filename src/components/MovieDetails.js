import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Fotter from "./Fotter";

function MovieDetails() {
  const [movie, setMovie] = useState({});

  const { id } = useParams();
  const apiKey = "bd422e7b500e20ac0bad0f395328407c";

  const getMovieData = () => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error)=>{
        alert('404')
      })
  };

  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <div>
      <div
        className="flex  w-11/12 mx-auto h-[410px] overflow-hidden my-5 p-3 shadow-md
        md:w-6/12 
        "
      >
        <figure className="w-6/12">
          <img
            className="rounded-md w-full md:w-10/12 md:mx-auto md:h-[390px] transition-all ease-linear duration-300 hover:scale-105"
            src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
            alt=""
          />
        </figure>
        <div className="px-3 w-6/12 space-y-5 ">
          <p>
            <span className="font-bold">name:</span> {movie.title} {movie.name}
          </p>
          <p>
            <span className="font-bold">vote:</span>{" "}
            {Math.round(movie.vote_average * 10) / 10}
          </p>
          <p>
            <span className="font-bold">count:</span> {movie.vote_count}
          </p>
          <p>
            <span className="font-bold">release: </span> {movie.release_date}
          </p>
          <p className="text-justify">
            <span className="font-bold">overview: </span>
            {movie.overview}
          </p>
        </div>
      </div>
      <Fotter />
    </div>
  );
}

export default MovieDetails;

//

//{movie.title}

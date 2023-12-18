import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Main from "../Main";
import { Link } from "react-router-dom";
import Fotter from "../Fotter";


function Home() {

  const [showMovie, setShowMovie] = useState([]);
  const movieHandleClick = (res) => {
 //---
  };

  const apiKey = "bd422e7b500e20ac0bad0f395328407c";
  const getMovieData = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=${apiKey}`
      )
      .then((response) => {
        console.log(response.data.results);
        const updated = response.data.results.map((res) => {
          const totalAverage = Math.round(res.vote_average * 10) / 10;

          return (
            <div
              className="mx-auto w-64 h-[480px] my-5 shadow-md rounded-md space-y-5 relative"
              key={res.id}
            >
              <img
                className="flex object-fill w-full rounded-md transition-all ease-linear duration-300 hover:scale-105"
                src={`https://www.themoviedb.org/t/p/w220_and_h330_face${res.poster_path}`}
                alt=""
              />
              <div className="bg-green-500 absolute rounded-full w-[40px] h-[40px] left-[10px] bottom-[60px] text-xs">
                <div className="flex justify-center items-center mt-2.5">
                  {totalAverage}
                </div>
              </div>
              <div className="w-full flex justify-center text-sm overflow-y-hidden font-bold">
                {res.title ? res.title : res.name}
              </div>
              <Link to={`/movie-details/${res.id}`}>
                {" "}
                <button
                  type="submit"
                  onClick={() => movieHandleClick(res)}
                  className="bg-green-500 w-full rounded-b-md py-1 text-white"
                >
                  More Details
                </button>
              </Link>
            </div>
          );
        });
        setShowMovie(updated);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <div>
     
      <Main showMovie={showMovie} />
      <Fotter />
    </div>
  );
}

export default Home;

import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import NavBar from "../NavBar";
import Main from "../Main";
function Home() {
  const [showMovie, setShowMovie] = useState([]);

  const apiKey = "bd422e7b500e20ac0bad0f395328407c";
  const getMovieData = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=${apiKey}`
      )
      .then((response) => {
        console.log(response.data.results);
        const updated = response.data.results.map((res) => {
          return (
            <div
              className="mx-auto w-64 my-5 shadow-md rounded-md space-y-5"
              key={res.id}
            >
              <img
                className="flex object-fill w-full rounded-md transition-all ease-linear duration-300 hover:scale-105"
                src={`https://www.themoviedb.org/t/p/w220_and_h330_face${res.poster_path}`}
                alt=""
              />
              <div className="w-full">{res.title} {res.name}</div>
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
      <NavBar />
      <Main showMovie={showMovie} />
    </div>
  );
}

export default Home;

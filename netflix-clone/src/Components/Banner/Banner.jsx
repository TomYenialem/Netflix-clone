import React, { useEffect, useState } from "react";
import "./Banner.css";
import request from "../../Utilies/request";

import { PuffLoader } from "react-spinners";

export default function Banner() {
  const [movie, setMovie] = useState({});
    const [loader, setloader] = useState(false);

  const handleMovie = async () => {
       setloader(true);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/${request.tv}`
      );

      if (!response.ok) {
        console.log("Response Erorr");
        return;
      }

      const data = await response.json();
      console.log(data);
      const randomIndex = Math.floor(Math.random() * data.results.length);
      setMovie(data.results[randomIndex]);
         
    } catch (error) {
      console.log("Error occurred:", error);
       
    }
       finally {
  setloader(false);
}
    
  };

  useEffect(() => {
    handleMovie();
  }, []);

  return (
    <div
      style={{
        position:'relative',
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "400px",
        zIndex:'-1'
      }}
    >
      {loader && (
        <div className="loader">
          <PuffLoader />
        </div>
      )}
      <div className="banner-details">
        <div className="title">
          <h1 className="text-light">
            {movie.name || movie.title || movie.original_name}
          </h1>
        </div>
        <div className="play-button">
          <button className="play">Play</button>

          <button className="list">My List</button>
        </div>
        <div className="overview text-white col-sm-6">
          {movie.overview
            ? `${movie.overview.substr(0, 150)}...`
            : "No overview available"}
        </div>
      </div>
    </div>
  );
}

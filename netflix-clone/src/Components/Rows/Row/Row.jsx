import React, { useEffect, useState } from "react";
import "./Row.css";

import movieTrailer from "movie-trailer";
import { toast } from "react-toastify";
import YouTube from "react-youtube";

export default function Row({ title, fechUrl, isLarge }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const baseImgUrl = "https://image.tmdb.org/t/p/original";
  const baseUrl = "https://api.themoviedb.org/3";

  const handelMoviesOrignals = async () => {
    try {
      let url = await fetch(`${baseUrl}/${fechUrl}`);
      if (!url.ok) {
        const errorMessage = await url.text();
        console.log("Response error:", errorMessage);
        return;
      }
      let res = await url.json();
      setMovies(res.results);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    handelMoviesOrignals();
  }, []);

  const playMovie = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie.name || movie.title || movie.original_name)
        .then((url) => {
          console.log(url);
          const urlPrams = new URLSearchParams(new URL(url).search);
          console.log(urlPrams);
          console.log(urlPrams.get("v"));
          setTrailerUrl(urlPrams.get("v"));
        })
        .catch((err) => {
          toast.error("No available trailer found");
        });
    }
  };

  const handleClose=()=>{
    setTrailerUrl('')
  }

  const opts = {
    height: "400px",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  // Function to handle video end
  const handleVideoEnd = () => {
    setTrailerUrl("");
  };

  return (
    <div>
      <h1 className="text-white title-text">{title}</h1>
      <div className="netflix-orignilas">
        {movies.map((movie, index) => (
          <div key={index}>
            <div className="original-picture">
              <img
                src={
                  isLarge
                    ? `${baseImgUrl}/${movie.poster_path}`
                    : `${baseImgUrl}/${movie.backdrop_path}`
                }
                alt={movie.title}
                className={`row-poster ${isLarge && "row-poster-large"}`}
                onClick={() => playMovie(movie)}
              />
            </div>
          </div>
        ))}
      </div>
      {trailerUrl && (
        <div className="youtube-trailer">
          (
          <YouTube videoId={trailerUrl} opts={opts} onEnd={handleVideoEnd} />)
          <button className="btn btn-danger close" onClick={handleClose}>
         X
          </button>
        </div>
      )}
    </div>
  );
}

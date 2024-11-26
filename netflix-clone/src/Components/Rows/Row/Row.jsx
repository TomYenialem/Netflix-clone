import React, { useEffect, useState } from "react";
import "./Row.css";

import movieTrailer from "movie-trailer";
import { toast } from "react-toastify";
import YouTube from "react-youtube";

export default function Row({ title, fechUrl, isLarge }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false); 
  const baseImgUrl = "https://image.tmdb.org/t/p/original";
  const baseUrl = "https://api.themoviedb.org/3";

  const handelMoviesOrignals = async () => {
    try {
      let url = await fetch(`${baseUrl}/${fechUrl}`);
      console.log(url)
      if (!url.ok) {
        const errorMessage = await url.text();
        console.log("Response error:", errorMessage);
        return;
      }
      let res = await url.json();
      // if i used axios i won't use .json()
      setMovies(res.results);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    handelMoviesOrignals();
  }, []);

  const playMovie = (movie) => {
    setIsLoading(true); 
    if (trailerUrl) {
      setTrailerUrl("");
      setIsLoading(false);
    } else {
      movieTrailer(movie.name || movie.title || movie.original_name)
        .then((url) => {
          const urlPrams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlPrams.get("v"));
          console.log(new URL(url));
  
        })
        .catch((err) => {
          toast.error("No available trailer found");
          setIsLoading(false);
        });
    }
  };

  const handleClose = () => {
    setTrailerUrl("");
    setIsLoading(false);
  };

  const opts = {
    height: "400px",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleVideoEnd = () => {
    setTrailerUrl("");
  };

  const handleVideoReady = () => {
    setIsLoading(false);
  };

  return (
    <div>
      <h1 className="text-white title-text ">{title}</h1>
      <div className="netflix-orignilas">
        {movies?.map((movie, index) => (
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
          {isLoading && <div className="loader">Loading...</div>} 
          <div className="video-wrapper">
            <YouTube
              videoId={trailerUrl}
              opts={opts}
              onEnd={handleVideoEnd}
              onReady={handleVideoReady}
            />
            <button className="btn btn-danger close" onClick={handleClose}>
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

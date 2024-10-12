let API_KEY = import.meta.env.VITE_API_KEY;


const request = {

  tv: `discover/tv?api_key=${API_KEY}&language=en-US`,
  action: `discover/movie?api_key=${API_KEY}&with_genres=28`,
  Adventure: `discover/movie?api_key=${API_KEY}&with_genres=12`,
  Animation: `discover/movie?api_key=${API_KEY}&with_genres=16`,
  comedy: `discover/movie?api_key=${API_KEY}&with_genres=35`,
  fantasy: `discover/movie?api_key=${API_KEY}&with_genres=14`,
  horro: `discover/movie?api_key=${API_KEY}&with_genres=27`,
  romance: `discover/movie?api_key=${API_KEY}&with_genres=10749`,
  war: `discover/movie?api_key=${API_KEY}&with_genres=10752`,
  triller:`discover/movie?api_key=${API_KEY}&with_genres=53`
};

export default request

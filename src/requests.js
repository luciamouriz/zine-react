const API_KEY = "6c214eacc098404fa7eea530184eead5";



const requests = {
  fetchPopular: `/trending/all/day?api_key=${API_KEY}&language=es`,
  fetchTop10: `/trending/all/week?api_key=${API_KEY}&language=es`,
  fetchMovies: `/movie/popular?api_key=${API_KEY}&language=es`,
  fetchSeries: `/tv/popular?api_key=${API_KEY}&language=es`,
  fetchRecomendation: `/trending/all/week?api_key=${API_KEY}&language=es`,
  fetchInfoVideo: `?api_key=${API_KEY}&language=es&append_to_response=videos,images`,

  IMG_URL_S: "https://image.tmdb.org/t/p/w154",
  IMG_URL_M: "https://image.tmdb.org/t/p/w780",
  IMG_URL_L: "https://image.tmdb.org/t/p/w1280"
};


export default requests;
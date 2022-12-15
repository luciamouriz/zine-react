const API_KEY = "6c214eacc098404fa7eea530184eead5";

const requests = {
    fetchPopular: `/trending/all/day?api_key=${API_KEY}&language=es`,
    fetchTop10: `/trending/all/week?api_key=${API_KEY}&language=es`,
    fetchMovies: `/movie/popular?api_key=${API_KEY}&language=es`,
    fetchSeries: `/tv/popular?api_key=${API_KEY}&language=es`,
    fetchRecomendation: `/trending/all/week?api_key=${API_KEY}&language=es`,
  };
  
  export default requests;
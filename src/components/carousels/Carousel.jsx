import { useEffect, useState } from "react";

const API_KEY = "?api_key=6c214eacc098404fa7eea530184eead5&language=es";
const BASE_URL = "https://api.themoviedb.org/3";
const POPULAR = BASE_URL + "/trending/all/day" + API_KEY;

const IMG_URL_S = "https://image.tmdb.org/t/p/w154";
const IMG_URL_M = "https://image.tmdb.org/t/p/w780";
const IMG_URL_L = "https://image.tmdb.org/t/p/w1280";


export const Carousel = () => {

    const [movies, setMovies] = useState([]);


    const getCarouselPopular = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setMovies(data.results);
    };

    useEffect(() => {
        getCarouselPopular(POPULAR);
    }, []);

    return (
        <>

            <div className="contenedor-populares contenedor-style">
                <h2>Popular en Zine</h2>
                <button role="button" className="flecha-izquierda flecha-color">&#10094;</button>
                <button role="button" className="flecha-derecha flecha-color">&#10095;</button>
                <div className="contenedor-carousel-populares carousel-size">
                    <div id="carousel-popular" className="carousel-popular carousel-flex">
                        {movies.length > 0 &&
                            movies.map((movie) =>
                                <div className="pelicula">
                                    <img src={`${IMG_URL_M}${movie.poster_path}`} alt='Imagen portada' />
                                </div>)
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

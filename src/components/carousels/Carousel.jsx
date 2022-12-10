import { useEffect, useState } from "react";


export const Carousel = () => {

    const [movies, setMovies] = useState([]);


    const getCarouselPopular = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setMovies(data.results);
        
    };

    useEffect(() => {
        getCarouselPopular(import.meta.env.VITE_POPULAR);
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
                                    <img src={`${import.meta.env.VITE_IMG_URL_M}${movie.poster_path}`} alt='Imagen portada' />
                                </div>)
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

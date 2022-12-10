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

            <div className="container-populares container-style">
                <h2>Popular en Zine</h2>
                <button role="button" className="arrow-left arrow-color">&#10094;</button>
                <button role="button" className="arrow-right arrow-color">&#10095;</button>
                <div className="container-carousel-populars carousel-size">
                    <div id="carousel-popular" className="carousel-popular carousel-flex">
                        {movies.length > 0 &&
                            movies.map((movie) =>
                                <div className="movie">
                                    <img src={`${import.meta.env.VITE_IMG_URL_M}${movie.poster_path}`} alt='Imagen portada' />
                                </div>)
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

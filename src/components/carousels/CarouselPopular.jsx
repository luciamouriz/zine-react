import { useEffect, useState } from "react";
import { Carousel } from "./Carousel";


export const CarouselPopular = () => {

    const [movies, setMovies] = useState([]);


    const getCarousel = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setMovies(data.results);

    };

    useEffect(() => {
        getCarousel(import.meta.env.VITE_POPULAR);
    }, []);

    return (
        <>
            <Carousel
                title="Popular en Zine"
                video={movies.length > 0 && movies.map((movie) =>
                    <div className="movie">
                        <img src={`${import.meta.env.VITE_IMG_URL_M}${movie.poster_path}`} alt='Imagen portada' />
                    </div>)
                }
            />
        </>
    )
}

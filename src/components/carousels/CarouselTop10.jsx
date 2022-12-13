import { useEffect, useState } from "react";
import { Carousel } from "./Carousel";

export const CarouselTop10 = () => {


    const [movies, setMovies] = useState([]);


    const getCarousel = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setMovies(data.results);

    };

    useEffect(() => {
        getCarousel(import.meta.env.VITE_TOP10);
    }, []);


    return (

        <>
            <Carousel
                title="Top 10"
                video={movies.length > 0 && movies.map((movie, index) =>
                    <div className="top">
                        <div className='num-video'>
                            <p className='top-num'>{index + 1}</p>
                            <img src={`${import.meta.env.VITE_IMG_URL_M}${movie.poster_path}`} alt='Imagen portada' />
                        </div>
                    </div>)
                }
            />
        </>


    )
}

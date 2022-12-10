import { useEffect, useState } from "react";


export const CardFront = () => {

    const [movies, setMovies] = useState([]);


    const getCarouselPopular = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setMovies(data.results[Math.floor(Math.random() * data.results.length)]);
    };


    useEffect(() => {
        getCarouselPopular(import.meta.env.VITE_POPULAR);

    }, []);



    return (
        <div className="container-card-front">

            <div className="card-front" style={{ backgroundImage: `url(${import.meta.env.VITE_IMG_URL_L}${movies.backdrop_path})` }}>
                <div className="gradient"></div>

            </div>

        </div>
    )
}

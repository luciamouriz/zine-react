import { useEffect, useState } from "react";


export const CardFront = () => {

    const [movies, setMovies] = useState([]);
    const styles = {
        green: {
            color: "#16CA13"
        },
        orange: {
            color: "#16CA13"
        },
        red: {
            color: "#16CA13"
        }
    }

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
                <div className="card">
                    <p className="tipo-video">{movies.media_type == "movie" ? "Pelicula" : "Serie"} </p>
                    <p className="titulo">{movies.original_title ? movies.original_title : movies.name}</p>
                    <p className="descripcion">{movies.overview + "..."}</p>
                    <div className="botones">
                        <button id="play">&#128898; Reproducir</button>
                        <div className="boton-valorado">
                            <div id="star" className="star">&#9733;</div>
                            <div id="valorado">{Math.round(movies.vote_average)+"/10"}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

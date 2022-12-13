import { useEffect, useState } from "react";


export const CardFront = () => {

    const [movies, setMovies] = useState([]);
    const styles = {
        green: {
            color: "#16CA13"
        },
        orange: {
            color: "#CAC313"
        },
        red: {
            color: "#CA1313"
        }
    }

    const getColorStar = () => {
        if (movies.vote_average >= 7) {
            return styles.green;
        } else if (movies.vote_average < 7 && movies.vote_average >= 4) {
            return styles.orange;
        } else if (movies.vote_average < 4) {
            return styles.red;
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
                    <p>{movies.media_type == "movie" ? "Pelicula" : "Serie"} </p>
                    <p className="title">{movies.original_title ? movies.original_title : movies.name}</p>
                    <p className="description">{movies.overview + "..."}</p>
                    <div className="buttons">
                        <button id="button-play">&#128898; Reproducir</button>
                        <div className="button-valued">
                            <div id="star" className="star" style={getColorStar()}>&#9733;</div>
                            <div id="valued">{Math.round(movies.vote_average) + "/10"}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

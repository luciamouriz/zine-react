import axios from "../../axios";
import { useEffect, useState } from "react";
import requests from "../../requests";
import { Link } from "react-router-dom";

export const Banner = () => {

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


    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchPopular);
            setMovies(request.data.results[Math.floor(Math.random() * request.data.results.length)]);
            return request;
        }
        fetchData();
    }, []);


    return (
        <div className="container-card-front">
            <div className="card-front" style={{ backgroundImage: `url(${requests.IMG_URL_L}${movies.backdrop_path})` }}>
                <div className="gradient"></div>
                <div className="card">
                    <p>{movies.media_type}</p>
                    <p className="title">{movies.original_title ? movies.original_title : movies.name}</p>
                    <p className="description">{movies.overview + "..."}</p>
                    <div className="buttons">
                        <Link className="button-play" to={`/${movies.media_type}/${movies.id}`}>&#128898; Reproducir</Link>
                        <div className="button-valued">
                            <div className="star" style={getColorStar()}>&#9733;</div>
                            <div>{Math.round(movies.vote_average) + "/10"}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

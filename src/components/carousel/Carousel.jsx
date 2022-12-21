import { useEffect, useState } from "react";
import axios from "../../axios";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import requests from "../../requests";


export const Carousel = ({ title, classname, url, video }) => {


    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(url);
            setMovies(request.data.cast)
            //Si no es data.results añadimos el data.cast (para el carousel de reparto en la page InfoVideo)
            request.data.results ? setMovies(request.data.results) : setMovies(request.data.cast)
            return request;
        }
        fetchData();

    }, [url]);


    const handleClickArrowLeft = (e) => {
        e.target.parentNode.lastElementChild.scrollLeft -= e.target.parentNode.lastElementChild.offsetWidth;
    };
    const handleClickArrowRight = (e) => {
        e.target.parentNode.lastElementChild.scrollLeft += e.target.parentNode.lastElementChild.offsetWidth;
    };

    const getCast = (movie) => {
        if (movie.profile_path != null) {
            return <div className={classname}>
                <p className='depart'>{movie.known_for_department}</p>
                <img src={`${requests.IMG_URL_M}${movie.profile_path}`} alt='Photo Actor' />
                <p>{movie.name}</p>
                <p>{movie.character}</p>
            </div>
        } else { return }
    }

    const getSimilar = (movie) => {
        if (movie.backdrop_path != null) {
            return <div className={classname}>
                <p className='title-similar'>{movie.title}</p>
                <a href={movie.media_type ? `/${movie.media_type}/${movie.id}` : `/${video}/${movie.id}`}>
                    <img src={`${requests.IMG_URL_M}${movie.backdrop_path}`} alt='Poster Similar' />
                </a>
            </div>
        } else { return }
    }

    const getTop = (movie, index) => {
        if (index < 10) {
            return <div className={classname}>
                <div className='num-video'>
                    <p className='top-num'>{index + 1}</p>
                    <img src={`${requests.IMG_URL_M}${movie.poster_path}`} alt='Poster Movie/Tv' />
                </div>
            </div>
        } else { return }

    }


    return (
        <>
            {/*  Preguntamos si hay movies,cast,similar si no hay no se pondran*/}
            {movies.length > 0 &&
                <div className="carousel-container">
                    <h2>{title}</h2>
                    <button className="arrow-left arrow-color" onClick={handleClickArrowLeft}>&#10094;</button>
                    <button className="arrow-right arrow-color" onClick={handleClickArrowRight}>&#10095;</button>
                    <div className="carousel-size">
                        <div className="carousel-flex">
                            {movies.length > 0 && movies.map((movie, index) =>
                                <>
                                    {classname === "cast" && getCast(movie)}
                                    {/* Tendran enlace los siguientes carrouseles */}
                                    <a href={movie.media_type ? `/${movie.media_type}/${movie.id}` : `/${video}/${movie.id}`}>

                                        {classname == "top" ? getTop(movie, index) :
                                            classname == "similar" ? getSimilar(movie) :
                                                classname == "movie" || classname == "recomendation" ?
                                                    <div className={classname}>
                                                        <img src={`${requests.IMG_URL_M}${movie.poster_path}`} alt='Poster Movie/Tv' />
                                                    </div> : ""
                                        }
                                    </a>

                                </>)
                            }
                        </div>
                    </div>
                </div>}
        </>
    )
}

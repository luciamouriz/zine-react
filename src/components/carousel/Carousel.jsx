import { useEffect, useState } from "react";
import axios from "../../axios";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import requests from "../../requests";


export const Carousel = ({ title, classname, url }) => {


    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(url);
            setMovies(request.data.cast)
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
            return [<p className='depart'>{movie.known_for_department}</p>,
            <img src={`${requests.IMG_URL_M}${movie.profile_path}`} alt='Photo Actor' />,
            <p>{movie.name}</p>,
            <p>{movie.character}</p>]
        } else { return }
    }

    const getSimilar = (movie) => {
        if (movie.backdrop_path != null) {
            return [<p className='title-similar'>{movie.title}</p>,
            <Link to={movie.media_type ? `/${movie.media_type}/${movie.id}` : `/${classname}/${movie.id}`}>
                <img src={`${requests.IMG_URL_M}${movie.backdrop_path}`} alt='Poster Similar' />
            </Link>]
        } else { return }
    }



    return (
        <div className="carousel-container">
            <h2>{title}</h2>
            <button className="arrow-left arrow-color" onClick={handleClickArrowLeft}>&#10094;</button>
            <button className="arrow-right arrow-color" onClick={handleClickArrowRight}>&#10095;</button>
            <div className="carousel-size">
                <div className="carousel-flex">
                    {movies.length > 0 && movies.map((movie, index) =>

                        <Link to={movie.media_type ? `/${movie.media_type}/${movie.id}` : `/${classname}/${movie.id}`}>
                            <div className={classname}>{
                                classname == "top" ?
                                    <div className='num-video'>
                                        <p className='top-num'>{index + 1}</p>
                                        <img src={`${requests.IMG_URL_M}${movie.poster_path}`} alt='Poster Movie/Tv' />
                                    </div>
                                    : classname == "cast" ? getCast(movie)
                                        : classname == "similar" ? getSimilar(movie)
                                            : <img src={`${requests.IMG_URL_M}${movie.poster_path}`} alt='Poster Movie/Tv' />

                            }</div>
                        </Link>)
                    }
                </div>
            </div>
        </div>
    )
}

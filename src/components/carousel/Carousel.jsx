import { useEffect, useState } from "react";
import axios from "../../axios";
import { BrowserRouter as Router, Link, useParams } from 'react-router-dom';
import requests from "../../requests";


export const Carousel = ({ title, classname, url }) => {


    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(url);
            setMovies(request.data.results);
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

    
    return (
        <div className="carousel-container">
            <h2>{title}</h2>
            <button className="arrow-left arrow-color" onClick={handleClickArrowLeft}>&#10094;</button>
            <button className="arrow-right arrow-color" onClick={handleClickArrowRight}>&#10095;</button>
            <div className="carousel-size">
                <div className="carousel-flex">
                    {movies.length > 0 && movies.map((movie, index) =>
                        <Link to={`/${movie.media_type}/${movie.id}`}>
                            <div className={classname}>{
                                    classname == "top" ?
                                        <div className='num-video'>
                                            <p className='top-num'>{index + 1}</p>
                                            <img src={`${requests.IMG_URL_M}${movie.poster_path}`} alt='Imagen portada' />
                                        </div> : <img src={`${requests.IMG_URL_M}${movie.poster_path}`} alt='Imagen' />
                                }</div>
                        </Link>)
                    }
                </div>
            </div>
        </div>
    )
}

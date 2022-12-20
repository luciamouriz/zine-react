import axios from "../../axios";
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import requests from '../../requests';

export const Search = () => {

    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState(1)


    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(`${requests.fetchSearch}${search}&page=1&include_adult=false`);
            //Lista de movie/tv
            setMovies(request.data.results.filter(data => data.media_type != "person"))
            return request;

        }

        fetchData();
    }, [search]);

    const handleChange = (e) => {
        setSearch(e.target.value)

    }

    return (
        <>
            <input type="text" name="text" className="search" placeholder="SEARCH" onChange={handleChange} />
            {search.length > 0 &&
                <div className="search-container">
                    <div className="search-videos">
                        {movies.length > 0 && movies.map((movie) =>
                            <a href={`/${movie.media_type}/${movie.id}`}>
                                {movie.poster_path != null &&
                                    < img src={`${requests.IMG_URL_M}${movie.poster_path}`} alt="Movie/Tv Image" />
                                }
                            </a>)}
                    </div>
                </div>
            }
        </>
    )
}

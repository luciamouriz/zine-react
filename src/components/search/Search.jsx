import axios from "../../axios";
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import requests from '../../requests';

export const Search = () => {

    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState(1)


    useEffect(() => {
        async function fetchData() {
            if (search.length > 0) {
                const request = await axios.get(`${requests.fetchSearch}${search}&page=1&include_adult=false`);
                setMovies(request.data.results)
                return request;
            }
        }

        fetchData();
    }, [search]);

    const handleChange = (e) => {
        e.preventDefault()
        setSearch(e.target.value)

    }

    return (
        <>
            <input type="text" name="text" className="search" placeholder="SEARCH" onChange={handleChange} />
            <div className="search-container">
                <div className="search-videos">
                    {movies.length > 0 && movies.map((movie) =>
                        <Link to={`/${movie.media_type}/${movie.id}`}>
                            <img src={`${requests.IMG_URL_M}${movie.poster_path}`} alt="Movie/Tv Image" />
                        </Link>)}
                </div>

            </div>
        </>
    )
}

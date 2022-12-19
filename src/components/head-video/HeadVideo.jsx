import axios from "../../axios";
import { useEffect, useState } from "react";
import requests from "../../requests";
import { Link } from "react-router-dom";

export const HeadVideo = ({ id, video }) => {


    const [movies, setMovies] = useState([]);
    const [trailers, setTrailers] = useState([]);


    useEffect(() => {

        async function fetchData() {
            const request = await axios.get(`/${video}/${id}${requests.fetchInfoVideo}`);
            setMovies(request.data);
            setTrailers(request.data.videos.results);
            return request;
        }
        fetchData();

    }, []);


    const existVideo = () => {
        let j
        if (trailers.length > 0) {
            trailers.map((movie, index) => {
                if (movie.key) {
                    j = index
                }
            })

            return <iframe width="100%" height="615"
                src={`https://www.youtube.com/embed/${trailers[j].key}?autoplay=1&modestbraning=1&loop=1&showinfo=1`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
            </iframe>

        } else {
            return <img src={`${requests.IMG_URL_L}${movies.backdrop_path}`} className='proximamente' />;
        }
    }

    const filterInfo = () => {
        if (video == "movie") {
            return [<p className="gender">{"Movie"}</p>,
            <p className="title-info">{movies.title}</p>,
            <p className="info">{movies.release_date}</p>]
        } else {
            return [<p className="gender">{"Serie"}</p>,
            <p className="title-info">{movies.name}</p>,
            <p className="info">{movies.first_air_date}</p>]
        }
    }




    return (

        <>
            <Link className="back-arrow" to="/">&#129092;</Link>
            <div className="info-video">
                {existVideo()}
                {filterInfo()}
                <hr />
                <p>{movies.overview}</p>
                <hr />
            </div>
        </>

    )
}

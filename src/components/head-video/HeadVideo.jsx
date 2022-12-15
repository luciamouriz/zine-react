import axios from "../../axios";
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import requests from "../../requests";

export const HeadVideo = () => {


    const { id, video } = useParams()
    const [movies, setMovies] = useState([]);
    
   
    useEffect(() => {
        
        async function fetchData() {
            const request = await axios.get(`/${video}/${id}${requests.fetchInfoVideo}`);
            setMovies(request.data);
            return request;
        }
        fetchData();
    },[]);



    return (
        <>
            <p className="back-arrow"><a href="index.html">&#129092;</a></p>
            <div className="ficha">
                <div id="media"></div>
                <p id="genero">{movies.name}</p>
                <p id="title-ficha" className="title-ficha">{movies.title}</p>
                <p id="info"></p>
                <hr />
                <p id="sinopsis">{movies.overview}</p>
                <hr />
            </div>
        </>
    )
}

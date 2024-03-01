import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from "../../axios";
import requests from "../../requests";

export const Carousel = ({ title, classname, url, video }) => {


    const [movies, setMovies] = useState([]);


    useEffect(() => {
        async function fetchData() {

            const request = await axios.get(url);
            //Si el carrusel es de vistos recientemente, concatenamos aqui los resultados de peliculas y los de series
            //para luego comparar los ID que estan en localStorage con el ID pelis y series que hay
            if (classname === "views") {
                const request2 = await axios.get(requests.fetchSeries);
                const result = request2.data.results.concat(request.data.results)
                setMovies(result)
                return request;

            } else {
                //Si no es data.results añadimos el data.cast (para el carousel de reparto en la page InfoVideo)
                switch (classname) {
                    case "cast": setMovies(request.data.cast)
                        break;
                    case "episodes": setMovies(request.data.episodes)
                        break;

                    default: setMovies(request.data.results)
                }
                return request;
            }



        }


        fetchData();


    }, [url]);

    //Flechas de los carruseles
    const handleClickArrowLeft = (e) => {
        e.target.parentNode.lastElementChild.scrollLeft -= e.target.parentNode.lastElementChild.offsetWidth;
    };
    const handleClickArrowRight = (e) => {
        e.target.parentNode.lastElementChild.scrollLeft += e.target.parentNode.lastElementChild.offsetWidth;
    };

    //Carrusel de reparto de actores y actrices de cada ficha
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

    //Carrusel de Peliculas o series similares que apareceran en cada ficha
    const getSimilar = (movie) => {
        if (movie.backdrop_path != null) {
            return <Link to={movie.media_type ? `/${movie.media_type}/${movie.id}` : `/${video}/${movie.id}`} onClick={(e) => localData(movie.id)}>
                <div className={classname}>
                    <p className='title-similar'>{movie.title ? movie.title : movie.name}</p>
                    <img src={`${requests.IMG_URL_M}${movie.backdrop_path}`} alt='Poster Similar' />
                </div> </Link>
        } else { return }
    }

    //Carrusel de Peliculas o Series TOP 10
    const getTop = (movie, index) => {
        if (index < 10) {
            return <Link to={movie.media_type ? `/${movie.media_type}/${movie.id}` : `/${video}/${movie.id}`} onClick={(e) => localData(movie.id)}>
                <div className={classname}>
                    <div className='num-video'>
                        <p className='top-num'>{index + 1}</p>
                        <img src={`${requests.IMG_URL_M}${movie.poster_path}`} alt='Poster Movie/Tv' />
                    </div>
                </div>
            </Link>
        } else { return }

    }

    //Carrusel de Episodios de cada Serie
    const getEpisodes = (movie) => {
        if (movie.still_path != null) {
            return <div className={classname}>
                <div className="description-episode">
                    <p className='title-episode'>{movie.name}</p>
                    <p>{movie.overview}</p>
                </div>
                <img src={`${requests.IMG_URL_M}${movie.still_path}`} alt='Episode' />
            </div>
        } else { return }
    }



    //Vamos añadiendo en el array de localStorage los id de las peliculas o series para que se graben, y cuando entres al navegador
    //salgan las que has estado viendo
    const localData = (id) => {
        localStorage.setItem("id", localStorage.id += id + ",")
    }

    //Carrusel Vistos recientemente
    const getRecentView = (movie) => {

        let vistos = localStorage.getItem("id")

        if (vistos != null) {
            /*  document.querySelector(".show").style.display = "block"; */
            let vistosSplit = vistos.substring(9, 1000000000).split(",")
            let vistosSort = vistosSplit.sort();

            for (let i = 0; i < vistosSort.length; i++) {
                if (vistosSort[i] === "") { vistosSort.splice(i, 1) }
                if (vistosSort[i + 1] === vistosSort[i]) { vistosSort.splice(i, 1) }
                if (vistosSort[i] == movie.id) {
                    vistosSort.splice(i,1)
                    return <Link to={movie.media_type ? `/${movie.media_type}/${movie.id}` : `/${video}/${movie.id}`} onClick={(e) => localData(movie.id)}>
                        <div className={"movie"}>
                            <img src={`${requests.IMG_URL_M}${movie.poster_path}`} alt='Poster Movie/Tv' />
                        </div></Link>
                }
            }

        }


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
                            {movies.map((movie, index) =>
                                <>
                                    {classname === "cast" && getCast(movie)}
                                    {classname === "episodes" && getEpisodes(movie)}
                                    {/* Tendran enlace los siguientes carrouseles AÑADIR ONCLICK A ENLACE PARA AÑADIR LOCALSTOREAGE*/}
                                    {/*  <Link to={movie.media_type ? `/${movie.media_type}/${movie.id}` : `/${video}/${movie.id}`} onClick={(e) => localData(movie.id)}> */}
                                    {classname == "top" ? getTop(movie, index) :
                                        classname == "similar" ? getSimilar(movie) :
                                            classname == "views" ? getRecentView(movie) :
                                                classname == "movie" || classname == "recomendation" ?
                                                    <Link to={movie.media_type ? `/${movie.media_type}/${movie.id}` : `/${video}/${movie.id}`} onClick={(e) => localData(movie.id)}>
                                                        <div className={classname}>
                                                            <img src={`${requests.IMG_URL_M}${movie.poster_path}`} alt='Poster Movie/Tv' />
                                                        </div>
                                                    </Link> : ""
                                    }
                                    {/* </Link>  */}


                                    {/*  <ScrollRestoration
                                        getKey={(location, matches) => {
                                            // default behavior
                                            return location.key;
                                        }}
                                    /> */}
                                </>)
                            }
                        </div>
                    </div>
                </div>}
        </>
    )
}

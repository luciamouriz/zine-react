
import { Carousel } from './components/carousels/Carousel'
import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import requests from './requests'


export const App = () => {
    return (
        <>
            <Header />
            <main>
                <Carousel title="Popular en Zine" classname="movie" url={requests.fetchPopular}/>
                <Carousel title="Top 10" classname="top" url={requests.fetchTop10}/>
                <Carousel title="Peliculas Populares" classname="movie" url={requests.fetchMovies}/>
                <Carousel title="Series Populares" classname="tv" url={requests.fetchSeries}/>
                <Carousel title="Recomendaciones" classname="recomendacion" url={requests.fetchRecomendation}/>
            </main>
            <Footer/>
        </>
    )
}

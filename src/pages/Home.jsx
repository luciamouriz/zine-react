import { Banner } from '../components/banner/Banner'
import { Carousel } from '../components/carousel/Carousel'
import { Footer } from '../components/footer/Footer'
import { Header } from '../components/header/Header'
import requests from '../requests'

export const Home = () => {
    return (
        <>
            <Header />
            <main>
                <Banner />
                <Carousel title="Popular en Zine" classname="movie" url={requests.fetchPopular} />
                <Carousel title="Top 10" classname="top" url={requests.fetchTop10} />
                <Carousel title="Peliculas Populares" classname="movie" url={requests.fetchMovies} />
                <Carousel title="Series Populares" classname="movie" url={requests.fetchSeries} />
                <Carousel title="Recomendaciones" classname="recomendation" url={requests.fetchRecomendation} />
            </main>
            <Footer />
        </>
    )
}

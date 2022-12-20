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
                <Carousel title="Popular in Zine" classname="movie" url={requests.fetchPopular} />
                <Carousel title="Top 10" classname="top" url={requests.fetchTop10} />
                <Carousel title="Popular Movies" classname="movie" url={requests.fetchMovies} video={"movie"}/>
                <Carousel title="Popular Series" classname="movie" url={requests.fetchSeries} video={"tv"}/>
                <Carousel title="Recommendations" classname="recomendation" url={requests.fetchRecomendation} />
            </main>
            <Footer />
        </>
    )
}

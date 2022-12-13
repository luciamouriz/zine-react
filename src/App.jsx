
import { Carousel } from './components/carousels/Carousel'
import { CarouselPopular } from './components/carousels/CarouselPopular'
import { CarouselTop10 } from './components/carousels/CarouselTop10'
import { Header } from './components/header/Header'


export const App = () => {
    return (
        <>
            <Header />
            <main>
                <CarouselPopular/>
                <CarouselTop10/>
            </main>
        </>
    )
}

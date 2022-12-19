import { useParams } from "react-router-dom"
import { Carousel } from "../components/carousel/Carousel"
import { Footer } from "../components/footer/Footer"
import { HeadVideo } from "../components/head-video/HeadVideo"
import { Header } from "../components/header/Header"
import requests from "../requests"

export const InfoVideo = () => {

  const { id, video } = useParams();

  return (
    <>
      <Header />
      <main>
        <div className="contenedor-ficha">
          <HeadVideo key={id} id={id} video={video} />
          <div className="ficha">
            <Carousel title="Reparto" classname="cast" url={`/${video}/${id}/credits${requests.fetchInfoVideo}`} />
            <Carousel title="Similares" classname="similar" url={`/${video}/${id}/similar${requests.fetchInfoVideo}`} />
          </div>
        </div>
      </main>

      <Footer />

    </>
  )
}

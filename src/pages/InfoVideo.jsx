import { Link, useParams } from "react-router-dom"
import { Carousel } from "../components/carousel/Carousel"
import { Footer } from "../components/footer/Footer"
import { HeadVideo } from "../components/head-video/HeadVideo"
import { Header } from "../components/header/Header"
import { Season } from "../components/season/Season"
import requests from "../requests"

export const InfoVideo = () => {

  const { id, video } = useParams();

  return (
    <>
      <Header />
      <main>
        <div className="container-info-video">
          <Link className="back-arrow" to="/">&#129092;</Link>
          <div className="info-video">
            <HeadVideo key={id} id={id} video={video} />
            <Carousel key={id} title="Cast" classname="cast" url={`/${video}/${id}/credits${requests.fetchInfoVideo}`} />
            {video == "tv" && <Season key={id} id={id} />}
            <Carousel key={id} title="Similar" classname="similar" url={`/${video}/${id}/similar${requests.fetchInfoVideo}`} video={video} />
          </div>
        </div>
      </main>
      <Footer />

    </>
  )
}

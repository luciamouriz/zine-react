import axios from "../../axios";
import { useEffect, useState } from "react";
import requests from "../../requests";
import { Carousel } from "../carousel/Carousel";

export const Season = ({ id }) => {


  const [seasons, setSeasons] = useState([]);
  const [isVisible, setIsVisible] = useState(0);


  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`/tv/${id}${requests.fetchInfoVideo}`);
      setSeasons(request.data.seasons)
      return request;
    }

    fetchData();

  }, []);


  return (
    <div class="container-seasons">
      {seasons.length > 0 && seasons.map((season, index) =>
        <>
          <div className="box-season" onClick={() => setIsVisible(index)}>
            <p>{season.name}</p>
          </div>
          <div className={index === isVisible ? 'episodes' : 'episodes-none'}>
            <Carousel key={season.id} classname="episodes" url={`/tv/${id}/season/${season.season_number}${requests.fetchInfoVideo}`} />
          </div>
          <span></span>
        </>
      )}
    </div>
  )
}

import axios from "../../axios";
import { useEffect, useState } from "react";
import requests from "../../requests";

export const Season = ({ id }) => {


  const [seasons, setSeasons] = useState([]);



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

      {seasons.length > 0 && seasons.map((season) =>
        <div className="box-season">
          <p>{season.name}</p>
        </div>

      )}
    </div>
  )
}

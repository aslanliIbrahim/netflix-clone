import React, { useEffect, useState } from "react";
import back_arrow_icon from "../assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDYwMTdlOTJkYWZiMTNkY2RkNGNiOTQ2YzVhNzFmZiIsIm5iZiI6MTc0NzY1NTg2MS40MjUsInN1YiI6IjY4MmIxY2I1MTVhMDFkNWE0NGUyNGQ2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vuNzQMvPqS4AyziehluIBOC9JMMts6Xq-8sFzQPEHbU",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="player h-screen flex flex-col justify-center items-center ">
      <img
        className="absolute top-[20px] left-[20px] w-[50px] cursor-pointer"
        src={back_arrow_icon}
        onClick={() => navigate("/")}
        alt="icon"
      />
      <iframe
        className="rounded-[4px] shadow-2xl"
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="trailer"
        allowFullScreen
        frameborder="0"
      ></iframe>
      <div className="player-info flex items-center justify-between w-[90%]">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;

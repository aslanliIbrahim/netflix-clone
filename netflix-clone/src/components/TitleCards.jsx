import React, { useEffect, useRef, useState } from "react";
import cards_data from "../assets/cards/Cards_data.js";

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();
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
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results))
      .catch((err) => console.error(err));
    cardsRef.current.addEventListener("wheel", (e) => {
      e.preventDefault();
      cardsRef.current.scrollLeft += e.deltaY;
    });
  }, []);
  return (
    <div className="mt-[50px] mb-[30px] ">
      <h2 className="mb-2 text-2xl font-bold">
        {title ? title : "Popular on Netflix"}
      </h2>
      <div
        ref={cardsRef}
        className="card-list flex gap-2.5 overflow-x-scroll scrollbar-hide"
      >
        {apiData.map((item, index) => (
          <div className="card relative min-w-[240px] shrink-0" key={index}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
              className="w-[240px] rounded-[4px] cursor-pointer"
              alt={item.original_title}
            />
            <p className="absolute bottom-2.5 right-2.5">
              {item.original_title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;

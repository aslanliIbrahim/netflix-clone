import React, { useEffect, useRef } from "react";
import cards_data from "../assets/cards/Cards_data.js";

const TitleCards = () => {
  const cardsRef = useRef();
  useEffect(() => {
    cardsRef.current.addEventListener("wheel", (e) => {
      e.preventDefault();
      cardsRef.current.scrollLeft += e.deltaY;
    });
  }, []);
  return (
    <div className="mt-[50px] mb-[30px] ">
      <h2 className="mb-2">Popular on Netflix</h2>
      <div
        ref={cardsRef}
        className="card-list flex gap-2.5 overflow-x-scroll scrollbar-hide"
      >
        {cards_data.map((item, index) => (
          <div className="card relative min-w-[240px] shrink-0" key={index}>
            <img
              src={item.image}
              className="w-[240px] rounded-[4px] cursor-pointer"
              alt={item.name}
            />
            <p className="absolute bottom-2.5 right-2.5">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;

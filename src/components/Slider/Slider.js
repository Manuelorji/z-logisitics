import { useState } from "react";
import NextBtn from "../Section-three/next.svg";
import PrevBtn from "../Section-three/prev.svg";
import "./Slider.scss";

export default function Slider({ cards }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  //tech blogs slider

  function slide(direction) {
    if (direction === "right") {
      if (currentIndex !== cards.length - 1) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
    } else if (direction === "left") {
      if (currentIndex !== 0) {
        currentIndex--;
      } else {
        currentIndex = cards.length - 1;
      }
    }
    cards.style.transform = `translateX(${-100 * currentIndex}vw)`;
  }

  setInterval(() => slide("right"), 5000);

  // //eventListeners
  // arrowLeftBtn.addEventListener("click", () => {
  //   slider("right");
  // });
  // arrowRightBtn.addEventListener("click", () => {
  //   slider("left");
  // });

  // const goToPrevious = () => {
  //   const isFirstSlide = currentIndex === 0;
  //   const newIndex = isFirstSlide ? cards.length - 1 : currentIndex - 1;
  //   setCurrentIndex(newIndex);
  // };

  // const goToNext = () => {
  //   const isLastSlide = currentIndex === cards.length - 1;
  //   const newIndex = isLastSlide ? 0 : currentIndex + 1;
  //   setCurrentIndex(newIndex);
  // };

  return (
    <div>
      <div className="cards"> {cards}</div>
      <div className="cards-slider-btns">
        <img
          className="prev-btn"
          src={PrevBtn}
          alt={"prev"}
          onClick={() => {
            slide("left");
          }}
          // onClick={goToPrevious}
        />
        <img
          className="next-btn"
          src={NextBtn}
          alt={"next"}
          onClick={() => {
            slide("right");
          }}
          // onClick={goToNext}
        />
      </div>
    </div>
  );
}

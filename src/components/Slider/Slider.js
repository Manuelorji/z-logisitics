import { useRef } from "react";
import NextBtn from "../Section-three/next.svg";
import PrevBtn from "../Section-three/prev.svg";
import "./Slider.scss";

export default function Slider({ children, cards }) {
  const sliderRef = useRef();

  let currentIndex = 0;

  //slide

  const slide = (direction) => {
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
    sliderRef.style.transform = `translateX(${-32 * currentIndex}vw)`;
  };

  // setInterval(() => slide("right"), 5000);

  return (
    <div className="container">
      <div className="cards" ref={sliderRef}>
        {children}
      </div>
      <div className="cards-slider-btns">
        <img
          className="prev-btn"
          src={PrevBtn}
          alt={"prev"}
          onClick={() => {
            slide("left");
          }}
        />
        <img
          className="next-btn"
          src={NextBtn}
          alt={"next"}
          onClick={() => {
            slide("right");
          }}
        />
      </div>
    </div>
  );
}

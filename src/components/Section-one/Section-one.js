import "./Section-one.scss";
import ShipImage from "./ship.jpg";
import ContainerImage from "./container.jpg";
import TrailerImage from "./trailer.jpg";
import NextBtn from "./next.svg";
import PrevBtn from "./prev.svg";
import Slider from "../Slider/Slider";
import { useRef, useState, useEffect } from "react";

export default function SectionOne() {
  const cards = [
    {
      image: ShipImage,
      detailHeader: "Sea Delivery",
      detailParagraph: "Considering recent years, ship delivery has increased.",
    },
    {
      image: ContainerImage,
      detailHeader: "Ground Shipping",
      detailParagraph:
        "Considering transportation in all countries around the world.",
    },
    {
      image: TrailerImage,
      detailHeader: "Air Freight",
      detailParagraph:
        "We have become experts in air freight all over the globe.",
    },
    // {
    //   image: ContainerImage,
    //   detailHeader: "Ground Shipping",
    //   detailParagraph:
    //     "Considering transportation in all countries around the world.",
    // },
    // {
    //   image: TrailerImage,
    //   detailHeader: "Air Freight",
    //   detailParagraph:
    //     "We have become experts in air freight all over the globe.",
    // },
    // {
    //   image: ShipImage,
    //   detailHeader: "Sea Delivery",
    //   detailParagraph: "Considering recent years, ship delivery has increased.",
    // },
    // {
    //   image: ContainerImage,
    //   detailHeader: "Ground Shipping",
    //   detailParagraph:
    //     "Considering transportation in all countries around the world.",
    // },
  ];

  const allCards = [
    cards.map((card, i) => (
      <div key={i} className="card">
        <img src={card.image} alt={card.image} />

        <div className="card-details">
          <span className="details-header">{card.detailHeader}</span>
          <br />
          <span className="details-paragraph">{card.detailParagraph}</span>
        </div>
      </div>
    )),
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex;
    const newIndex = isFirstSlide ? allCards.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === allCards.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // const [width, setWidth] = useState(0);
  // const cardsRef = useRef();

  // let index = 0;

  // const moveSlider = (direction) => {
  //   if (direction === "right") {
  //     if (
  //       cardsRef.current.offsetWidth * index >=
  //       cardsRef.current.scrollWidth
  //     ) {
  //       index = 0;
  //     } else {
  //       index++;
  //     }
  //   }
  //   if (direction === "left") {
  //     if (index === 0) {
  //       index = 0;
  //     } else {
  //       index--;
  //     }
  //   }
  //   allCards.current.style.transform = `translateX(-${
  //     cardsRef.current.offsetWidth * index
  //   }px)`;
  // };

  // useEffect(() => {
  //   setWidth(cardsRef.current.scrollWidth - cardsRef.current.offsetWidth);
  // }, []);

  return (
    <div className="section-one">
      <h1>
        We manage logistics from <br /> all over the world
      </h1>
      <div className="cards">{allCards}</div>
      <div className="cards-slider-btns">
        <img
          className="prev-btn"
          src={PrevBtn}
          alt={"prev"}
          // onClick={() => moveSlider("left")}
          // onClick={goToPrevious}
        />
        <img
          className="next-btn"
          src={NextBtn}
          alt={"next"}
          // onClick={() => moveSlider("right")}
          // onClick={goToNext}
        />
      </div>
    </div>
  );
}

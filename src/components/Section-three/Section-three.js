import Alfred from "./Alfred.png";
import Merlly from "./merlly.png";
import Kryckowik from "./Kryckowik.png";
import Slider from "../Slider/Slider";
import Accordion from "../Accordion/Accordion";

import { useState } from "react";

import "./Section-three.scss";

export default function SectionThree() {
  const cardsData = [
    {
      image: Alfred,
      detailsParagraph:
        "I can really recommend this company to any one looking for a reliable logistics company, they are the best.",
      detailsHeader: "Alfred Stones",
    },
    {
      image: Merlly,
      detailsParagraph:
        "I got my parcel not too long ago and i’m really happy about it.",
      detailsHeader: "Merlly collback",
    },
    {
      image: Kryckowik,
      detailsParagraph:
        " I really like the live tracking option, i can easily track my parcel. Atleast i don’t have to worry",
      detailsHeader: "kryckowik blacz",
    },
    {
      image: Alfred,
      detailsParagraph:
        "I can really recommend this company to any one looking for a reliable logistics company, they are the best.",
      detailsHeader: "Alfred Stones",
    },
    {
      image: Alfred,
      detailsParagraph:
        "I can really recommend this company to any one looking for a reliable logistics company, they are the best.",
      detailsHeader: "Alfred Stones",
    },
  ];

  const accordionData = [
    {
      title: "How do I start?",
      content:
        " Sign up with your email or phone number and start enjoying our services we also have discounts for new users.",
    },
    {
      title: "How long do i have to wait to get my parcel?",
      content:
        " Sign up with your email or phone number and start enjoying our services we also have discounts for new users.",
    },
    {
      title: "How do i get discounts?",
      content:
        " Sign up with your email or phone number and start enjoying our services we also have discounts for new users.",
    },
    {
      title: "Do you offer cross-country pickup?",
      content:
        " Sign up with your email or phone number and start enjoying our services we also have discounts for new users.",
    },
    {
      title: "What documents do i need to pickup?",
      content:
        " Sign up with your email or phone number and start enjoying our services we also have discounts for new users.",
    },
  ];

  const cards = [
    cardsData.map((data, i) => {
      return (
        <div key={i} className="card">
          <img src={data.image} alt={data.detailsHeader} />
          <div className="card-details">
            <p className="details-paragraph">{data.detailsParagraph}</p>
            <span className="details-header">{data.detailsHeader}</span>
            <br />
          </div>
        </div>
      );
    }),
  ];

  return (
    <div className="section-three">
      <h4 className="blue-txt">Testimonial</h4>
      <h1>What our clients say about us</h1>
      <p>
        Our clients do say we are the best and keep finding ways to improve
        their experiences
      </p>
      <Slider cards={cards} />

      {/* <div className="card">
          <img src={Merlly} alt={"Merlly collback"} />
          <div className="card-details">
            <p className="details-paragraph">
              I got my parcel not too long ago and i’m really happy about it.
            </p>
            <span className="details-header">Merlly collback</span>
            <br />
          </div>
        </div>
        <div className="card">
          <img src={Kryckowik} alt={"kryckowik blacz"} />
          <div className="card-details">
            <p className="details-paragraph">
              I really like the live tracking option, i can easily track my
              parcel. Atleast i don’t have to worry
            </p>
            <span className="details-header">kryckowik blacz</span>
            <br />
          </div>
        </div> */}

      <div className="more-info">
        <div className="more-info-accordions">
          <Accordion accordionData={accordionData} />

          {/* <div className="accordion">
            <div className="title">
              <h4>How long do i have to wait to get my parcel?</h4>
              <img
                src={AccordionBtn}
                alt={"accordion-btn"}
                className="accordion-btn"
              />
            </div>
            <div className="detail">
              <p>
                Sign up with your email or phone number and start enjoying our
                services wealso have discounts for new users.
              </p>
            </div>
          </div>
          <div className="accordion">
            <div className="title">
              <h4>How do i get discounts?</h4>
              <img
                src={AccordionBtn}
                alt={"accordion-btn"}
                className="accordion-btn"
              />
            </div>
            <div className="detail">
              <p>
                Sign up with your email or phone number and start enjoying our
                services wealso have discounts for new users.
              </p>
            </div>
          </div>
          <div className="accordion">
            <div className="title">
              <h4>Do you offer cross-country pickup?</h4>
              <img
                src={AccordionBtn}
                alt={"accordion-btn"}
                className="accordion-btn"
              />
            </div>
            <div hidden className="detail">
              <p>
                Sign up with your email or phone number and start enjoying our
                services wealso have discounts for new users.
              </p>
            </div>
          </div>
          <div className="accordion">
            <div className="title">
              <h4>What documents do i need to pickup?</h4>
              <img
                src={AccordionBtn}
                alt={"accordion-btn"}
                className="accordion-btn"
              />
            </div>
            <div hidden className="detail">
              <p>
                Sign up with your email or phone number and start enjoying our
                services wealso have discounts for new users.
              </p>
            </div>
          </div> */}
        </div>
        <div className="more-info-contact">
          <h1>
            Any question?
            <br /> We got you.
          </h1>
          <p>
            We always got you so feel free to check our FAQ we are really happy
            to help you out.
          </p>
          <button>Contact us</button>
        </div>
      </div>
    </div>
  );
}

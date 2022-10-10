import Alfred from "./Alfred.png";
import Merlly from "./merlly.png";
import Kryckowik from "./Kryckowik.png";
import Slider from "../Slider/Slider";
import Accordion from "../Accordion/Accordion";
import Card from "../Card/Card";

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

  return (
    <div className="section-three">
      <h4 className="blue-txt">Testimonial</h4>
      <h1>What our clients say about us</h1>
      <p>
        Our clients do say we are the best and keep finding ways to improve
        their experiences
      </p>
      <Slider cards={cardsData}>
        {cardsData.map((data, i) => (
          <Card key={i} data={data} />
        ))}
      </Slider>

      <div className="more-info">
        <div className="more-info-accordions">
          <Accordion accordionData={accordionData} />
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

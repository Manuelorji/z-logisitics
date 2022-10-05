import AccordionDownBtn from "./accordion-down-arrow.png";
import AccordionUpBtn from "./accordion-up-arrow.png";
import { useState } from "react";

export default function Accordion({ accordionData }) {
  const [selected, setSelected] = useState(null);

  function toggle(i) {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  }
  return (
    <div>
      {accordionData.map((item, i) => {
        return (
          <div key={i} className="accordion">
            <div className="title">
              <h4>{item.title}</h4>
              <img
                src={selected === i ? AccordionUpBtn : AccordionDownBtn}
                alt={"accordion-btn"}
                className="accordion-btn"
                onClick={() => toggle(i)}
              />
            </div>
            <div className={selected === i ? "detail show" : "detail"}>
              <p>{item.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

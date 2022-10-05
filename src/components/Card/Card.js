import "../Slider/Slider.scss";
import "../Section-three/Section-three.scss";

const Card = ({ data, i }) => {
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
};

export default Card;

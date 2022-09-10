import "./section-two.scss";
import FastdeliveryImage from "./Mask group 1.svg";
import SafePackageImage from "./Mask group 2.svg";
import LiveTrackingImage from "./Mask group 3.svg";
import Map from "./map.png";
import ArrowBtn from "./bi_arrow-right-circle.png";

export default function SectionTwo() {
  return (
    <div className="section-two">
      <h1>
        Our services are <span className="blue-txt">Superlative</span>
      </h1>
      <div className="cards">
        <div className="card">
          <img src={FastdeliveryImage} alt={"fast-delivery"} />
          <div className="card-details">
            <span className="details-header">Fast delivery</span>
            <br />
            <span className="details-paragraph">
              Goods are delivered so fast to the <br /> customers destinations
              without <br /> hesitating.
            </span>
          </div>
        </div>
        <div className="card">
          <img src={SafePackageImage} alt={"safe package"} />
          <div className="card-details">
            <span className="details-header">Safe package</span>
            <br />
            <span className="details-paragraph">
              We want the goods to be safe <br /> and secured so we do our best.
            </span>
          </div>
        </div>
        <div className="card">
          <img src={LiveTrackingImage} alt={"live tracking"} />
          <div className="card-details">
            <span className="details-header">Live tracking</span>
            <br />
            <span className="details-paragraph">
              You don’t have to worry about <br /> your goods because you can{" "}
              <br />
              track your goods whereabouts
            </span>
          </div>
        </div>
      </div>
      <div className="map-component">
        <div className="map-component-overlay"></div>
        <img className="map" src={Map} alt={"map"} />
        <div className="map-component-info">
          <h4>Our story</h4>
          <h1>
            We are in all parts of <br />
            the <span className="blue-txt">world </span>{" "}
          </h1>
          <p>
            We have over 200 companies all over the world and we are still
            <br />
            growing and looking to add more in the coming years.
          </p>
          <br />
          <span className="learn-more">
            <span>
              Want to learn more? <span className="bold">Click here</span>
            </span>{" "}
            <img src={ArrowBtn} />
          </span>
        </div>
      </div>
    </div>
  );
}

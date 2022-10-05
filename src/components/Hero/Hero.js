import Nav from "../Nav/Nav";
import "./Hero.scss";
export default function Hero() {
  return (
    <div className="hero">
      <Nav />
      <div className="hero-components">
        <h4>
          WELCOME TO THE DIGITAL AGES{" "}
          <span className="blue-txt">NEXT GENERATION</span> LOGISTICS
          INFRASTRUCTURE
        </h4>
        <h1>
          Logistics delivery around the <span className="blue-txt">World</span>
        </h1>
        <p>
          Own the delivery experience, streamline processes, reduce costs, and
          improve the customer experience
        </p>
        <div className="hero-input-component">
          <input type={"text"} />
          <button>Track now</button>
        </div>
        <div className="hero-footer">
          <span className="num">3400+</span>
          <span className="txt">
            People <br /> trust us
          </span>
          <span className="stroke">|</span>
          <span className="num"> 35K+</span>
          <span className="txt">
            Was <br /> successful
          </span>
        </div>
      </div>
    </div>
  );
}

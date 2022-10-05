import "./Nav.scss";
import Logo from "./logo.svg";

export default function Nav() {
  return (
    <nav>
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="nav-components">
        <div className="nav-links">
          <div className="nav-link">Home</div>
          <div className="nav-link">Services</div>
          <div className="nav-link">Office</div>
          <div className="nav-link">Contact us</div>
        </div>
        <div className="user-details">
          <button className="sign-up">Sign Up</button>
          <button className="login">Log In</button>
        </div>
      </div>
    </nav>
  );
}

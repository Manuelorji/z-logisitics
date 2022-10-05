import Logo from "./logo.svg";
import LinkedIn from "./LinkedIn.png";
import Twitter from "./Twitter.png";
import Facebook from "./Facebook.png";

import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-components">
        <div className="footer-links">
          <div>
            <div className="logo">
              <img src={Logo} alt="logo" />
            </div>
            <p>
              We have over 200 companies all over the world and we are still
              growing and looking to add more in the coming years.
            </p>
          </div>
          <div>
            <div>Product</div>
            <div>Overview</div>
            <div>Features</div>
            <div>Solutions</div>
          </div>
          <div>
            <div>Company</div>
            <div>About us</div>
            <div>Careers</div>
            <div>News</div>
            <div>Contact</div>
          </div>
          <div>
            <div>Resources</div>
            <div>Blog</div>
            <div>Newsletter</div>
            <div>Events</div>
            <div>Help centre</div>
          </div>
          <div>
            <div>Social</div>
            <div>Twitter</div>
            <div>LinkedIn</div>
            <div>Facebook</div>
          </div>
          <div>
            <div>Legal</div>
            <div>Terms</div>
            <div>Privacy</div>
            <div>Cookies</div>
            <div>Licenses</div>
            <div>Settings</div>
          </div>
        </div>
        <div className="footer-copyright-n-socio-links">
          <div>© 2022 Zlogistics. All rights reserved.</div>
          <div className="socio-links">
            <img src={Twitter} alt={"Twitter"} />
            <img src={LinkedIn} alt={"LinkedIn"} />
            <img src={Facebook} alt={"Facebook"} />
          </div>
        </div>

        <div className="footer-overlay"></div>
      </div>
    </div>
  );
}

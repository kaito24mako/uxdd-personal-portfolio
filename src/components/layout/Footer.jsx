import portrait from "../../assets/portrait.png";
import github from "../../assets/github.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";

import { playClickSound } from "../assets/audio/click";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="image-social-wrapper">
        <img src={portrait} className="portrait" alt="Portrait of myself" />
        <div className="footer-wrapper">
          <div className="social-links">
            <a
              href="https://github.com/"
              target="_blank"
              onClick={playClickSound}
            >
              <img
                src={github}
                alt="Link to my GitHub"
                className="socials-logo"
              />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              onClick={playClickSound}
            >
              <img
                src={facebook}
                alt="Link to my Facebook"
                className="socials-logo"
              />
            </a>
            <a
              href="https://www.instagram.com/kaito24mako/"
              target="_blank"
              onClick={playClickSound}
            >
              <img
                src={instagram}
                alt="Link to my Instagram"
                className="socials-logo"
              />
            </a>
          </div>
          <p>© 2026 Kaito Watanabe</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

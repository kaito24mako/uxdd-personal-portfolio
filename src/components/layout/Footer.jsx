import portrait from "../../assets/socials/portrait.png";
import github from "../../assets/socials/github.png";
import facebook from "../../assets/socials/facebook.png";
import instagram from "../../assets/socials/instagram.png";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="image-social-wrapper">
        <img
          src={portrait}
          className="portrait"
          alt="Portrait of Kaito Watanabe"
        />
        <div className="footer-wrapper">
          <div className="social-links">
            <a href="https://github.com/kaito24mako" target="_blank">
              <img src={github} alt="Link to GitHub" className="socials-logo" />
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <img
                src={facebook}
                alt="Link to Facebook"
                className="socials-logo"
              />
            </a>
            <a href="https://www.instagram.com/kaito24mako/" target="_blank">
              <img
                src={instagram}
                alt="Link to Instagram"
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

import Tree from "../components/assets/Tree";

import { playClickSound } from "../components/assets/audio/click";

function ContactPage() {
  return (
    <>
      <h2 className="title">CONTACT</h2>
      <Tree />
      <div className="details-container">
        <p>Reach out to me!</p>
        <p>
          I would love to be given an opportunity to showcase my skills as a web
          developer.
        </p>
        <p>I am open to all opportunities and collaborations.</p>
        <div>
          <a
            className="email"
            href="mailto:kaitowatanabemcc@gmail.com"
            onClick={playClickSound}
          >
            kaitowatanabemcc@gmail.com
          </a>
        </div>
      </div>
    </>
  );
}

export default ContactPage;

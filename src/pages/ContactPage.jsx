import Tree from "../components/assets/Tree";

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
        <p className="email-wrapper">
          <a className="email" href="mailto:kaitowatanabemcc@gmail.com">
            kaitowatanabemcc@gmail.com
          </a>
        </p>
      </div>
    </>
  );
}

export default ContactPage;

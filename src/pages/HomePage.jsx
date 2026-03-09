import ProjectsPage from "./ProjectsPage";
import ContactPage from "./ContactPage";

function HomePage() {
  return (
    <>
      {/* id is for hash links */}
      <section className="home-container" id="home">
        <div className="titles">
          <h1>I'm Kaito</h1>
          <h2 className="expand-from-blur">With Passion in Web Development</h2>
        </div>
      </section>

      <section className="projects-container" id="projects">
        <ProjectsPage />
      </section>

      <section className="contact-container" id="contact">
        <ContactPage />
      </section>
    </>
  );
}

export default HomePage;

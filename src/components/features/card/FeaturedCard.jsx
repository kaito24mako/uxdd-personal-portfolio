import lastManStanding from "../../../assets/projects/project5.png";

function FeaturedCard() {
  const project = {
    name: "Last Man Standing",
    image: lastManStanding,
    description:
      "A rock-paper-scissors game in which the user versues the computer based on logic created in JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    codeUrl: "https://github.com/kaito24mako/Last-Man-Standing",
    liveUrl: "https://kaito24mako.github.io/Last-Man-Standing/",
  };

  return (
    <div className="featured-card-container">
      <img src={lastManStanding} alt={`Featured project: ${project.name}`} />

      <div className="featured-description-container">
        <h2>{project.name}</h2>
        <p className="description">{project.description}</p>

        <div className="tech-container">
          {project.tech.map((tech) => (
            <p className="tech">{tech}</p>
          ))}
        </div>

        <div className="buttons-container">
          <a className="button" href={project.codeUrl} target="_blank">
            View Code
          </a>
          <a className="button" href={project.liveUrl} target="_blank">
            View Site
          </a>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCard;

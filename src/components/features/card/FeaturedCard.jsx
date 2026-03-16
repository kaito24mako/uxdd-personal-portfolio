import searchEmAll from "../../../assets/projects/project7.png";

function FeaturedCard() {
  const project = {
    name: "Search 'em All!",
    image: searchEmAll,
    description:
      "A PokémonTCG search engine, in which users can search for any Pokémon card and add it to their collection for tracking purposes.",
    // "Fetching APIs with React",
    tech: ["HTML", "SCSS", "JavaScript", "React"],
    codeUrl: "https://github.com/kaito24mako/react-pokemon-app",
    liveUrl: "https://kaito24mako.github.io/react-pokemon-app/",
  };

  return (
    <div className="featured-card-container">
      <a href={project.liveUrl} target="_blank">
        <img src={searchEmAll} alt={`Featured project: ${project.name}`} />
      </a>

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

import ticTacToe from "../../../assets/projects/project1.png";
import bookCollection from "../../../assets/projects/project2.png";
import etchSketch from "../../../assets/projects/project3.png";
import dashboard from "../../../assets/projects/project4.png";
import lastManStanding from "../../../assets/projects/project5.png";

function ProjectsCard() {
  const projects = [
    {
      name: "Tic Tac Toe",
      image: ticTacToe,
      description:
        // "A two-player Tic Tac Toe game with dynamic scoring throughout rounds. Have a go against your colleagues!",
        "Complex JS logic for a two-player game",
      tech: ["HTML", "CSS", "JavaScript"],
      codeUrl: "https://github.com/kaito24mako/Tic-Tac-Toe",
      liveUrl: "https://kaito24mako.github.io/Tic-Tac-Toe/",
    },
    {
      name: "Book Collection",
      image: bookCollection,
      description:
        // "A library in which users can track what books they have read or wish to read. It utilises OOP and localStorage.",
        "OOP programming to create collections",
      tech: ["HTML", "CSS", "JavaScript"],
      codeUrl: "https://github.com/kaito24mako/Book-Library",
      liveUrl: "https://kaito24mako.github.io/Book-Library/",
    },
    {
      name: "Etch-a-Sketch",
      image: etchSketch,
      description:
        // "An Etch-a-Sketch application that allows users to draw on a dynamically sizeable grid with various colours.",
        "Dynamic sketching with JavaScript",
      tech: ["HTML", "CSS", "JavaScript"],
      codeUrl: "https://github.com/kaito24mako/Etch-A-Sketch",
      liveUrl: "https://kaito24mako.github.io/Etch-A-Sketch/",
    },
    {
      name: "Admin Dashboard",
      image: dashboard,
      description:
        // "A static admin dashboard that showcases responsive and UI friendly design, with some Pokemon-themed flavouring.",
        "Responsive and UX focused design",
      tech: ["HTML", "CSS"],
      codeUrl: "https://github.com/kaito24mako/Admin-Dashboard",
      liveUrl: "https://kaito24mako.github.io/Admin-Dashboard/",
    },
    {
      name: "Last Man Standing",
      image: lastManStanding,
      description:
        // "A rock-paper-scissors game in which the user versues the computer based on logic created in JavaScript.",
        "User competes against the computer",
      tech: ["HTML", "CSS", "JavaScript"],
      codeUrl: "https://github.com/kaito24mako/Last-Man-Standing",
      liveUrl: "https://kaito24mako.github.io/Last-Man-Standing/",
    },
  ];

  return (
    <div className="cards-container">
      {projects.map((project) => (
        <div className="card-container">
          <a href={project.liveUrl} target="_blank">
            <img src={project.image} alt={`Project: ${project.name}`} />
          </a>

          <div className="description-container">
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
      ))}
    </div>
  );
}

export default ProjectsCard;

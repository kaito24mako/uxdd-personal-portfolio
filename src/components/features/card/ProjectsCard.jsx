import etchSketch from "../../../assets/projects/project3.png";

import { useEffect, useState } from "react";

import axios from "axios";

function ProjectsCard() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      const res = await axios.get("http://localhost:3000/api/projects");
      const projects = res.data;

      const published = projects.filter((p) => p.status === "Published");
      setProjects(published);
    }

    fetchProjects();
  }, []);

  return (
    <div className="cards-container">
      {projects.map((p) => (
        <div className="card-container" key={p.id}>
          <a href={p.siteUrl} target="_blank">
            <img src={etchSketch} />
          </a>

          <div className="description-container">
            <h2>{p.title}</h2>

            <p className="description">{p.description}</p>

            {/* <div className="tech-container">
              {p.tech.map((tech) => (
                <p className="tech">{tech}</p>
              ))}
            </div> */}

            <div className="buttons-container">
              <a className="button" href={p.githubUrl} target="_blank">
                View Code
              </a>
              <a className="button" href={p.siteUrl} target="_blank">
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

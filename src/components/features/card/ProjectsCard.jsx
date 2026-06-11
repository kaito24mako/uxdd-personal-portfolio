import projectImage from "../../../assets/projects/portfolio-cms.png";
import axios from "axios";

import { useEffect, useState } from "react";

function ProjectsCard() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      // const res = await axios.get(
      //   "http://localhost:3000/api/users/kaito24mako/projects/published",
      // );
      const res = await axios.get(
        "https://portfolio-cms-blond-five.vercel.app/api/users/kaito24mako/projects/published",
      );
      const projects = res.data;

      setProjects(projects);
    }

    fetchProjects();
  }, []);

  return (
    <div className="cards-container">
      {projects.map((p) => (
        <div className="card-container" key={p.id}>
          <a href={p.siteUrl} target="_blank">
            <img src={projectImage} />
          </a>

          <div className="description-container">
            <h2>{p.title}</h2>

            <p className="description">{p.description}</p>

            <div className="tech-container">
              {p.tags?.map((tag, index) => (
                <p className="tech" key={index}>
                  {tag}
                </p>
              ))}
            </div>

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

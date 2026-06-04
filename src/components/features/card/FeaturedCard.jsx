import pokemon from "../../../assets/projects/project7.png";
import axios from "axios";

import { useEffect, useState } from "react";

function FeaturedCard() {
  const [project, setProject] = useState([]);

  useEffect(() => {
    async function fetchProject() {
      // const res = await axios.get(
      //   "http://localhost:3000/api/projects/published",
      // );
      const res = await axios.get(
        "https://portfolio-cms-blond-five.vercel.app/api/projects",
      );
      const projects = res.data;

      const featured = projects.find((p) => p.title === "Catch Em' All!");

      setProject(featured);
    }

    fetchProject();
  }, []);

  return (
    <div className="featured-card-container">
      <a href={project.siteUrl} target="_blank">
        <img src={pokemon} />
      </a>

      <div className="featured-description-container">
        <h2>{project.title}</h2>
        <p className="description">{project.description}</p>

        <div className="tech-container">
          {project.tags?.map((tag, index) => (
            <p className="tech" key={index}>
              {tag}
            </p>
          ))}
        </div>

        <div className="buttons-container">
          <a className="button" href={project.githubUrl} target="_blank">
            View Code
          </a>
          <a className="button" href={project.siteUrl} target="_blank">
            View Site
          </a>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCard;

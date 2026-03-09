import FeaturedCard from "../components/features/card/FeaturedCard";
import ProjectsCard from "../components/features/card/ProjectsCard";

function ProjectsPage() {
  return (
    <div className="projects-container">
      <div className="featured-container">
        <h2 className="title">FEATURED PROJECT</h2>
        <FeaturedCard />
      </div>
      <div className="other-projects-container">
        <h2 className="title">PROJECTS</h2>
        <div className="card-wrapper">
          <ProjectsCard />
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;

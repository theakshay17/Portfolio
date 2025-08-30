import ProjectCard from "../components/ProjectCard";
import ScrollToTopButton from "../components/ScrollToTopButton";
function Projects(){
    return(
        <div className="projectsContainer">
            <h1>Projects</h1>
            <div className="projects">
                <ProjectCard />
            </div>
            <ScrollToTopButton />
        </div>
    );
}

export default Projects;
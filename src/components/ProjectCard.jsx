function ProjectCard(){
    const projectsList = [
        {"id": 1, "image": "src/assets/Screenshot (59).png", "name" : "Blog Website", "gitLink": "https://github.com/theakshay17/React--BlogWebsite"},
    ]
    return(
        <div className="project">
            {projectsList.map(project =>
                <div className="projectDescription">
                <a href={project.gitLink} target="blank_"><img src={project.image} alt={project.name} /></a>
                <h2>{project.name}</h2>
            </div>
            )}
        </div>
    );
}

export default ProjectCard;
import { div } from "framer-motion/client";

function SkillsCard(){
    const skills = [
        {"id":1, "svgLink": <i class='bx bxl-python'></i>},
        {"id":2, "svgLink": <i class='bx bxl-java'></i>},
        {"id":3, "svgLink": <i class='bx bxl-html5' ></i>},
        {"id":4, "svgLink": <i class='bx bxl-css3' ></i>},
        {"id":5, "svgLink": <i class='bx bxl-javascript' ></i>},
        {"id":6, "svgLink": <i class='bx bxl-react' ></i>},
    ]
    return(
        <div>
            {skills.map(skill =>
                <p id={skills.id} className="skill">{skill.svgLink}</p>
            )}
        </div>
    );
}

export default SkillsCard;
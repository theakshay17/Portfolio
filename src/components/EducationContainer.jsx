function EducationContainer(){
    const educationList = [
        {"id":1, "year": "School Days", "InstituteName": "Sri Chaitanya Vidhya Vihar, Kolluru.", "Description": "I completed my schooling from Class 1 to Class 10 at Sri Chaitanya Vidya Vihar in Kolluru. Those formative years instilled in me the discipline, curiosity, and foundational thinking that continue to shape my academic path. It was during this time that I developed a love for technology and logical reasoning, setting the stage for everything that followed. My CGPA: 10"},
        {"id":2, "year": "2021 -- 2024", "InstituteName": "Sir CR Reddy Polytechnic College, Eluru.", "Description": "I earned my Diploma in Computer Science and Engineering from Sir C.R. Reddy Polytechnic College, where I laid the groundwork for my journey into tech. It was here that I discovered my passion for problem-solving and scalable systems. Those early experiences shaped my mindset—building not just code, but solutions that are efficient, adaptable, and future-ready. My Diploma Percentage: 91.92%"},
        {"id":3, "year": "2024 -- Present", "InstituteName": "Sir CR Reddy College Of Engineering, Eluru.", "Description": "I'm a passionate B.Tech student specializing in Artificial Intelligence and Machine Learning at Sir C.R. Reddy College of Engineering. My academic journey is driven by curiosity and creativity—constantly exploring how intelligent systems and elegant UI design can intersect to build impactful, user-friendly applications. My current CGPA/SGPA: 8.43/8.43 (Sem: 2-1),8.14/8.28 (Sem: 2-2)"},
    ] 
    return(
        <div className="edu">
            <h1>Education</h1>
            {educationList.map(education =>
                <div className="educationContainer" key={education.id}>
                    <div className="year">
                        <p>{education.year}</p>
                    </div>
                    <div className="educationDescription">
                        <p>{education.InstituteName}</p><br />
                        <p>{education.Description}</p>
                    </div>
            </div>
            )}
        </div>
    );
}

export default EducationContainer;
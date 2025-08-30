import EducationContainer from "../components/EducationContainer";
import ScrollToTopButton from "../components/ScrollToTopButton";
import SkillsCard from "../components/SkillsCard";

function Home() {
  return (
    <div>
      <div className="container">
        <div className="info">
          <p>Hello, I am</p>
          <h1 className="name">Akshay Krishna</h1>
          <p>Web Developer | AI/ML Enthusiast</p>
          <div className="links">
            <a href="https://www.linkedin.com/in/akshaykrishnagodavarthi" target="blank_"><i class='bx bxl-linkedin'></i></a>
            <a href="https://www.instagram.com/the.akshay_17/" target="blank_"><i class='bx bxl-instagram-alt' ></i></a>
            <a href="https://github.com/theakshay17" target="blank_"><i class='bx bxl-github'></i></a>
          </div>
        </div>
        <div className="image">
          <img src="src/assets/IMG_5217.jpg" alt="Akshay" />
        </div>
      </div>

      {/* about area */}
      <div className="about">
        <div className="heading">
          <h1>About Me</h1>
        </div>
        <div className="description">
          <p>Hello, I am Akshay Krishna currently pursuing my Bachelor's Degree in Sir CR Reddy College Of Engineering, Eluru</p><br />
          <p>I’m a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.</p><br /><br />
          <a href="src/assets/Akshay_krishna_resume-pdf.pdf" target="blank_" className="resumeBtn" data-aos="fade-in" data-aos-duration="4000">Dowload My Resume</a>
        </div>
      </div>
      {/* about area */}

      {/* skills area */}
      <div className="skillsContainer">
          <h1>Specialized In</h1>
          <div className="skills">
            <SkillsCard />
          </div>
      </div>
      {/* education area */}
      <EducationContainer />

      {/* scroll to top button */}
      <ScrollToTopButton />

      <footer className="footer">
          <p><i class='bx bx-copyright'></i></p>
          <p>2025 AKSHAY KRISHNA</p>
      </footer>
    </div>
  );
}

export default Home;

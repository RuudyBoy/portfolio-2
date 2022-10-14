import holidaze from "../../images/holidaze.png"
import semester from "../../images/sp.png"
import frameworks from "../../images/js-frameworks.png"
import meg from "../../images/meg-portfolio.png"


export default function Portfolio() {
    return (
        <>
        <div>
        <div className="standard-background"> 
        <h1>My work and projects</h1>                
        <div className="projects-grid">
        <div className="projects-container">
            <div className="project-card">
                <img className="project-image" src={holidaze} alt="sneek peak of project"/>
                <div className="project-info">
                <h4>Project exam</h4>
                <p>My project exam is a website called Holidaze. Holidaze is site for booking hotels in Bergen city.</p>
                </div>
            </div>
            <div className="project-card" >
                <img className="project-image" src={frameworks} alt="sneek peak of project"/>
            <div className="project-info">
                <h4>JS Frameworks</h4>
                <p>Js frameworks is a site showing a functional login form and displaying a list from a API call.</p>
            </div>
            </div>
            <div className="project-card">
                <img className="project-image" src={semester} alt="sneek peak of project"/>
            <div className="project-info">
                <h4>Semester project</h4>
                <p> This site is displaying a website where you can shop clothes. This was a project from Noroff.</p>
            </div>
            </div>
        </div>
        <div className="portfolio-image" >
        <img src={meg} alt="sneek peak of project" className="meg"/>
        </div>
        </div>
        </div>
    </div>
    </>
    );
  }
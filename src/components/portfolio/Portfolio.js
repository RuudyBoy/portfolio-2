import gamehub from "../../images/gamehub.png"
import volleyblog from "../../images/volleyblog.png"
import frameworks from "../../images/frameworks.png"


export default function Portfolio() {
    return (
        <>
        <div>
        <h1>My work and projects</h1>
        <h2>Check out some of my projects throughout my studies.</h2>
        <div className="projects-container">
            <div>
                <div>
                    <img src={gamehub} alt="sneek peak of project"/>
                </div>
                <div>
                    <a >Gamehub</a>
                </div>
            </div>
            <div >
            <div>
                <img src={volleyblog} alt="sneek peak of project"/>
            </div>
            <div>
                <a>Volleyball blog</a>
            </div>
            </div>
            <div >
            <div>
                <img src={frameworks} alt="sneek peak of project"/>
            </div>
            <div>
                <a>CSS Frameworks</a>
            </div>
            </div>
        </div>
    </div>
    </>
    );
  }
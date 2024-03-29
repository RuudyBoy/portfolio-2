import { Link } from "react-router-dom";
import meg from "../../images/meg-hjemme.png";
import logo from "../../images/logoHvitXL.png";

export default function Home() {
    return (
        <>
        <div className="standard-background">
        <div className="home-container">
        <div className="home-info">
            <img  src={logo} alt="sneek peak of project"/>
            <h1> My Portfolio</h1>
            <p> A student who are finished with my frontend development studies at Noroff. My focus is on writing clean and efficient code. I am a big fan of React, HTML5, CSS/SCSS and plain Javascript. </p>
            <a className="cta-button" href="/portfolio"> Portfolio</a> 
        </div>
        <div>
            <img className="meg-hjemme" src={meg} alt="sneek peak of project"/>
        </div> 
        </div>
        </div>
        </>
        )
    }
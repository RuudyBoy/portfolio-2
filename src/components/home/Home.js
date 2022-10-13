import meg from "../../images/meg-hjemme.png"

export default function Home() {
    return (
        <>
        <div className="standard-background">
        <h1>Home</h1>
        <img className="meg-hjemme" src={meg} alt="sneek peak of project"/>
        </div>
        </>
    )
  }
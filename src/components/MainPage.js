import {Link} from "react-router-dom"

export default function MainPage() {
    return (
        <div className="startpage-container">
            <h1 className="title">Motivizer</h1>
            <Link to="/motivate">Generate Motivation</Link>
        </div>
    )
}
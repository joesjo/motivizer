import {Link} from "react-router-dom"
import PosterGenerator from "./PosterGenerator"

export default function MotivatePage() {
    return (
        <div className="motivate-container">
            <Link to="/"><h1>Motivizer</h1></Link>
            <PosterGenerator />
        </div>
    )
}
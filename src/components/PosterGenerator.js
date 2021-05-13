import Poster from "./Poster"

export default function PosterGenerator() {
    return (
        <div className="poster-container" >
            <h2>Generator</h2>
            <Poster />
            <button>Generate New</button>
            <button>Unique-ify</button>
        </div>
    )
}
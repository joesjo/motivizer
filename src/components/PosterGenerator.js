import {useState} from "react"

import Poster from "./Poster"

export default function PosterGenerator() {
    const [quotes, setQuotes] = useState([])
    const [image, setImage] = useState('')

    const fetchQuotes = () => {
        
    }

    return (
        <div className="poster-container" >
            <h2>Generator</h2>
            <Poster />
            <button>Generate New</button>
            <button>Unique-ify</button>
        </div>
    )
}
import {Link} from "react-router-dom"
import {useState, useEffect} from "react"

import Poster from "./Poster"

export default function SavedPage() {
    const [currentPoster, setCurrentPoster] = useState({quote: {content: "", author: ""}, image: ""})
    const [posterCounter, setPosterCounter] = useState(0)
    const [numberOfPosters, setNumberOfPosters] = useState(0)

    useEffect(() => {
        const posterList = JSON.parse(localStorage.getItem("posters"))
        if (posterList !== null) {
            setNumberOfPosters(posterList.length)
            setCurrentPoster(posterList[posterCounter])
        }
    }, [posterCounter])

    const changePoster = (increment) => {
        switch (increment) {
            case "previous":
                if(posterCounter === 0) {
                    setPosterCounter(numberOfPosters - 1)
                    break;
                }
                setPosterCounter(prevCount => prevCount - 1)
                break;
            case "next":
                setPosterCounter(prevCount => (prevCount + 1) % numberOfPosters)
                break;
            default:
                break;
        }
    }

    return (
        <div className="motivate-container">
            <Link to="/"><h1>My Motivizer Posters</h1></Link>
            {numberOfPosters === 0 ? <h2>You have no posters :{"("}</h2> :
            <Poster 
                quoteContent={currentPoster.quote.content} 
                quoteAuthor={currentPoster.quote.author} 
                imageLink={currentPoster.image}
            />
            }
            <div className="button-container">
                <button onClick={() => changePoster("previous")}>Previous Poster</button>
                <h2>{posterCounter + 1} / {numberOfPosters}</h2>
                <button onClick={() => changePoster("next")}>Next Poster</button>
            </div>
        </div>
    )
}
import {useEffect, useState} from "react"
import axios from "axios"

import Poster from "./Poster"

export default function PosterGenerator() {
    const [quote, setQuote] = useState({content: '', author: ''})
    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(false)

    const getPosterInfo = () => {
        setQuote({})
        setImage('')

        setLoading(true)

        Promise.all([
            axios.get(
                'https://api.quotable.io/random', {
                    params: {
                        tags: "inspirational"
                    }
                }
            ),
            axios.get(
                'https://api.unsplash.com/photos/random', {
                    params: {
                        topics: "nature,film,stree-photography,travel",
                        orientation: "landscape",
                        client_id: process.env.REACT_APP_UNSPLASH_ACCESS_KEY
                    }
                }
            )
        ])
        .then(axios.spread((...responses) => {
            const quoteResponse = responses[0].data
            const imageResponse = responses[1].data

            setQuote({content: quoteResponse.content, author: quoteResponse.author})
            setImage(imageResponse.urls.regular)

            setLoading(false)
        }))
        .catch(err => {
            console.log(err)
        })

        setLoading(false)
    }

    useEffect(() => {
        getPosterInfo()
    }, [])

    return (
        <>
            {loading ? <p>Loading...</p> : null}
            <Poster quoteContent={quote.content} quoteAuthor={quote.author} imageLink={image}/>
            <div className="button-container">
                <button onClick={() => getPosterInfo()}>Generate New</button>
                {/*<button>Unique-ify</button> TODO: later implementation */}
            </div>
        </>
    )
}
export default function Poster(props) {
    return (
        <div className="poster-container" style={{
            backgroundImage: `url(${props.imageLink})`
        }}>
            <p className="quote-content">{props.quoteContent}</p>
            <p className="quote-author">- {props.quoteAuthor}</p>
        </div>
    )
}
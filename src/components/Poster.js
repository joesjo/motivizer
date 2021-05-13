export default function Poster(props) {
    return (
        <div className="poster-container">
            <img src={props.imageLink}></img>
            <p>{props.quoteContent}</p>
            <p>{props.quoteAuthor}</p>
        </div>
    )
}
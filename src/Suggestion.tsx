import './style/suggestion.scss'

export default function Suggestion(props:any){

    return(
        <div className="Suggestion">
            <p>{props.name}</p>
        </div>
    )
}
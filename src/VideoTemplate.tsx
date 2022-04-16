import './style/videoTemplate.scss'

export default function VideoTemplate(props:any){


    return(
        <article>
            <img src={props.miniature} alt="" className='miniature' />
            <div className="info">
                <img src={props.pp} alt="" className="pp" />
                <div className="txt">
                    <p className='titre'>{props.titre}</p>
                    <p className="stats">{props.auteur}</p>
                    <p className="stats">{props.stats}</p>
                </div>
            </div>
            
        </article>
    )
}
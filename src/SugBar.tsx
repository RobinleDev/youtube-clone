import './style/sugBar.scss'

import Suggestion from './Suggestion'

export default function SugBar(){

    return(
        <div className="SugBar">
            <Suggestion name = "Tous"/>
            <Suggestion name = "The Legend of Zelda: breath of the wild"/>
            <Suggestion name = "Jeux vidéo"/>
            <Suggestion name = "Elden Ring"/>
            <Suggestion name = "Speedrun"/>
            <Suggestion name = "Cyberpunk 2077"/>

        </div>
    )
}
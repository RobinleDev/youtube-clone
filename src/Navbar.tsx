import './style/navbar.scss';

import menu from './img/menu.svg';


export default function Navbar(){


    return(
        <nav>
            <img src={menu} alt="" />
            <div className="accueil">
                <span>Accueil</span>
            </div>
            <div className="explorer">
                <span>Explorer</span>
            </div>
            <div className="shorts">
                <span>Shorts</span>
            </div>
            <div className="abonnements">
                <span>Abonnement</span>
            </div>
            <div className="biblioteque">
                <span>Bibliotèque</span>
            </div>
        </nav>
    )
}
import './style/navbar.scss';

import menu from './img/menu.svg';
import home from './img/home.svg';
import compass from './img/compass.svg';
import shorts from './img/shorts.svg';
import sub from './img/sub.svg';
import video from './img/video-lib.svg';

export default function Navbar(){


    return(
        <nav>
            <img src={menu} alt="" />
            <div className="accueil">
                <img src={home} alt="" />
                <span>Accueil</span>
            </div>
            <div className="explorer">
                <img src={compass} alt="" />
                <span>Explorer</span>
            </div>
            <div className="shorts">
                <img src={shorts} alt="" />
                <span>Shorts</span>
            </div>
            <div className="abonnements">
                <img src={sub} alt="" />
                <span>Abonnement</span>
            </div>
            <div className="biblioteque">
                <img src={video} alt="" />
                <span>Bibliotèque</span>
            </div>
        </nav>
    )
}
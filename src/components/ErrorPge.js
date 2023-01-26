import { NavLink } from "react-router-dom";
import imag404 from "../assets/img/404.png"


export default function ErrorPge () {
    return (
        <div>
            <div className="errorContainer">
			<img className="errorImg" src={imag404}
             alt="404"/>
			<p className="errorText">Oups! La page que vous demandez n'existe pas.</p>
			<NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li className="errorBackLink">Retourner sur la page d'accueil</li>
        </NavLink>
		</div>
      
        </div>
    );
};


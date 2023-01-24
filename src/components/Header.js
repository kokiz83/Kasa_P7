
import logo from "../../src/assets/img/LOGO.svg"

import Navigation from "./Navigation"

export default function Header() {
    return (
        <header className='headerWrap'>

            <figure className='headerWrap__fig'>
                <img className='logo' src={logo} alt="logo" />
            </figure>
         <Navigation className = "nav-header"  />
        </header>
    );
};


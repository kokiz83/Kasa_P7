
import logo from "../../src/assets/img/LOGO.svg"

import Navigation from "./Navigation"

export default function Header() {
    return (
        <header className='headerWrap'>

            <figure className='headerWrap__fig'>
                <a href="/">
                <img className='logo' src={logo} alt="logo" /></a>
            </figure>
         <Navigation className = "nav-header"  />
        </header>
    );
};


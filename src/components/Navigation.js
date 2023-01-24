import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation () {
    return (
        <nav className='nav-header'>
          
               <Link to="/" className= "nav-header_home">
                Acueil
               </Link>
               <Link to="/about"className= "nav-header_about">

                A propos
               </Link>  
        </nav>
    );
};


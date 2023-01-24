import React from 'react';
import logo from "../assets/img/logoFooter.png"
export default function Footer  ()  {
    return (
        <div className='footer'>
            <img className='logoFooter' src={logo} alt=" logo" />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    );
};

 
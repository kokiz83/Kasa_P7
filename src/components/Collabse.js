import React from 'react';
import { useState } from 'react';
import vector from "../assets/img/Vector _open.png"

export default function Collabse({ title, content }) {
    const [display, setDisplay] = useState("none");
    const [isActive, setIsActive] = useState("");
    const [rotate, setRotate] = useState("180deg");
  
    function inputCollapse() {
      setIsActive(isActive === "" ? "active" : "");
      setRotate(rotate === "180deg" ? "0deg" : "180deg");
      setDisplay(display === "block" ? "none" : "block");
    }

    return (
        <div className='collapse_div'>
            <div type='button' className='collapse_div-btn' onClick={inputCollapse}>
                <h2>{title}</h2>
                <img className='vector' 
                src={vector} 
                style={{rotate:`${rotate}`}} 
                alt="open_close" />
            </div>
            <div className={`content ${isActive}`} 
            key={title}
             style={{display:`${display}`}}>

                {Array.isArray(content) ? (
          <ul className="collapse__list">
            {content.map((equipment, index) => (
              <li key={index} className="collapse__list-element">
               {equipment}
              </li>
            ))}
          </ul>
           ) : (
            <p className="collapse__text">{content}</p>
          )}
      
            </div>
        </div>
    );
};


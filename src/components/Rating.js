import React from 'react';
import starRemplis from "../assets/img/starRempli.png"
import starVides from "../assets/img/starVide.png"
export default function Rating({getRating}) {
    
    const starRs = Array(5).fill(<img  src={starRemplis} alt="star" />)
    const starVs = Array(5).fill(<img  src={starVides} alt="star" />)
    return (
        <div className='getRating'>
            {starRs.slice(5 - getRating).map((starR,index) => {
                return <span  key={index}> {starR}</span>
            })}
           
            {starVs.slice(getRating).map((starV,index)=> {
                return <span  key={index}> {starV} </span>
            })}
        </div>
    );
};


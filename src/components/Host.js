import React from 'react';

export default function Host({getHost}) {

   
    return (
        <div className='hostNamePicture'>
            <p className='hostNamePicture_Name'>{getHost.name}</p>
            <img className='hostNamePicture_Picture' src={getHost.picture} alt="host" />
        </div>
    );
};


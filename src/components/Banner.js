import React from "react";


export default function Banner({ image,title }) {
    return (
        <div className="Banner_container About">
            <img className="imageBanner" src={image} alt="imageBanner" />
            <div className="backroundBanner"></div>
            <h2 className="title">{title}</h2>

        </div>
    );
}
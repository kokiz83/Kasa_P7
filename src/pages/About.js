import React from 'react';
import Banner from '../components/Banner';
import Collabse from '../components/Collabse';
import imageAbout from "../assets/img/imageBannerAbout.png"
import aboutData from "../dataAPI/aboutData.json"
export default function About() {
  const [{ Fiabilité }, { Respect }, { Sérvice }, { Sécurité }] = aboutData
  console.log({ Fiabilité })
  return (
    <section>
      <div>
        <Banner image={imageAbout} />
      </div>
      <div className='collapseAbout'>
        
        <Collabse title={Fiabilité.title} content={Fiabilité.content} />
        <Collabse title={Respect.title} content={Respect.content} />
        <Collabse title={Sérvice.title} content={Sérvice.content} />
        <Collabse title={Sécurité.title} content={Sécurité.content} />
      </div>
    </section>
  );
};


import React from 'react';
import Banner from '../components/Banner';
import Collabse from '../components/Collabse';
import imageAbout from "../assets/img/imageBannerAbout.png"
import aboutData from "../dataAPI/aboutData.json"
import Footer from "../components/Footer"
export default function About() {
  const [{ Fiabilité }, { Respect }, { Sérvice }, { Sécurité }] = aboutData

  return (
    <>
    <main>
    <section>
      <div className='imagAbout'>
        <Banner image={imageAbout} />
      </div>
      <div className='collapseAbout'>
        
        <Collabse title={Fiabilité.title} content={Fiabilité.content} />
        <Collabse title={Respect.title} content={Respect.content} />
        <Collabse title={Sérvice.title} content={Sérvice.content} />
        <Collabse title={Sécurité.title} content={Sécurité.content} />
      </div>
    </section>
     </main>
    <Footer/></>
  );
};


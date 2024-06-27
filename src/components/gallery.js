// src/Gallery.js
import React from 'react';
import './gallery.css';

import skilled from "../images/skilled.png";
import omnifood from "../images/omnifood.png";
import natours from "../images/natours.png";
import mathsforkids from "../images/mathsforkids.png";
import trillo from "../images/trillo.png";
import guessmynumber from "../images/guessmynumber.png";

const images = [
   skilled, omnifood, natours, mathsforkids, trillo, guessmynumber
];

const Gallery = () => {
    return (
        <div className="grid-gallery">
            <div className='grid-item'><img src={skilled} alt="skilled" /></div>
            <div className='grid-item'><img src={omnifood} alt="omnifood" /></div>
            <div className='grid-item'><img src={natours} alt="natours" /></div>
            <div className='grid-item'><img src={mathsforkids} alt="mathsforkids" /></div>
            <div className='grid-item'><img src={trillo} alt="trillo" /></div>
            <div className='grid-item'><img src={guessmynumber} alt="guessmynumber" /></div>
        </div>
    );
}

console.log(images.map);


export default Gallery;

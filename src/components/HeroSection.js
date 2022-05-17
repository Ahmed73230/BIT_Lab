import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/ezgif.com-gif-maker.mp4' autoPlay loop muted />
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');
      </style> 
      <h1 class = "title">BRAIN IMAGE TEAM</h1>
      <p class = "line-1">Magnetic Resonance Imaging</p>
      <p class = "line-2">Big Data and Machine Learning</p>
      <p class = "line-3">Artificial Intelligence</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;

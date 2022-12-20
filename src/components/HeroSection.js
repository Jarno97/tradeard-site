import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1>TradeArd</h1>
      <p>Buy your exclusive products from a legitimate company</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          buttonID='contact-btns'
        >
          GET IN CONTACT
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          READ REVIEWS
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
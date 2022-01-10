import React from 'react'
import '../App.scss'
import { Button } from './Button';
import './HeroSection.scss';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-2.mp4" autoPlay loop muted />
            <h1>Online Reisbureau</h1>
            <p>Boek nu je droomvakantie!</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline'
                    buttonSize='btn--large'>
                    Bekijk bestemmingen
                </Button>
                <Button className='btns' buttonStyle='btn--primary'
                    buttonSize='btn--large'>
                    Bekijk onze video <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection;
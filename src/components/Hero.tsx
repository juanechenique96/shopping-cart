// Core
import React, { FC } from 'react'
// Styles
import { HeroSection } from '../styles/HeroSection'
// Media
import imageShop from '../media/store.jpg'


export const Hero: FC = () => {
    return (
        <HeroSection>
            <img src={imageShop} alt="inbetween days shop" />
            <div className="hero-title">
                <h1>Inbetween Days</h1>
                <h1>Sale 40%</h1>
            </div>
        </HeroSection>
    )
}
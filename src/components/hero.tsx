import React from 'react'
import "../styles/hero.css"
import Image from 'next/image'

const Hero = () => {
  return (
    <div id='hero' className='hero-container'>
      <div id="hero-image">
        <Image className='picture' src='/tooba.jpg' alt='profile' width={300} height={400}></Image>
      </div>
      <div className="hero-content">
        <div className="hidden lg:block"></div>
        <div className="hero-text">
          <div className="hero-main">
            <p data-aos="fade-up-left">I am</p>
            <p data-aos="fade-up-left">Tooba</p>
            <p data-aos="fade-up-left">Saleem</p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Hero
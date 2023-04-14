import React from 'react'
import "../../style/Hero.css"

import heroDarkImg from '../../images/hero-img.png'
import lightImg from "../../images/light-hero-bg.jpg"

const Hero = ({theme}) => {
  return (
    <section className='hero__section'>
        <div className='container'>
            <div className='hero__wrapper'>
                <div className='hero__content'>
                    <div className='left1'>
                        <h2>We're Creating Perfect DSA</h2>
                        <h2>Course for fresher Students</h2>
                        <h2 className='highlight'>Placemaent Rodemap 100 %</h2>
                    </div> <br/>
                    <p className='discription'>Making learning easier and more convenient for you. Data Structure. Data structures are the problem - solving pillars of coding.</p>
                    
                    <div className='hero__btns'>
                        <button className='primary__btn'>Get Started Now</button>
                        <button className='secondary__btn'>Discover More</button>
                    </div>
                </div>

                <div className='hero__img'>
                    <img src={theme==='light-theme' ? lightImg : heroDarkImg} alt="hero-img" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero

import React from 'react'
import '../../style/about.css'

import aboutImg from "../../images/about-us.jpg"

const chooseData = [
  {
    icon: 'ri-wifi-line',
    title: 'First working process',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate tenetur exercitationem earum? Cum omnis, libero molestias tempore totam officiis eaque?'
  },
  {
    icon: 'ri-team-line',
    title: 'Discovered team',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate tenetur exercitationem earum? Cum omnis, libero molestias tempore totam officiis eaque?'
  },
  {
    icon: 'ri-time-line',
    title: '24/7 times access',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate tenetur exercitationem earum? Cum omnis, libero molestias tempore totam officiis eaque?'
  },  
]

const About = () => {
  return (
    <section id='about'>
        <div className='container'>
            <div className='about__wrapper'>
                <div className='about__content'>
                <h6 className='subtitle'>Why choose us</h6>
                <h2>Speciliest in aviding client on</h2>
                <h2 className='highlight'>financial challenges</h2>
                {/* <p className='discription about__content-desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo consequatur amet quibusdam placeat.</p> */}

                <div>
                  {
                    chooseData.map((item, index) => (
                      <div className="choose__us-item" key={index}>
                      <span className='choose__us-icon'><i class={item.icon}></i></span>
                      <div>
                        <h4 className="choose__us-title">{item.title}</h4>
                        <p className="discription">{item.desc}</p>
                      </div>
                      </div>
                    ))
                  }
                </div>
                </div>
                <div className='about__img'>
                  <img src={aboutImg} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default About

import React from 'react'
import "../../style/services.css"

const serviceData = [
    {
        icon: 'ri-apps-line',
        title: 'DSA Course',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi architecto nisi veniam, maiores atque.',
        link: "https://growupcode.com/array-basic-questions"
    },
    {
        icon: 'ri-code-s-slash-line',
        title: 'Web Deelopment',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi architecto nisi veniam, maiores atque.',
        link: "https://growupcode.com/web-development"
    },
    {
        icon: 'ri-store-3-line',
        title: 'Job Search',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi architecto nisi veniam, maiores atque.',
        link: "https://growupcode.com/job-home"
    },
    {
        icon: 'ri-bar-chart-2-line',
        title: 'Video Tutorials',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi architecto nisi veniam, maiores atque.',
        link: "https://growupcode.com/soon"
    },
]

const Services = () => {
  return (
    <section className='service' id='service'>
        <div className='container'>
            <div className='service__top-content'>
                <h6 className='subtitle'> Our Services</h6>
                <h2>Save time manage your coding skills with</h2>
                <h2 className='highlight'>Our best services</h2>
            </div>

            <div className='service__item-wrapper'>
                {
                    serviceData.map((item, index) => (
                        <div className='service__item' key={index}>
                        <a href={item.link} target='blank'>
                        <span className='service__icon'><i class={item.icon}></i></span>
                        <h3 className='service__title'>{item.title}</h3>
                        <p className='discription'>{item.desc}</p>
                        </a>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Services

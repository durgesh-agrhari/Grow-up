import React from 'react'
// import "../../style/services.css"
import "../style/services.css"

const serviceData = [
    {
        icon: 'ri-apps-line',
        title: 'Full time job',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi architecto nisi veniam, maiores atque.'
    },
    {
        icon: 'ri-code-s-slash-line',
        title: 'Part time job',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi architecto nisi veniam, maiores atque.'
    },
    {
        icon: 'ri-store-3-line',
        title: 'Remote job',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi architecto nisi veniam, maiores atque.'
    },
    {
        icon: 'ri-bar-chart-2-line',
        title: 'Internship',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi architecto nisi veniam, maiores atque.'
    },
]

const JobHome = () => {
  return (
    <section className='service' id='service'>
        <div className='container'>
            <div className='service__top-content'>
                <h6 className='subtitle'> Jobs IT/CSE/CEO/CSIT/EC </h6>
                <h2>Save time manage your coding skills with Growup Code</h2>
                <h2 className='highlight'> Comming Soon </h2>
            </div>

            <div className='service__item-wrapper'>
                {
                    serviceData.map((item, index) => (
                        <div className='service__item' key={index}>
                        <span className='service__icon'><i class={item.icon}></i></span>
                        <h3 className='service__title'>{item.title}</h3>
                        <p className='discription'>{item.desc}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default JobHome

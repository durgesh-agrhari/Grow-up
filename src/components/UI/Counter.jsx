import React from 'react'
import "../../style/counter.css"

const counterData=[
    {
        number: '2.5k+',
        text: 'Linkedin'
    },
    {
        number: '1.8K+',
        text: 'Instagram'
    },
    {
        number: '16K+',
        text: 'YouTube'
    },
    {
        number: '500+',
        text: 'Happy'
    },
]

const Counter = () => {
  return (
    <section className='counter' id='projects'>
        <div className='container'>
            <div className='counter__wrapper'>
                {
                    counterData.map((item, index) => (
                        <div className='counter__item' key={index}>
                        <h3 className='counter__number'>{item.number}</h3>
                        <h3 className='container__title'>{item.text}</h3>
                        </div>
                    )) 
                }
            </div>
        </div>
    </section>
  )
}

export default Counter

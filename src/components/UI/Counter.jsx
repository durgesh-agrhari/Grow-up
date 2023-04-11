import React from 'react'
import "../../style/counter.css"

const counterData=[
    {
        number: '5k+',
        text: 'Students'
    },
    {
        number: '40+',
        text: 'Happy '
    },
    {
        number: '80+',
        text: 'Courser'
    },
    {
        number: '30+',
        text: 'Projects'
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

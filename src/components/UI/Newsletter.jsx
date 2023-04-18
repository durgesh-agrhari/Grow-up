import React from 'react'
import "../../style/newsletter.css"
const Newsletter = () => {
  return (
    <section className='newsletter'>
        <div className="container">
            <div className="newsletter__wrapper">
                <div className="newsletter__content">
                    <h6 className="subtitle">Let's Work</h6>
                    <h2>Explore the <span className='highlight'>hidden </span>ideas and subscribe!</h2>
                </div>
                
                {/* news latter subscrine email */}
                <div className="newsletter__form">
                    {/* <form name='submit-to-google-sheet'> */}
                        <input type='email' name='Email' placeholder='Email' required />
                        <button className='secondary__btn subscribe_btn'>Subscribe Now </button>
                    {/* </form> */}
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default Newsletter

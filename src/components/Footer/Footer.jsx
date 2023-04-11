import React from 'react'
import './footer.css'

const quickLinks01 = [
    {
        path:"#",
        display:"Marketing"
    },
    {
        path:"#",
        display:"Analites"
    },
    {
        path:"#",
        display:"Tester"
    },
]

const quickLinks02 = [
    {
        path:"#",
        display:"Array"
    },
    {
        path:"#",
        display:"String"
    },
    {
        path:"#",
        display:"Stack"
    },
]

const quickLinks03 = [
    {
        path:"#",
        display:"Java"
    },
    {
        path:"#",
        display:"Analites"
    },
    {
        path:"#",
        display:"Tester"
    },
]
const Footer = () => {

    const Year = new Date().getFullYear()

  return (
    <footer className='footer'>
        <div className="container">
            <div className="footer__wrapper">
                <div className="footer__logo">
                    <h2>Digency</h2>
                    <p className="discription">Grow with us </p>

                    <p className='small__text discription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sint, eligendi repellendus iure incidunt excepturi explicabo aliquid soluta delectus veniam.</p>
                </div>

                <div className="footer__quick-link">
                    <div className="quick__link-title">Solutions</div>
                    <ul className="quick__links">
                        {
                            quickLinks01.map((item, index) => (
                                <li className="quick__link-item" key={index}><a href={item.path}> {item.display}</a></li>
                            ))
                        }
                    </ul>
                </div>
                <div className="footer__quick-link">
                    <div className="quick__link-title">Courses</div>
                    <ul className="quick__links">
                        {
                            quickLinks02.map((item, index) => (
                                <li className="quick__link-item" key={index}><a href={item.path}> {item.display}</a></li>
                            ))
                        }
                    </ul>
                </div>
                <div className="footer__quick-link">
                    <div className="quick__link-title">Tutorials</div>
                    <ul className="quick__links">
                        {
                            quickLinks03.map((item, index) => (
                                <li className="quick__link-item" key={index}><a href={item.path}> {item.display}</a></li>
                            ))
                        }
                    </ul>
                </div>

            </div>
            <p className='copyright'>Copyright {Year} , developed by Durgesh Agrhari. All rights reserved</p>
        </div>
    </footer>
  )
}

export default Footer

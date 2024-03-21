import React from 'react'
import './subnav.css'
import { NavLink } from 'react-router-dom'

const activeLink = ({isActive}) => (isActive ? "activesub" : "");

const Subnav = () => {
  return (
    <div className='subnav123'>
        <nav >
            <ul className='home-links'>
                {/* <li className='tx'>
                    <NavLink to='/web-development' className={activeLink} >Web-Development</NavLink>
                </li> */}
                <li className='tx'>
                    <NavLink to='/html-basic' className={activeLink}>HTML </NavLink>
                </li>
                <li className='tx'>
                    <NavLink to='/css-basic' className={activeLink}>CSS </NavLink>
                </li>
                <li className='tx'>
                    <NavLink to='/javascript' className={activeLink}>JavaScript </NavLink>
                </li>
                <li className='tx'>
                    <NavLink to='/Bootstrap-Basic-Concept' className={activeLink}>Bootstrap </NavLink>
                </li>
                <li className='tx'>
                    <NavLink to='' className={activeLink}>ReactJs </NavLink>
                </li>
                <li className='tx'>
                    <NavLink to='' className={activeLink}>NodeJs </NavLink>
                </li>
                <li className='tx'>
                    <NavLink to='' className={activeLink}>Express </NavLink>
                </li>
                <li className='tx'>
                    <NavLink to='' className={activeLink}>MongoDB </NavLink>
                </li>
                <li className='tx'>
                    <NavLink to='' className={activeLink}>Redux </NavLink>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Subnav

import React from 'react'
import './subnav.css'
import { NavLink } from 'react-router-dom'

const activeLink = ({isActive}) => (isActive ? "activesub" : "");

const Subnav = () => {
  return (
    <div className='subnav123'>
        <nav >
            <ul className='home-links'>
                <li className='tx'>
                    <NavLink to='' className={activeLink} > Day-1 </NavLink>
                </li>

                <li className='tx'>
                    <NavLink to='' className={activeLink}> Day-2 </NavLink>
                </li>

                <li className='tx'>
                    <NavLink to='' className={activeLink}> Day-3 </NavLink>
                </li>

                <li className='tx'>
                    <NavLink to='' className={activeLink} > Day-4 </NavLink>
                </li>

                <li className='tx'>
                    <NavLink to='' className={activeLink}> Day-5 </NavLink>
                </li>

                <li className='tx'>
                    <NavLink to='/day6' className={activeLink}> Day-6 </NavLink>
                </li>

                <li className='tx'>
                    <NavLink to='' className={activeLink} > Day-7 </NavLink>
                </li>

                <li className='tx'>
                    <NavLink to='' className={activeLink}> Day-8 </NavLink>
                </li>

                <li className='tx'>
                    <NavLink to='' className={activeLink}> Day-9 </NavLink>
                </li>

            </ul>
        </nav>
    </div>
  )
}

export default Subnav

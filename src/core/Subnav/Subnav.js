import React from 'react'
import './subnav.css'
import { NavLink } from 'react-router-dom'

const activeLink = ({isActive}) => (isActive ? "activesub" : "");

const Subnav = () => {
  return (
    <div className='subnav12'>
        <nav >
            <ul className='home-links'>
                <li className='tx'>
                    <NavLink to='/oops' className={activeLink} >Oops</NavLink>
                </li>
                <li className='tx'>
                    <NavLink to='' className={activeLink}>Compjuter Network </NavLink>
                </li>
                <li className='tx'>
                    <NavLink to='' className={activeLink}>Operating system </NavLink>
                </li>
                <li className='tx'>
                    <NavLink to='' className={activeLink}>DBMS </NavLink>
                </li>
                <li className='tx'>
                    <NavLink to='' className={activeLink}>MySquli </NavLink>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Subnav

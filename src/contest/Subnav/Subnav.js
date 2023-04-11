import React from 'react'
import './subnav.css'
import { NavLink } from 'react-router-dom'

const activeLink = ({isActive}) => (isActive ? "activesub" : "");

const Subnav = () => {
  return (
    <div className='subnav'>
        <nav >
            <ul className='home-links'>
                <li className='tx'>
                    <NavLink to='/codechef' className={activeLink} > Codechef Solutions </NavLink>
                </li>

                <li className='tx'>
                    <NavLink to='/codeforces' className={activeLink}>Codeforses Solutions </NavLink>
                </li>

                <li className='tx'>
                    <NavLink to='/leedcode' className={activeLink}>Leedcode Solutions </NavLink>
                </li>

            </ul>
        </nav>
    </div>
  )
}

export default Subnav

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
                    <NavLink to='/codechef-contest-solution' className={activeLink} > Codechef Solutions </NavLink>
                </li>

                <li className='tx'>
                    <NavLink to='/codeforces-contest-solution' className={activeLink}>Codeforses Solutions </NavLink>
                </li>

                <li className='tx'>
                    <NavLink to='/leedcode-contest-solution' className={activeLink}>Leedcode Solutions </NavLink>
                </li>

            </ul>
        </nav>
    </div>
  )
}

export default Subnav

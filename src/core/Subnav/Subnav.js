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
                    <NavLink to='/oops' className={activeLink} >Oops</NavLink>
                </li>
                <li className='tx'>
                    <NavLink to='/Basic-Computer-Network' className={activeLink}>Computer Network </NavLink>
                </li>
                <li className='tx'>
                    <NavLink to='/Operating-System-Basic-questions' className={activeLink}>Operating system </NavLink>
                </li>
                <li className='tx'>
                    <NavLink to='/DBMS-Basic-questions' className={activeLink}>DBMS </NavLink>
                </li>
                <li className='tx'>
                    <NavLink to='/Mysql-Basic-questions' className={activeLink}>MySqul </NavLink>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Subnav

import React from 'react'
import './subnav.css'
import { NavLink } from 'react-router-dom'

const activeLink = ({isActive}) => (isActive ? "activesub" : "");

const Subnav = () => {
  return (
    <div className='subnav12'>
        <nav className='nava' >
            <ul className='home-links'>
                <li className='tx'>
                    <NavLink to='/array-basic-questions' className={activeLink} >Array [21]</NavLink>
                </li>
                <li className='tx'>
                    <NavLink to='/string-basic-questions' className={activeLink}>String [11] </NavLink>
                </li>
                <li className='tx'>
                    <NavLink to='/' className={activeLink}>Sorting </NavLink>
                </li>
                <li className='tx'>
                    <NavLink to='/' className={activeLink}>Pattern </NavLink>
                </li>
                <li className='tx'>
                    <NavLink to='/' className={activeLink}>Searching </NavLink>
                </li>
                <li className='tx'>
                    <NavLink to='/' className={activeLink}>Matrix </NavLink>
                </li>
                <li className='tx'>
                    <NavLink to='/' className={activeLink}>Stack </NavLink>
                </li>
                <li className='tx'>
                    <NavLink to='/' className={activeLink}>Queue </NavLink>
                </li>
                <li className='tx'>
                    <NavLink to='/' className={activeLink}>Linkedlist </NavLink>
                </li>
                <li className='tx'>
                    <NavLink to='/' className={activeLink}>Recursin </NavLink>
                </li>
                <li className='tx'>
                    <NavLink to='/' className={activeLink}>Hashing </NavLink>
                </li>
                <li className='tx'>
                    <NavLink to='/' className={activeLink}>Heap </NavLink>
                </li>
                <li className='tx'>
                    <NavLink to='/' className={activeLink}>Tree </NavLink>
                </li>
                <li className='tx'>
                    <NavLink to='/' className={activeLink}>Graph </NavLink>
                </li>
                <li className='tx'>
                    <NavLink to='/' className={activeLink}>DP </NavLink>
                </li>
                <li className='tx'>
                    <NavLink to='/' className={activeLink}>Greedy </NavLink>
                </li>
                <li className='tx'>
                    <NavLink to='/' className={activeLink}>Trie </NavLink>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Subnav

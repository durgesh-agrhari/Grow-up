import React from 'react'
import './subnav.css'
import { NavLink } from 'react-router-dom'

const activeLink = ({isActive}) => (isActive ? "activesub" : "");

const Subnav = () => {
  return (
    <div className='subnav1'>
        <nav className='nava' >
            <ul className='home-links'>
                <li className='tx'>
                    <NavLink to='/array-basic-questions' className={activeLink} >Array</NavLink>
                </li>
                <li className='tx'>
                    <NavLink to='/string-basic-questions' className={activeLink}>String</NavLink>
                </li>
                <li className='tx'>
                    <NavLink to='/sorting-basic-questions' className={activeLink}>Sorting </NavLink>
                </li>
                <li className='tx'>
                    <NavLink to='/pattern-basic-questions' className={activeLink}>Pattern </NavLink>
                </li>
                <li className='tx'>
                    <NavLink to='/searching-basic-questions' className={activeLink}>Searching</NavLink>
                </li>
                <li className='tx'>
                    <NavLink to='/matrix-basic-questions' className={activeLink}>Matrix </NavLink>
                </li>
                <li className='tx'>
                    <NavLink to='/stack-basic-questions' className={activeLink}>Stack </NavLink>
                </li>
                <li className='tx'>
                    <NavLink to='/queue-basic-questions' className={activeLink}>Queue </NavLink>
                </li>
                <li className='tx'>
                    <NavLink to='/linkedlist-basic-questions' className={activeLink}>Linkedlist </NavLink>
                </li>
                <li className='tx'>
                    <NavLink to='/recursion-basic-questions' className={activeLink}>Recursin</NavLink>
                </li>
                <li className='tx'>
                    <NavLink to='/hashing-basic-questions' className={activeLink}>Hashing</NavLink>
                </li>
                <li className='tx'>
                    <NavLink to='/heap-basic-questions' className={activeLink}>Heap</NavLink>
                </li>
                <li className='tx'>
                    <NavLink to='/tree-basic-questions' className={activeLink}>Tree</NavLink>
                </li>
                <li className='tx'>
                    <NavLink to='/graph-basic-questions' className={activeLink}>Graph</NavLink>
                </li>
                <li className='tx'>
                    <NavLink to='/dp-basic-questions' className={activeLink}>DP </NavLink>
                </li>
                <li className='tx'>
                    <NavLink to='/greedy-basic-questions' className={activeLink}>Greedy </NavLink>
                </li>
                {/* <li className='tx'>
                    <NavLink to='/' className={activeLink}>Trie </NavLink>
                </li> */}
            </ul>
        </nav>
    </div>
  )
}

export default Subnav

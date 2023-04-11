import React from 'react'
import './DataStructure.css'
import { NavLink } from 'react-router-dom'

const activeLink = ({isActive}) => (isActive ? "active" : "");

const Subnav = () => {
  return (
    <div className='subnav'>
    <nav >
        <ul className='home-links'>
            <li className='tx'>
                <NavLink to='' className={activeLink} >Array  </NavLink>
            </li>
            <li>
                <NavLink to='' className={activeLink}>String </NavLink>
            </li>
            <li>
                <NavLink to='' className={activeLink}>Sorting </NavLink>
            </li>
            <li>
                <NavLink to='' className={activeLink}>BinarySearch </NavLink>
            </li>
            <li>
                <NavLink to='' className={activeLink}>Recursin </NavLink>
            </li>
            <li>
                <NavLink to='' className={activeLink}>Stacks </NavLink>
            </li>
            <li>
                <NavLink to='' className={activeLink}>Queues </NavLink>
            </li>
            <li>
                <NavLink to='' className={activeLink}>Linkedlist </NavLink>
            </li>
            <li>
                <NavLink to='' className={activeLink}>Tree </NavLink>
            </li>
            <li>
                <NavLink to='' className={activeLink}>Graph </NavLink>
            </li>
            <li>
                <NavLink to='' className={activeLink}>DP </NavLink>
            </li>
            <li>
                <NavLink to='' className={activeLink}>Trie </NavLink>
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default Subnav

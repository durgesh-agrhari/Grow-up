import React from 'react'
import { NavLink } from 'react-router-dom'
// import React, { useEffect, useRef } from 'react'
import './LeftSidebar.css'
// import './Style.css'
// import '../../../components/Header/Style.css'
//import {Link } from 'react-router-dom'

//import "../../../components/header/Header.scss"
//const activeLink = ({isActive}) => (isActive ? "active" : "");

const Leftsidebar = () => {

  return (
    <div className='left-sidebsr' >
        <nav className='side-nav' >
            
            <NavLink to='/string-basic-questions' className='side-nav-links' activeClassName='active'>
                <p className='active1'>0: Basic String</p>
            </NavLink>

            <NavLink to='/reverse-element-string' className='side-nav-links' activeClassName='active'>
                <p className='active1' >1: Reverse element in String</p>
            </NavLink> 

            <NavLink to='/length-of-string' className='side-nav-links' activeClassName='active'>
                <p className='active1'>2: Length of string </p>
            </NavLink>           

            <NavLink to='/count-Word-in-string' className='side-nav-links' activeClassName='active'>
                <p className='active1'>3: Count the word in string</p>
            </NavLink>

            <NavLink to='/check-palendrome-string' className='side-nav-links' activeClassName='active'>
                <p className='active1'>4: Check String is palendrome</p>
            </NavLink>

            <NavLink to='/remove-vowel-string' className='side-nav-links' activeClassName='active'>
                <p className='active1'>5:  Remove vowel in string</p>
            </NavLink>

            <NavLink to='/remove-space-string' className='side-nav-links' activeClassName='active'>
                <p className='active1'>6: Remove space in string</p>
            </NavLink>

            <NavLink to='/remove-dublicates-string' className='side-nav-links' activeClassName='active'>
                <p className='active1'>7: Remove dublicates element in string</p>
            </NavLink>

            <NavLink to='/count-frequency-string' className='side-nav-links' activeClassName='active'>
                <p className='active1'>8: Connt frequency of string</p>
            </NavLink>

            <NavLink to='/find-Substring-string' className='side-nav-links' activeClassName='active'>
                <p className='active1'>9: Substring in string</p>
            </NavLink>
            
            <NavLink to='/capitalized-first-character-of-each-word-in-strng' className='side-nav-links' activeClassName='active'>
                <p className='active1'>10: Capitalize the first element of each word</p>
            </NavLink>

            <NavLink to='/delete-element-in-strng' className='side-nav-links' activeClassName='active'>
                <p className='active1'>11: Delete element in String</p>
            </NavLink>
        </nav>

        
        {/* <span className="mobile__menu" onClick={toggleMenu}>
            <i class="ri-menu-line"></i>
        </span> */}
    </div>
  )
}

export default Leftsidebar
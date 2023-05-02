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
            
            <NavLink to='/pattern-basic-questions' className='side-nav-links' activeClassName='active'>
                <p className='active1'>0: Basic Pattern</p>
            </NavLink>

            <NavLink to='/rectangle-pattern-in-c++' className='side-nav-links' activeClassName='active'>
                <p className='active1' >1: Rectangle Pattern </p>
            </NavLink> 

            <NavLink to='/pyramid-pattern-in-c++' className='side-nav-links' activeClassName='active'>
                <p className='active1'>2: Pyramid Pattern Star </p>
            </NavLink>           

            <NavLink to='/pyramid-pattern-in-c++-using-number' className='side-nav-links' activeClassName='active'>
                <p className='active1'>3: Pyramid Pattern Number</p>
            </NavLink>

            <NavLink to='/palindrome-pyramid-pattern-in-c++-using-number-and-alphabet' className='side-nav-links' activeClassName='active'>
                <p className='active1'>4: Palindrome Pyramid Pattern Number & Alphabets</p>
            </NavLink>

            <NavLink to='/diamond-pattern-in-c++-using-star' className='side-nav-links' activeClassName='active'>
                <p className='active1'>5: Diamond Pattern Star</p>
            </NavLink>

            <NavLink to='/diamond-pattern-in-c++-using-star-and-numbers' className='side-nav-links' activeClassName='active'>
                <p className='active1'>6: Diamond Pattern Stars Numbers</p>
            </NavLink>

            <NavLink to='/floyd-triangle-in-c++' className='side-nav-links' activeClassName='active'>
                <p className='active1'>7: Floyd's Triangle </p>
            </NavLink>

            <NavLink to='/pascal-triangle-in-c++' className='side-nav-links' activeClassName='active'>
                <p className='active1'>8: Pascal's Triangle</p>
            </NavLink>

            {/* <NavLink to='' className='side-nav-links' activeClassName='active'>
                <p className='active1'>9: Comming Soon</p>
            </NavLink>
            
            <NavLink to='' className='side-nav-links' activeClassName='active'>
                <p className='active1'>10: Comming Soon </p>
            </NavLink>

            <NavLink to='' className='side-nav-links' activeClassName='active'>
                <p className='active1'>11: Comming Soon </p>
            </NavLink> */}
        </nav>

        
        {/* <span className="mobile__menu" onClick={toggleMenu}>
            <i class="ri-menu-line"></i>
        </span> */}
    </div>
  )
}

export default Leftsidebar
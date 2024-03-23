import React from 'react'
import { NavLink } from 'react-router-dom'
// import React, { useEffect, useRef } from 'react'
import '../../../0Css/LeftSidebar.css'
// import './Style.css'
// import '../../../components/Header/Style.css'
//import {Link } from 'react-router-dom'

//import "../../../components/header/Header.scss"
//const activeLink = ({isActive}) => (isActive ? "active" : "");

const Leftsidebar = () => {

  return (
    <div className='left-sidebsr' >
        <nav className='side-nav' >
            
            <NavLink to='/searching-basic-questions' className='side-nav-links' activeClassName='active'>
                <p className='active1'>0: Basic Searching </p>
            </NavLink>

            <NavLink to='/linear-search-in-c++' className='side-nav-links' activeClassName='active'>
                <p className='active1' >1: Linear Search</p>
            </NavLink> 

            <NavLink to='/binary-search-in-c++' className='side-nav-links' activeClassName='active'>
                <p className='active1'>2: Binary Search </p>
            </NavLink>           

            <NavLink to='/fierst-and-last-occurrence-in-c++' className='side-nav-links' activeClassName='active'>
                <p className='active1'>3: Fist and last occurrence</p>
            </NavLink>

            <NavLink to='/floor-and-ceil-in-c++' className='side-nav-links' activeClassName='active'>
                <p className='active1'>4: floor and ceil in sorted array</p>
            </NavLink>

            {/* <NavLink to='' className='side-nav-links' activeClassName='active'>
                <p className='active1'>5:  Comming Soon</p>
            </NavLink>

            <NavLink to='' className='side-nav-links' activeClassName='active'>
                <p className='active1'>6:  Comming Soon</p>
            </NavLink>

            <NavLink to='' className='side-nav-links' activeClassName='active'>
                <p className='active1'>7: Comming Soon </p>
            </NavLink>

            <NavLink to='' className='side-nav-links' activeClassName='active'>
                <p className='active1'>8: Comming Soon</p>
            </NavLink>

            <NavLink to='' className='side-nav-links' activeClassName='active'>
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
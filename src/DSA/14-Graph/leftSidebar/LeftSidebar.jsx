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
            
            <NavLink to='/graph-basic-questions' className='side-nav-links' activeClassName='active'>
                <p className='active1'>0: Basic Graph</p>
            </NavLink>

            <NavLink to='' className='side-nav-links' activeClassName='active'>
                <p className='active1' >1: Comming Soon</p>
            </NavLink> 

            <NavLink to='' className='side-nav-links' activeClassName='active'>
                <p className='active1'>2:  Comming Soon </p>
            </NavLink>           

            <NavLink to='' className='side-nav-links' activeClassName='active'>
                <p className='active1'>3:  Comming Soon</p>
            </NavLink>

            <NavLink to='' className='side-nav-links' activeClassName='active'>
                <p className='active1'>4:  Comming Soon</p>
            </NavLink>

            <NavLink to='' className='side-nav-links' activeClassName='active'>
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
            </NavLink>
        </nav>

        
        {/* <span className="mobile__menu" onClick={toggleMenu}>
            <i class="ri-menu-line"></i>
        </span> */}
    </div>
  )
}

export default Leftsidebar
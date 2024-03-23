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
            
            <NavLink to='/javascript' className='side-nav-links' activeClassName='active'>
                <p className='active1'>0: Javascript Intro </p>
            </NavLink>

            <NavLink to='' className='side-nav-links' activeClassName='active'>
                <p className='active1' >1: JavaScript Importent questions</p>
            </NavLink> 

            {/* <NavLink to='' className='side-nav-links' activeClassName='active'>
                <p className='active1'>2: Comming Soon</p>
            </NavLink>           

            <NavLink to='' className='side-nav-links' activeClassName='active'>
                <p className='active1'>3: Comming Soon</p>
            </NavLink>

            <NavLink to='' className='side-nav-links' activeClassName='active'>
                <p className='active1'>4: Comming Soon</p>
            </NavLink>

            <NavLink to='' className='side-nav-links' activeClassName='active'>
                <p className='active1'>5: Comming Soon</p>
            </NavLink> */}
        </nav>
    </div>
  )
}

export default Leftsidebar
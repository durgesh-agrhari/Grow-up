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
            
            <NavLink to='/Basic-Computer-Network' className='side-nav-links' activeClassName='active'>
                <p className='active1'>0: Basic CN</p>
            </NavLink>

            <NavLink to='/Computer-Network-Importent-interview-Questions' className='side-nav-links' activeClassName='active'>
                <p className='active1' >1: CN Interview Questions</p>
            </NavLink> 

            {/* <NavLink to='/bublicateselement' className='side-nav-links' activeClassName='active'>
                <p className='active1'>2: Dublicate element in an array</p>
            </NavLink>           

            <NavLink to='/frequencyinanarray' className='side-nav-links' activeClassName='active'>
                <p className='active1'>3: Frequency in an array</p>
            </NavLink>

            <NavLink to='/deletearrayeelement' className='side-nav-links' activeClassName='active'>
                <p className='active1'>4: Delete array element</p>
            </NavLink>

            <NavLink to='/palendromearray' className='side-nav-links' activeClassName='active'>
                <p className='active1'>5: Palendrome in an array</p>
            </NavLink>

            <NavLink to='/longestandSmallestele' className='side-nav-links' activeClassName='active'>
                <p className='active1'>6: Longest and Smallest element</p>
            </NavLink>

            <NavLink to='/secondlargestandsmallestele' className='side-nav-links' activeClassName='active'>
                <p className='active1'>7: Second largest and smallest in an array</p>
            </NavLink>

            <NavLink to='/kadanesalgo' className='side-nav-links' activeClassName='active'>
                <p className='active1'>8: Kadanes algo in an array</p>
            </NavLink>
            
            <NavLink to='/removedublicate' className='side-nav-links' activeClassName='active'>
                <p className='active1'>9: Remove blicate in an array</p>
            </NavLink>

            <NavLink to='/removesortedarraydublicate' className='side-nav-links' activeClassName='active'>
                <p className='active1'>10: Remove sorted array dublicate in an array</p>
            </NavLink>

            <NavLink to='/minandMaxelement' className='side-nav-links' activeClassName='active'>
                <p className='active1'>11: Find Min and Max element in an array</p>
            </NavLink> */}
        </nav>

        
        {/* <span className="mobile__menu" onClick={toggleMenu}>
            <i class="ri-menu-line"></i>
        </span> */}
    </div>
  )
}

export default Leftsidebar
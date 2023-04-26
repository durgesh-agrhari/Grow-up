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
            
            <NavLink to='/matrix-basic-questions' className='side-nav-links' activeClassName='active'>
                <p className='active1'>0: Basic Matrix</p>
            </NavLink>

            <NavLink to='/how-to-take-input-and-output-in-matrix' className='side-nav-links' activeClassName='active'>
                <p className='active1' >1: Input and Output in matrix</p>
            </NavLink> 

            <NavLink to='/how-to-add-two-matrix-in-c++' className='side-nav-links' activeClassName='active'>
                <p className='active1'>2: Add two matrix </p>
            </NavLink>           

            <NavLink to='/how-search-in-2d-matrix-in-c++' className='side-nav-links' activeClassName='active'>
                <p className='active1'>3: Searching in 2D matrix </p>
            </NavLink>

            <NavLink to='/how-to-replace-element-in-matrix-in-c++' className='side-nav-links' activeClassName='active'>
                <p className='active1'>4: Replace element in matrix</p>
            </NavLink>

            <NavLink to='/how-to-Compare-two-in-matrix-in-c++' className='side-nav-links' activeClassName='active'>
                <p className='active1'>5: Compare of two matrix</p>
            </NavLink>

            <NavLink to='/how-to-paskal-triangle-in-matrix-in-c++' className='side-nav-links' activeClassName='active'>
                <p className='active1'>6: Paskal Triangle in matrix</p>
            </NavLink>

            <NavLink to='/how-to-rotate-90-degree-in-matrix-in-c++' className='side-nav-links' activeClassName='active'>
                <p className='active1'>7: Rotate 90 degree matrix </p>
            </NavLink>

            <NavLink to='/how-to-find-8set-matrix-zero-in-c++' className='side-nav-links' activeClassName='active'>
                <p className='active1'>8: Set matrix zero</p>
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
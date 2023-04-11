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
            
            <NavLink to='/' className='side-nav-links' activeClassName='active'>
                <p className='active1'>Codechef Starters 84</p>
            </NavLink>
        </nav>

        
        {/* <span className="mobile__menu" onClick={toggleMenu}>
            <i class="ri-menu-line"></i>
        </span> */}
    </div>
  )
}

export default Leftsidebar
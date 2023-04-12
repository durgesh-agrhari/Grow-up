import React from 'react'
import { NavLink } from 'react-router-dom'
// import React, { useEffect, useRef } from 'react'
import './LeftSidebar.css'

const Leftsidebar = () => {

  return (
    <div className='left-sidebsr' >
        <nav className='side-nav' >
            
            <NavLink to='' className='side-nav-links' activeClassName='active'>
                <p className='active1'>Codechef Starters 85</p>
            </NavLink>
        </nav>

        
        {/* <span className="mobile__menu" onClick={toggleMenu}>
            <i class="ri-menu-line"></i>
        </span> */}
    </div>
  )
}

export default Leftsidebar
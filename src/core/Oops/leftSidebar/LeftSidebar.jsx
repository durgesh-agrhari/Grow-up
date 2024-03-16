import React from 'react'
import { NavLink } from 'react-router-dom'
import './LeftSidebar.css'


const Leftsidebar = () => {

  return (
    <div className='left-sidebsr' >
        <nav className='side-nav' >
        <NavLink to='/oops' className='side-nav-links' activeClassName='active'>
                <p className='active1'>0: OOPS Que</p>
            </NavLink>

            <NavLink to='/OopsPillars' className='side-nav-links' activeClassName='active'>
                <p className='active1' >1: Oops Pillars</p>
            </NavLink> 

            <NavLink to='/Implementation-of-oops' className='side-nav-links' activeClassName='active'>
                <p className='active1'>2: Implementation of oops </p>
            </NavLink>           

            <NavLink to='/Top-20-Oops-Importent-Questions' className='side-nav-links' activeClassName='active'>
                <p className='active1'>3: Oops Importent Questions</p>
            </NavLink>

            {/* <NavLink to='' className='side-nav-links' activeClassName='active'>
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
            </NavLink> */}
        </nav>
    </div>
  )
}

export default Leftsidebar







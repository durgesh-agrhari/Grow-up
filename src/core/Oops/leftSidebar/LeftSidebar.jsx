import React from 'react'
import { NavLink } from 'react-router-dom'
import './LeftSidebar.css'


const Leftsidebar = () => {

  return (
    <div className='left-sidebsr' >
        <nav className='side-nav' >
        <NavLink to='' className='side-nav-links' activeClassName='active'>
                <p className='active1'>0: OOPS Que</p>
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
    </div>
  )
}

export default Leftsidebar
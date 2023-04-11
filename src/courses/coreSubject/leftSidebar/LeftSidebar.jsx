import React from 'react'
import { NavLink } from 'react-router-dom'
import './LeftSidebar.css'

//import "../../../components/header/Header.scss"
//const activeLink = ({isActive}) => (isActive ? "active" : "");

const Leftsidebar = () => {
  return (
    <div className='left-sidebsr'>
        <nav className='side-nav'>
            
            <NavLink to='/coreSubject' className='side-nav-links' activeClassName='active'>
                <p className='active1'>CoreSubject</p>
            </NavLink>

            <NavLink to='/oops' className='side-nav-links' activeClassName='active'>
                <p className='active1' >Oops Concept</p>
            </NavLink>            

            <NavLink to='' className='side-nav-links' activeClassName='active'>
                <p className='active1'>Computer Network</p>
            </NavLink>

            <NavLink to='' className='side-nav-links' activeClassName='active'>
                <p className='active1'>Operating Syster</p>
            </NavLink>

            <NavLink to='' className='side-nav-links' activeClassName='active'>
                <p className='active1'>Mysquli </p>
            </NavLink>


            <div className='side-nav-div'>
                {/* <div><p>PUBLIC</p></div>

                <NavLink exact path to='/' className='side-nav-links' activeClassName='active' style={{paddingLeft: "40px"}}>
                    <p style={{paddingLeft:"10px" ,color: "black"}}>Questions</p>
                </NavLink>

                <NavLink to='/' className='side-nav-links' activeClassName='active' style={{paddingLeft: "40px"}}>
                    <p style={{paddingLeft:"10px" ,color: "black"}}>Tags</p>
                </NavLink> */}
                
            </div>
        </nav>
    </div>
  )
}

export default Leftsidebar
import React from 'react'
import { NavLink } from 'react-router-dom'
import './LeftSidebar.css'

//import "../../../components/header/Header.scss"
//const activeLink = ({isActive}) => (isActive ? "active" : "");

const Leftsidebar = () => {
  return (
    <div className='left-sidebsr'>
        <nav className='side-nav'>
            
            <NavLink to='' className='side-nav-links' activeClassName='active'>
                <p className='active1'>Blog Home</p>
            </NavLink>

            <NavLink to='/rodemap' className='side-nav-links' activeClassName='active'>
                <p className='active1' >Rodemap</p>
            </NavLink>            

            <NavLink to='' className='side-nav-links' activeClassName='active'>
                <p className='active1'>New News</p>
            </NavLink>

            <NavLink to='' className='side-nav-links' activeClassName='active'>
                <p className='active1'>Project</p>
            </NavLink>

            <NavLink to='' className='side-nav-links' activeClassName='active'>
                <p className='active1'>Contest</p>
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
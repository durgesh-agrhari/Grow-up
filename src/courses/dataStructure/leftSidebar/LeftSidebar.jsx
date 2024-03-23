import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../../0Css/LeftSidebar.css'

//import "../../../components/header/Header.scss"
//const activeLink = ({isActive}) => (isActive ? "active" : "");

const Leftsidebar = () => {
  return (
    <div className='left-sidebsr'>
        <nav className='side-nav'>
            
            <NavLink to='/dataStructure' className='side-nav-links' activeClassName='active'>
                <p className='active1'>DataStructure</p>
            </NavLink>

            <NavLink to='/array' className='side-nav-links' activeClassName='active'>
                <p className='active1' >Array</p>
            </NavLink>            

            <NavLink to='/array' className='side-nav-links' activeClassName='active'>
                <p className='active1'>String</p>
            </NavLink>

            <NavLink to='/array' className='side-nav-links' activeClassName='active'>
                <p className='active1'>Stack</p>
            </NavLink>

            <NavLink to='/array' className='side-nav-links' activeClassName='active'>
                <p className='active1'>Queue</p>
            </NavLink>

            <NavLink to='/array' className='side-nav-links' activeClassName='active'>
                <p className='active1'>Linkedlist</p>
            </NavLink>

            <NavLink to='/array' className='side-nav-links' activeClassName='active'>
                <p className='active1'>Hash Map</p>
            </NavLink>

            <NavLink to='/array' className='side-nav-links' activeClassName='active'>
                <p className='active1'>String</p>
            </NavLink>

            <NavLink to='/array' className='side-nav-links' activeClassName='active'>
                <p className='active1'>Stack</p>
            </NavLink>

            <NavLink to='/array' className='side-nav-links' activeClassName='active'>
                <p className='active1'>Queue</p>
            </NavLink>

            <NavLink to='/array' className='side-nav-links' activeClassName='active'>
                <p className='active1'>Linkedlist</p>
            </NavLink>

            <NavLink to='/array' className='side-nav-links' activeClassName='active'>
                <p className='active1'>Hash Map</p>
            </NavLink>

            <NavLink to='/array' className='side-nav-links' activeClassName='active'>
                <p className='active1'>String</p>
            </NavLink>

            <NavLink to='/array' className='side-nav-links' activeClassName='active'>
                <p className='active1'>Stack</p>
            </NavLink>

            <NavLink to='/array' className='side-nav-links' activeClassName='active'>
                <p className='active1'>Queue</p>
            </NavLink>

            <NavLink to='/array' className='side-nav-links' activeClassName='active'>
                <p className='active1'>Linkedlist</p>
            </NavLink>

            <NavLink to='/array' className='side-nav-links' activeClassName='active'>
                <p className='active1'>Hash Map</p>
            </NavLink>

            <NavLink to='/array' className='side-nav-links' activeClassName='active'>
                <p className='active1'>Tree Algo</p>
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
import React from 'react'
import { NavLink } from 'react-router-dom'
import './LeftSidebar.css'

const Leftsidebar = () => {

  return (
    <div className='left-sidebsr' >
        <nav className='side-nav' >
            
            <NavLink to='/sorting-basic-questions' className='side-nav-links' activeClassName='active'>
                <p className='active1'>0: Basic Sorting</p>
            </NavLink>

            <NavLink to='/selection-sort-in-c++' className='side-nav-links' activeClassName='active'>
                <p className='active1' >1: Selection Sort</p>
            </NavLink> 

            <NavLink to='/bubble-sort-in-c++' className='side-nav-links' activeClassName='active'>
                <p className='active1'>2: Bubble Sort </p>
            </NavLink>           

            <NavLink to='/insertion-sort-in-c++' className='side-nav-links' activeClassName='active'>
                <p className='active1'>3: Insertion Sort</p>
            </NavLink>

            <NavLink to='/merge-sort-in-c++' className='side-nav-links' activeClassName='active'>
                <p className='active1'>4: Merge Sort</p>
            </NavLink>

            <NavLink to='/quick-sort-in-c++' className='side-nav-links' activeClassName='active'>
                <p className='active1'>5: Quick Sort</p>
            </NavLink>

            <NavLink to='/redux-sort-in-c++' className='side-nav-links' activeClassName='active'>
                <p className='active1'>6: Redux Sort</p>
            </NavLink>

        </nav>
    </div>
  )
}

export default Leftsidebar
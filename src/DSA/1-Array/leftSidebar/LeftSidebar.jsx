import React from 'react'
import { NavLink } from 'react-router-dom'
import React, { useEffect, useRef } from 'react'
import './LeftSidebar.css'
import './Style.css'
import '../../../components/Header/Style.css'
// import {Link } from 'react-router-dom'

import "../../../components/header/Header.scss"
const activeLink = ({isActive}) => (isActive ? "active" : "");

const Leftsidebar = () => {

    // const arr = [
    //     {
    //         url: "/array-basic-questions",
    //         content: "0: Basic Array"
    //     },
    //     {
    //         url: "/reverseelementinanarray",
    //         content: "1: Reverse element in an array"
    //     },

    // ]

    return (
        <div className='' >
            <nav className='' >

                {/* {arr.map((item, index) => (
                    <NavLink key={index} to={item.url} className='side-nav-links' 
                    activeClassName='active'
                    >
                        <p className='active1'>{item.content}</p>
                    </NavLink>
                ))} */}

                <NavLink to='/array-basic-questions' className='side-nav-links' activeClassName='active'>
                <p className='active1'>0: Basic Array</p>
            </NavLink>

            <NavLink to='/reverseelementinanarray' className='side-nav-links' activeClassName='active'>
                <p className='active1' >1: Reverse element in an array</p>
            </NavLink> 
                
            <NavLink to='/bublicateselement' className='side-nav-links' activeClassName='active'>
                <p className='active1'>2: Dublicate element in an array</p>
            </NavLink>           

            <NavLink to='/frequencyinanarray' className='side-nav-links' activeClassName='active'>
                <p className='active1'>3: Frequency in an array</p>
            </NavLink>

            <NavLink to='/deletearrayeelement' className='side-nav-links' activeClassName='active'>
                <p className='active1'>4: Delete array element</p>
            </NavLink>

            <NavLink to='/palendromearray' className='side-nav-links' activeClassName='active'>
                <p className='active1'>5: Palen drome in an array</p>
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
            </NavLink>

            <NavLink to='/repeatandmissing' className='side-nav-links' activeClassName='active'>
                <p className='active1'>12: Find Repeat and missing in an array</p>
            </NavLink>

            <NavLink to='/twosum' className='side-nav-links' activeClassName='active'>
                <p className='active1'>13: Two sum in an array</p>
            </NavLink>

            <NavLink to='/moveallZerotoBeginning' className='side-nav-links' activeClassName='active'>
                <p className='active1'>14: Move all Zero to Beginning in an array</p>
            </NavLink>

            <NavLink to='/sort0s1s2s' className='side-nav-links' activeClassName='active'>
                <p className='active1'>15: Sort 0s 1s 2s in an array</p>
            </NavLink>

            <NavLink to='/kthLargestandsmallest' className='side-nav-links' activeClassName='active'>
                <p className='active1'>16: kth Largest and smallest in an array</p>
            </NavLink>

            <NavLink to='/mergeTwoSortedArray' className='side-nav-links' activeClassName='active'>
                <p className='active1'>17: Merge Two Sorted Array</p>
            </NavLink>

            <NavLink to='/inversionanarray' className='side-nav-links' activeClassName='active'>
                <p className='active1'>18: Inversionan Array</p>
            </NavLink>

            <NavLink to='/stockbyandSell' className='side-nav-links' activeClassName='active'>
                <p className='active1'>19: Stock by and Sell in an array</p>
            </NavLink>

            <NavLink to='/trappingrainWater' className='side-nav-links' activeClassName='active'>
                <p className='active1'>20: Trapping rain Water in an array</p>
            </NavLink>

            <NavLink to='/majorityelement' className='side-nav-links' activeClassName='active'>
                <p className='active1'>21: Majority element in an array</p>
            </NavLink>
            </nav>


            {/* <span className="mobile__menu" onClick={toggleMenu}>
            <i class="ri-menu-line"></i>
        </span> */}
        </div>
    )
}

export default Leftsidebar
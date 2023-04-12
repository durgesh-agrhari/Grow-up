import React from 'react'
import './explore.css'
import { NavLink } from 'react-router-dom'

const activeLink = ({isActive}) => (isActive ? "activesub" : "");

const Explore = () => {
  return (
    <div>
      <div className='container'>
        <h1 className='e'>Explore Comming soon</h1>
      </div>

      <div>
        <div className='outer-box'>
            <div className='inner-box'>
                <ul className='home-links'>
                    <li className='exp'>
                        <NavLink to='' className={activeLink} > DSA Placement 100% </NavLink>
                    </li>
                    <li className='exp'>
                        <NavLink to='' className={activeLink}>Array Basic Questions</NavLink>
                    </li>
                    <li className='exp'>
                        <NavLink to='' className={activeLink}>Codechef Contest solutions </NavLink>
                    </li>
                    <li className='exp'>
                        <NavLink to='' className={activeLink}>Codeforces Contest Solutions </NavLink>
                    </li>
                    <li className='exp'>
                        <NavLink to='' className={activeLink}>LeedCode Contest Solutions </NavLink>
                    </li>
                    <li className='exp'>
                        <NavLink to='' className={activeLink}>Learn Web Development </NavLink>
                    </li>
                    <li className='exp'>
                        <NavLink to='' className={activeLink}>Leran MERN Stack Compleate </NavLink>
                    </li>
                </ul>

                <ul className='home-links'>
                    <li className='exp'>
                        <NavLink to='/' className={activeLink} > DSA Placement 100% </NavLink>
                    </li>
                    <li className='exp'>
                        <NavLink to='/' className={activeLink}>Array Basic Questions</NavLink>
                    </li>
                    <li className='exp'>
                        <NavLink to='/' className={activeLink}>Codechef Contest solutions </NavLink>
                    </li>
                    <li className='exp'>
                        <NavLink to='/' className={activeLink}>Codeforces Contest Solutions </NavLink>
                    </li>
                    <li className='exp'>
                        <NavLink to='/' className={activeLink}>LeedCode Contest Solutions </NavLink>
                    </li>
                    <li className='exp'>
                        <NavLink to='/' className={activeLink}>Learn Web Development </NavLink>
                    </li>
                    <li className='exp'>
                        <NavLink to='/' className={activeLink}>Leran MERN Stack Compleate </NavLink>
                    </li>
                </ul>

                <ul className='home-links'>
                    <li className='exp'>
                        <NavLink to='' className={activeLink} > DSA Placement 100% </NavLink>
                    </li>
                    <li className='exp'>
                        <NavLink to='' className={activeLink}>Array Basic Questions</NavLink>
                    </li>
                    <li className='exp'>
                        <NavLink to='' className={activeLink}>Codechef Contest solutions </NavLink>
                    </li>
                    <li className='exp'>
                        <NavLink to='' className={activeLink}>Codeforces Contest Solutions </NavLink>
                    </li>
                    <li className='exp'>
                        <NavLink to='' className={activeLink}>LeedCode Contest Solutions </NavLink>
                    </li>
                    <li className='exp'>
                        <NavLink to='' className={activeLink}>Learn Web Development </NavLink>
                    </li>
                    <li className='exp'>
                        <NavLink to='' className={activeLink}>Leran MERN Stack Compleate </NavLink>
                    </li>
                </ul>

                <ul className='home-links'>
                    <li className='exp'>
                        <NavLink to='/' className={activeLink} > DSA Placement 100% </NavLink>
                    </li>
                    <li className='exp'>
                        <NavLink to='/' className={activeLink}>Array Basic Questions</NavLink>
                    </li>
                    <li className='exp'>
                        <NavLink to='/' className={activeLink}>Codechef Contest solutions </NavLink>
                    </li>
                    <li className='exp'>
                        <NavLink to='/' className={activeLink}>Codeforces Contest Solutions </NavLink>
                    </li>
                    <li className='exp'>
                        <NavLink to='/' className={activeLink}>LeedCode Contest Solutions </NavLink>
                    </li>
                    <li className='exp'>
                        <NavLink to='/' className={activeLink}>Learn Web Development </NavLink>
                    </li>
                    <li className='exp'>
                        <NavLink to='/' className={activeLink}>Leran MERN Stack Compleate </NavLink>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Explore

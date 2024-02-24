import React, { useEffect, useRef } from 'react'
import {NavLink } from 'react-router-dom'
import './Style.css'

import Logo1 from '../.././assets/logo1.png'

const Header = ({ theme, toggleTheme }) => {

    const headerRef = useRef(null)

    const menuRef = useRef(null)

    const headerFunc = () => {
        if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 ){
            headerRef.current.classList.add('header__shrink')
        }else{
            headerRef.current.classList.remove('header__shrink')
        }
    }
    useEffect(() => {
        window.scrollTo(0,0)
        window.addEventListener('scroll', headerFunc)

        return ()=> window.removeEventListener('scroll', headerFunc)
 } ,[]);

   const toggleMenu = () => menuRef.current.classList.toggle('menu__active')

  return (
    <header className='header' ref={headerRef} >
        <div className='container'>
            <div className='nav_wrappe'>
                <div className='logo'>
                <NavLink to='/' className='menu__link'><h2> <img src={Logo1} width='40' height='25' className='logo1' alt='logo' /> Growup Code</h2></NavLink>
                </div>

                {/* ======== navigation ====== */}
                <div className='navigation' ref={menuRef} onClick={toggleMenu}>
                    <ul className='menu'>

                            <li className='menu__item'><NavLink to='/' className='menu__link' activeclassname='navactive'  >Home</NavLink></li>

                            <li className='menu__item'><NavLink to='/DSA-Need-And-Clean-SDE-Sheet' className='menu__link' activeclassname='navactive'>DSA</NavLink></li>

                            {/* <li className='menu__item'><NavLink to='/ltts' className='menu__link' activeclassname='navactive'>LTTS</NavLink></li> */}

                            <li className='menu__item'><NavLink to='/web-development' className='menu__link' activeclassname='navactive'>Web</NavLink></li>

                            {/* <li className='menu__item'><NavLink to='/codechef-contest-solution' className='menu__link' activeclassname='navactive'>Contest</NavLink></li> */}

                            <li className='menu__item'><NavLink to='/job-home' className='menu__link' activeclassname='navactive'>Job</NavLink></li>

                            <li className='menu__item'><NavLink to='/oops' className='menu__link' activeclassname='navactive'>Core</NavLink></li>

                            <li className='menu__item'><NavLink to='/soon' className='menu__link' activeclassname='navactive'>Tutorials</NavLink></li>

                            <li className='menu__item'><NavLink to='/explore' className='menu__link' activeclassname='navactive'>Explore</NavLink></li>
                    </ul> 
                </div>

                {/* ========== light mode ========= */}
                <div className='light__mode'>
                    <span onClick={toggleTheme} >
                        {
                        theme === 'light-theme' ? (<span><i class="ri-moon-line"></i>Dark</span>) : (<span><i class="ri-sun-line"></i>Light</span>)
                        }
                    </span>
                </div>

                <span className="mobile__menu" onClick={toggleMenu}>
                    <i class="ri-menu-line">
                </i></span>
            </div>
        </div>
    </header>
  )
}

export default Header




















// import React, { useEffect, useRef } from 'react'
// import './Style.css'

// const nav__links = [
//     {
//         path:'#',
//         display:'Home'
//     },
//     {
//         path:'#dataStructure',
//         display:'DataStructure'
//     },

//     {
//         path:'#about',
//         display:'About'
//     },
//     {
//         path:'#service',
//         display:'Service'
//     },
//     {
//         path:'#projects',
//         display:'Projects'
//     },
//     {
//         path:'#blog',
//         display:'Blog'
//     },

// ]

// const Header = ({ theme, toggleTheme }) => {

//     const headerRef = useRef(null)

//     const menuRef = useRef(null)

//     const headerFunc = () => {
//         if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 ){
//             headerRef.current.classList.add('header__shrink')
//         }else{
//             headerRef.current.classList.remove('header__shrink')
//         }
//     }

//     useEffect(() => {
//         window.addEventListener('scroll', headerFunc)

//         return ()=> window.removeEventListener('scroll', headerFunc)
//  } ,[]);

// //  const handleClick = e => {
// //     e.preventDefault()
// //     const targetAttr = e.target.getAttribute('href')
// //     const location = document.querySelector(targetAttr).offsetTop;

// //     window.scrollTop({
// //         left:0,
// //         top: location-80,
// //     });
// //  }

//    const toggleMenu = () => menuRef.current.classList.toggle('menu__active')

//   return (
//     <header className='header' ref={headerRef} >
//         <div className='container'>
//             <div className='nav_wrappe'>
//                 <div className='logo'>
//                     <h2>Growup Code</h2>
//                 </div>

//                 {/* ======== navigation ====== */}
//                 <div className='navigation' ref={menuRef} onClick={toggleMenu}>
//                     <ul className='menu'>
//                         {nav__links.map((item, index) => (
//                             <li className='menu__item' key={index}><a href={item.path} className='menu__link'>{item.display}</a></li>
//                         ))}
//                     </ul> 
//                 </div>

//                 {/* ========== light mode ========= */}
//                 <div className='light__mode'>
//                     <span onClick={toggleTheme} >
//                         {
//                         theme === 'light-theme' ? (<span><i class="ri-moon-line"></i>Dark</span>) : (<span><i class="ri-sun-line"></i>Light</span>)
//                         }
//                     </span>
//                 </div>

//                 <span className="mobile__menu" onClick={toggleMenu}>
//                     <i class="ri-menu-line">
//                 </i></span>
//             </div>
//         </div>
//     </header>
//   )
// }

// export default Header

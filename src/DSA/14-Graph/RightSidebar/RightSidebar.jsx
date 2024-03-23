import React from 'react'
import '../../../0Css/RightSidebar.css'
// import pen from '../../assets/pen-solid.svg'
// import comment from '../../assets/message-solid.svg'
// import logo from '../../assets/logo.png'

import pen from '../../../assets/pen-solid.svg'
import comment from '../../../assets/message-solid.svg'
import logo from '../../../assets/logo.png'

const RightSidebar = () => {

    const tags = ['C', 'DBMS', ' Beast CSS ', 'BestHTML', 'JavaScript', 'React Js', 'OS', 'CN', 'mongodb', 'Wordpress', 'C++', 'CSS' ]

  return (
    <div className='right-sidebar'>

<div className='widget'>
       
<h4 className='pp'>Growup Code</h4>
        
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <img src={pen} alt='Pen' width='18' className='iconrr' />
                <p className='pp'>Making learning easier and more convenient for you. Data Structure. Data structures are the problem - solving pillars of coding.</p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={pen} alt='Pen' width='18'className='iconrr' />
                <p className='pp'>Crowup Code played a very important role during my placement session. All the lectures of placement related subjects like DSA OS, DBMS were available there.</p>
            </div>
        </div> <br/>

        <h4 className='pp'>Featured on Growup</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <img src={comment} alt='Pen' width='18' className='iconrr' />
                <p className='pp'>
                    East to understand all DSA topics
                </p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={comment} alt='Pen' width='18' className='iconrr' />
                <p className='pp'>Easy way to learn OS, DBMS, CN and Mysql </p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={logo} alt='Pen' width='18' />
                <p className='pp'>Easy to Practice Basic coding questions</p>
            </div>
        </div> <br/>

        <h4 className='pp'>Hot Code posts</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <p>10</p>
                <p className='pp'>Zero to hero DSA Course for beginners and advance also</p>
            </div>
            <div className='right-sidebar-div-2'>
                <p>20</p>
                <p className='pp'>Best Interview Practice and mock interview</p>
            </div>
            <div className='right-sidebar-div-2'>
                <p>30</p>
                <p className='pp'>Best Explore Ai and new technology</p>
            </div>  
        </div>


        {/* //tages all */}

        <div className='widget-tags'>
        <h3 className='pp'>Watched tages</h3>
        <div className='widget-tags-div'>
            {
                tags.map((tag) => (
                    <p key={tag} className="tag"> {tag} </p>
                ))
            }
        </div>
    </div>
    </div>
      
    </div>
  )
}

export default RightSidebar
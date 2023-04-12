import React from 'react'
import Leftsidebar from './leftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import './abcontest.css'
import Subnav from './Subnav/Subnav'
import Post1 from './editer1/Post1'

const Codechef = () => {
  return (
    <div className='subb'>
     <Subnav/>
    <div className='home-container1'>
     
      <Leftsidebar />
      <div className='home-container2'>
      
        <h3>Codechef Solutions Starters 85 || IPL Ticket Rush  </h3><br/>
        
        <p className='pp'> 
          Problem <br/>
          DAIICT college students want to attend an IPL match.<br/>
          
          A total of N students from the college want to go while only  M tickets are <br/>available for the match.<br/>
          Determine how many students won't be able to book tickets.<br/>
          </p>

        <Post1/>

      </div>
      <RightSidebar />
    </div>
    </div>
  )
}

export default Codechef

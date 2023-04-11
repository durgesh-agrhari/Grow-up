import React from 'react'
import Leftsidebar from './leftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import './abcontest.css'
import Subnav from './Subnav/Subnav'
import Post1 from '../DSA/1-Array/editer1/Post1'

const Codechef = () => {
  return (
    <div className='subb'>
     <Subnav/>
    <div className='home-container1'>
     
      <Leftsidebar />
      <div className='home-container2'>
      
        <h3>Codechef Solutions Starters 84 </h3><br/>
        
        <p className='pp'> Codechef </p>

        <Post1/>

      </div>
      <RightSidebar />
    </div>
    </div>
  )
}

export default Codechef

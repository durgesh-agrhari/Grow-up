import React from 'react'
import Leftsidebar from './leftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import './abcontest.css'
import Subnav from './Subnav/Subnav'
// import Post1 from './editer1/Post1'


const Leedcode = () => {
  return (
    <div className='subb'>
    <Subnav/>
    <div className='home-container1'>
      <Leftsidebar/>
      <div className='home-container2'>
        <h3>Leedcode Contest sSolution Comming soon</h3><br/>
        <p className='pp'>Leedcode Contest sSolution Comming soon </p><br/>

 
        {/* <Post1/> */}

      </div>
      <RightSidebar />
    </div>

    </div>
  )
}

export default Leedcode

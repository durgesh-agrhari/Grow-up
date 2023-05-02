import React from 'react'
import Leftsidebar from './leftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import './A_array.css'
import Subnav from '../Subnav/Subnav'
import Post5 from './editer1/Post5'

const E5DiamondPattern = () => {
  return (
    <div className='subb'>
    <Subnav/>
    <div className='home-container1'>
      <Leftsidebar/>
      <div className='home-container2'>
        <h3>5: Diamond Pattern Programs in C++ using stars</h3><br/>
        <p className='pp'>
          Comming Soon
        </p><br/>

        <Post5/>
      </div>
      <RightSidebar />
    </div>

    </div>
  )
}

export default E5DiamondPattern

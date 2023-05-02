import React from 'react'
import Leftsidebar from './leftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import './A_array.css'
import Subnav from '../Subnav/Subnav'
import Post2 from './editer1/Post2'

const B2PyramidPattern = () => {
  return (
    <div className='subb'>
    <Subnav/>
    <div className='home-container1'>
      <Leftsidebar/>
      <div className='home-container2'>
        <h3>2: Pyramid Pattern Programs in C++ using stars</h3><br/>
        <p className='pp'>
          Comming Soon ......
        </p><br/>
        <Post2/>
      </div>
      <RightSidebar />
    </div>

    </div>
  )
}

export default B2PyramidPattern

import React from 'react'
import Leftsidebar from './leftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import './A_array.css'
import Subnav from '../Subnav/Subnav'
import Post3 from './editer1/Post3'

const C3PyramidPatternnum = () => {
  return (
    <div className='subb'>
    <Subnav/>
    <div className='home-container1'>
      <Leftsidebar/>
      <div className='home-container2'>
        <h3>3: Pyramid Pattern Programs in C++ using numbers</h3><br/>
        <p className='pp'>
          Comming Soon ....
        </p><br/>

        <Post3/>
      </div>
      <RightSidebar />
    </div>

    </div>
  )
}

export default C3PyramidPatternnum

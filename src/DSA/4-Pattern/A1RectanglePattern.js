import React from 'react'
import Leftsidebar from './leftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import './A_array.css'
import Subnav from '../Subnav/Subnav'
import Post1 from './editer1/Post1'


const A1RectanglePattern = () => {
  return (
    <div className='subb'>
    <Subnav/>
    <div className='home-container1'>
      <Leftsidebar/>
      <div className='home-container2'>
        <h3>1: Rectangle Pattern Programs in C++</h3><br/>
        <p className='pp'>
          Comming Soon ....
        </p><br/>

        <Post1/>

      </div>
      <RightSidebar />
    </div>

    </div>
  )
}

export default A1RectanglePattern
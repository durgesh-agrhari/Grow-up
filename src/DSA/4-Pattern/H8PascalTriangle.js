import React from 'react'
import Leftsidebar from './leftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import './A_array.css'
import Subnav from '../Subnav/Subnav'
import Post8 from './editer1/Post8'

const H8PascalTriangle = () => {
  return (
    <div className='subb'>
    <Subnav/>
    <div className='home-container1'>
      <Leftsidebar/>
      <div className='home-container2'>
        <h3>8: Pascal's Triangle Pattern Program in C++ </h3><br/>
        <p className='pp'>
          Comming Soon ...
        </p><br/>
        <Post8/>
     
      </div>
      <RightSidebar />
    </div>

    </div>
  )
}

export default H8PascalTriangle

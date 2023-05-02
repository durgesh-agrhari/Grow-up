import React from 'react'
import Leftsidebar from './leftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import './A_array.css'
import Subnav from '../Subnav/Subnav'
import Post7 from './editer1/Post7'

const G7FloydTriangle = () => {
  return (
    <div className='subb'>
    <Subnav/>
    <div className='home-container1'>
      <Leftsidebar/>
      <div className='home-container2'>
        <h3>7: Floyd's Triangle Pattern Program in C++.</h3><br/>
        <p className='pp'>
          Comming Soon
        </p><br/>
        
        <Post7/>
  
      </div>
      <RightSidebar />
    </div>

    </div>
  )
}

export default G7FloydTriangle

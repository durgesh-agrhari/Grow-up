import React from 'react'
import Leftsidebar from './leftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import '../../0Css/style.css'
import Subnav from '../Subnav/Subnav'
import Post8 from './editer1/Post8'

const H8countFrequency = () => {
  return (
    <div className='subb'>
    <Subnav/>
    <div className='home-container1'>
      <Leftsidebar/>
      <div className='home-container2'>
        <h3>8: How to count frequency in string</h3><br/>
        <p className='pp'>
        Given string str containing only lowercase characters. The problem is to print the characters along with their frequency in the order of their occurrence and in the given format explained in the examples below.
        </p><br/>
        <Post8/>
     
      </div>
      <RightSidebar />
    </div>

    </div>
  )
}

export default H8countFrequency

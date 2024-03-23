import React from 'react'
import Leftsidebar from './leftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import '../../0Css/style.css'
import Subnav from '../Subnav/Subnav'
import Post1 from './editer1/Post1'


const A1ReverseString = () => {
  return (
    <div className='subb'>
    <Subnav/>
    <div className='home-container1'>
      <Leftsidebar/>
      <div className='home-container2'>
        <h3>1: How to reverse String in cpp</h3><br/>
        <p className='pp'>The reversing of a string is nothing but simply substituting the last element of a string to the 1st position of the string.</p><br/>

        <Post1/>

      </div>
      <RightSidebar />
    </div>

    </div>
  )
}

export default A1ReverseString
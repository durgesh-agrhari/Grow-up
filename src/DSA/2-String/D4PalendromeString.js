import React from 'react'
import Leftsidebar from './leftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import '../../0Css/style.css'
import Subnav from '../Subnav/Subnav'
import Post4 from './editer1/Post4'

const D4PalendromeString = () => {
  return (
    <div className='subb'>
    <Subnav/>
    <div className='home-container1'>
      <Leftsidebar/>
      <div className='home-container2'>
        <h3>4:How to check string is palendrome or not.</h3><br/>
        <p className='pp'>
        In C++, you can check whether a string is a palindrome or not using an algorithm with O(n) time complexity, where n is the length of the string.
        </p>
        <Post4/>
      </div>
      <RightSidebar />
    </div>

    </div>
  )
}

export default D4PalendromeString

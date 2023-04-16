import React from 'react'
import Leftsidebar from './leftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import './A_array.css'
import Subnav from '../Subnav/Subnav'
import Post9 from './editer1/Post9'

const I9Substring = () => {
  return (
    <div className='subb'>
    <Subnav/>
    <div className='home-container1'>
      <Leftsidebar/>
      <div className='home-container2'>
        <h3>9: Find Substring in string in C++</h3><br/>
        <p className='pp'>
          * Removing duplicates from an array involves deleting all the repeated elements and keeping only the unique ones. <br/><br/>
          * This is a common operation in programming, especially when working with data sets. 
          * Given a sorted array, the task is to remove the duplicate elements from the array.

          </p><br/><br/>
        <Post9/>

      </div>
      <RightSidebar />
    </div>

    </div>
  )
}

export default I9Substring

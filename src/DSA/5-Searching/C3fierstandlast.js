import React from 'react'
import Leftsidebar from './leftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import './A_array.css'
import Subnav from '../Subnav/Subnav'
import Post3 from './editer1/Post3'

const C3fierstandlast = () => {
  return (
    <div className='subb'>
    <Subnav/>
    <div className='home-container1'>
      <Leftsidebar/>
      <div className='home-container2'>
        <h2>3: How to find Fist and last occurrence in a sorted array</h2><br/>
        <p className='pp'>
        To find the first and last occurrence of an element in a sorted array in C++, you can use binary search algorithm to locate the element and then perform a linear search to find its first and last occurrence. Here's an example code:
        </p>

        <Post3/>
      </div>
      <RightSidebar />
    </div>

    </div>
  )
}

export default C3fierstandlast

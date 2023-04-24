import React from 'react'
import Leftsidebar from './leftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import './A_array.css'
import Subnav from '../Subnav/Subnav'
import Post1 from './editer1/Post1'


const A1selectionsort = () => {
  return (
    <div className='subb'>
    <Subnav/>
    <div className='home-container1'>
      <Leftsidebar/>
      <div className='home-container2'>
        <h3>1: How to implement Selection Sorting in cpp</h3><br/>
        <p className='pp'>
        Selection sort is a simple sorting algorithm that works by repeatedly finding the minimum element from the unsorted part of an array and swapping it with the first element of the unsorted part. The process is repeated until the entire array is sorted.<br/><br/>

        Here's an example implementation of selection sort in C++:
        </p><br/>
        <Post1/>

      </div>
      <RightSidebar />
    </div>

    </div>
  )
}

export default A1selectionsort
import React from 'react'
import Leftsidebar from './leftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import './A_array.css'
import Subnav from '../Subnav/Subnav'
import Post3 from './editer1/Post3'

const C3insertionsort = () => {
  return (
    <div className='subb'>
    <Subnav/>
    <div className='home-container1'>
      <Leftsidebar/>
      <div className='home-container2'>
        <h3>3: How to implement insertion sort in cpp</h3><br/>
        <p className='pp'>
        Insertion sort is a simple sorting algorithm that builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort. However, it can be very efficient for small datasets.<br/><br/>

        Here's an example implementation of insertion sort in C++:
        </p><br/><br/>

        <Post3/>
      </div>
      <RightSidebar />
    </div>

    </div>
  )
}

export default C3insertionsort
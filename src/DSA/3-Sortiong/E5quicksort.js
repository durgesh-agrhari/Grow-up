import React from 'react'
import Leftsidebar from './leftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import './A_array.css'
import Subnav from '../Subnav/Subnav'
import Post5 from './editer1/Post5'

const E5quicksort = () => {
  return (
    <div className='subb'>
    <Subnav/>
    <div className='home-container1'>
      <Leftsidebar/>
      <div className='home-container2'>
        <h3>5: How to implement quick sort in cpp</h3><br/>
        <p className='pp'><br/>
        Quick sort is a divide and conquer algorithm that works by selecting a pivot element from the array, partitioning the other elements into two sub-arrays based on whether they are less than or greater than the pivot, and then recursively sorting the sub-arrays. It is one of the most efficient sorting algorithms and has an average case time complexity of O(nlogn).<br/><br/>

        Here's an example implementation of quick sort in C++:<br/><br/>
        </p>

        <Post5/>
      </div>
      <RightSidebar />
    </div>

    </div>
  )
}

export default E5quicksort

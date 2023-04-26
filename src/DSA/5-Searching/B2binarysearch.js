import React from 'react'
import Leftsidebar from './leftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import './A_array.css'
import Subnav from '../Subnav/Subnav'
import Post2 from './editer1/Post2'

const B2binarysearch = () => {
  return (
    <div className='subb'>
    <Subnav/>
    <div className='home-container1'>
      <Leftsidebar/>
      <div className='home-container2'>
        <h2>2: Binary search in cpp</h2><br/>
        <p className='pp'>Binary search is an efficient search algorithm that works by dividing a sorted array into two halves and repeatedly searching in the half that could contain the target value until the value is found or the entire array has been searched.<br/><br/>

        In C++, a binary search can be implemented using a loop that divides the array in half on each iteration and compares the target value with the middle element of the current subarray. Here is an example implementation of a binary search function in C++:</p><br/>

        <Post2/>
      </div>
      <RightSidebar />
    </div>

    </div>
  )
}

export default B2binarysearch

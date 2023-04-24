import React from 'react'
import Leftsidebar from './leftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import './A_array.css'
import Subnav from '../Subnav/Subnav'
import Post4 from './editer1/Post4'

const D4mergesort = () => {
  return (
    <div className='subb'>
    <Subnav/>
    <div className='home-container1'>
      <Leftsidebar/>
      <div className='home-container2'>
        <h3>4:How implement merge sort in cpp.</h3><br/>
        <p className='pp'>
        Merge sort is a divide and conquer algorithm that works by dividing an array into two halves, sorting them recursively, and then merging the sorted halves to produce the final sorted array. It is one of the most efficient sorting algorithms and has a time complexity of O(nlogn).<br/><br/>

        Here's an example implementation of merge sort in C++:
        </p><br/><br/>

        <Post4/>
      </div>
      <RightSidebar />
    </div>

    </div>
  )
}

export default D4mergesort

import React from 'react'
import Leftsidebar from './leftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import './A_array.css'
import Subnav from '../Subnav/Subnav'
import Post17 from './editer1/Post17'

const Q17MergeTwoSortedArray = () => {
  return (
    <div className='subb'>
    <Subnav/>
    <div className='home-container1'>
      <Leftsidebar/>
      <div className='home-container2'>
        <h3>17: Merge Two Sorted Array </h3><br/>
        <p className='pp'>
        Merging two sorted arrays is the process of combining two sorted arrays into a single sorted array. The resulting array contains all the elements of the original arrays in sorted order.<br/>

        To merge two sorted arrays, we can start by creating a new array of size m + n, where m and n are the sizes of the two arrays to be merged. We can then compare the first element of each array and add the smaller of the two elements to the new array.<br/><br/> We repeat this process, moving to the next element in the array that we took the smaller element from, until we have added all the elements from both arrays to the new array.
        </p><br/>
                
        <Post17/>
      </div>
      <RightSidebar />
    </div>

    </div>
  )
}

export default Q17MergeTwoSortedArray

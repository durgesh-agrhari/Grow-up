import React from 'react'
import Leftsidebar from './leftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import './A_array.css'
import Subnav from '../Subnav/Subnav'
import Post10 from './editer1/Post10'

const J10Removesortedarraydublicate = () => {
  return (
    <div className='subb'>
    <Subnav/>
    <div className='home-container1'>
      <Leftsidebar/>
      <div className='home-container2'>
        <h3>10: Remove dublicate element in sorted array</h3><br/>
        <p className='pp'>Removing duplicate elements from a sorted array involves removing any element that appears more than once, while preserving the order of the remaining elements in the array. In other words, if the array is sorted, then all duplicate elements will be adjacent to each other. </p><br/>

        <Post10/>
        
      </div>
      <RightSidebar />
    </div>
    </div>
  )
}

export default J10Removesortedarraydublicate

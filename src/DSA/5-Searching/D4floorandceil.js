import React from 'react'
import Leftsidebar from './leftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import './A_array.css'
import Subnav from '../Subnav/Subnav'
import Post4 from './editer1/Post4'

const D4floorandceil = () => {
  return (
    <div className='subb'>
    <Subnav/>
    <div className='home-container1'>
      <Leftsidebar/>
      <div className='home-container2'>
        <h2>4:How to find loor and ceil in sorted array</h2><br/>
        <h3>Ceiling in a sorted array
</h3>
        <p className='pp'>
        Given a sorted array and a value x, the ceiling of x is the smallest element in an array greater than or equal to x, and the floor is the greatest element smaller than or equal to x. Assume that the array is sorted in non-decreasing order. Write efficient functions to find the floor and ceiling of x. 
        </p><br/><br/>
        <Post4/>
      </div>
      <RightSidebar />
    </div>

    </div>
  )
}

export default D4floorandceil

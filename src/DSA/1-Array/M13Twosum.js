import React from 'react'
import Leftsidebar from './leftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import './A_array.css'
import Subnav from '../Subnav/Subnav'
import Post13 from './editer1/Post13'

const M13Twosum = () => {
  return (
    <div className='subb'>
    <Subnav/>
    <div className='home-container1'>
      <Leftsidebar/>
      <div className='home-container2'>
        <h3>13: Find Two sum in an Array</h3><br/>
        <p className='pp'>
        "Two sum in an Array" is a problem in computer science where we are given an array of integers and a target value, and we need to find two numbers in the array that add up to the target value.<br/><br/>

        Given an array A[] of n numbers and another number x, the task is to check whether or not there exist two elements in A[] whose sum is exactly x. 

        </p><br/>
        
        <Post13/>
      </div>
      <RightSidebar />
    </div>

    </div>
  )
}

export default M13Twosum

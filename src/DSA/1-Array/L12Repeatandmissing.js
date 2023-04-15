import React from 'react'
import Leftsidebar from './leftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import './A_array.css'
import Subnav from '../Subnav/Subnav'
import Post12 from './editer1/Post12'

const L12Repeatandmissing = () => {
  return (
    <div className='subb'>
    <Subnav/>
    <div className='home-container1'>
      <Leftsidebar/>
      <div className='home-container2'>
        <h3>12: Find Repeat and missing in an Array</h3><br/>
        <p className='pp'>
        "Repeat and missing in an array" is a common problem in computer science and involves finding two elements in an array of size n, where one element is repeated and another element is missing.<br/><br/>

        In other words, given an array of n integers, the goal is to find two numbers:<br/><br/>

        1: The first number is the value that is duplicated in the array.<br/>
        2: The second number is the value that is missing from the array.<br/><br/>
        For example, if the given array is [1, 2, 3, 4, 4, 6], the output should be [4, 5], since 4 is repeated and 5 is missing.<br/>

        * Solving this problem can be useful in a variety of applications, such as detecting errors in data or identifying issues in algorithms that process arrays. <br/><br/> 

        * Given an unsorted array of size n. Array elements are in the range of 1 to n. One number from set [1, 2, …n] is missing and one number occurs twice in the array. Find these two numbers.<br/><br/> 
        Given an unsorted array of size n. Array elements are in the range of 1 to n. One number from set [1, 2, …n] is missing and one number occurs twice in the array. Find these two numbers.
        </p><br/>
        <Post12/>
      </div>
      <RightSidebar />
    </div>

    </div>
  )
}

export default L12Repeatandmissing

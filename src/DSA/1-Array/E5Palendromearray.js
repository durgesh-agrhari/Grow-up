import React from 'react'
import Leftsidebar from './leftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import '../../0Css/style.css'
import Subnav from '../Subnav/Subnav'
import Post5 from './editer1/Post5'

const E5Palendromearray = () => {
  return (
    <div className='subb'>
    <Subnav/>
    <div className='home-container1'>
      <Leftsidebar/>
      <div className='home-container2'>
        <h3>5: How to find palendrome in an arry</h3><br/>
        <p className='pp'>
        A palindrome in an array is a sequence of elements in the array that reads the same forward and backward. In other words, if you reverse the sequence of elements, it will still be the same sequence.<br/><br/>

        For example, consider the following array:<br/><br/>

        [1, 2, 3, 2, 1]<br/><br/>

        This array contains a palindrome, which is the sequence [2, 3, 2]. If you read this sequence from left to right or from right to left, it is the same.<br/>

        Note that palindromes in arrays do not have to be contiguous subarrays. In the example above, the palindrome is a subsequence of the array, but it is not contiguous.<br/>
        </p><br/>

        <Post5/>
      </div>
      <RightSidebar />
    </div>

    </div>
  )
}

export default E5Palendromearray

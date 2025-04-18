import React from 'react'
import Leftsidebar from './leftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import '../../0Css/style.css'
import Subnav from '../Subnav/Subnav'
import Post8 from './editer1/Post8'

const H8Kadanesalgo = () => {
  return (
    <div className='subb'>
    <Subnav/>
    <div className='home-container1'>
      <Leftsidebar/>
      <div className='home-container2'>
        <h3>8: Implement Kadanes algo in an Array || Maximum subarray sum in given array </h3><br/>
        <p className='pp'>
        * Kadane's algorithm is a popular dynamic programming algorithm used to find the maximum sum subarray in an array of integers.<br/><br/>

        * The algorithm works by iterating over the array and maintaining two variables: the current maximum subarray sum and the current maximum subarray sum ending at the current index.<br/><br/>
         * At each index, the algorithm updates these variables based on whether adding the current element to the maximum subarray sum ending at the previous index would result in a larger or smaller sum.<br/><br/>

        Here's an example C++ code for Kadane's algorithm:<br/><br/>
        </p><br/>
        <Post8/>
     
      </div>
      <RightSidebar />
    </div>

    </div>
  )
}

export default H8Kadanesalgo

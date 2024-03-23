import React from 'react'
import Leftsidebar from './leftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import '../../0Css/style.css'
import Subnav from '../Subnav/Subnav'

import Post21 from './editer1/Post21'

const U21Majorityelement = () => {
  return (
    <div className='subb'>
    <Subnav/>
    <div className='home-container1'>
      <Leftsidebar/>
      <div className='home-container2'>
        <h3>21: Majority element in an Array</h3><br/>
        <p className='pp'>
        Find the majority element in the array. A majority element in an array A[] of size n is an element that appears more than n/2 times (and hence there is at most one such element).
         </p><br/><br/>

         <p className='pp'>
         <h3>Follow the steps below to solve the given problem:</h3><br/><br/>

        Create a variable to store the max count, count = 0<br/>
        Traverse through the array from start to end.<br/>
        For every element in the array run another loop to find the count of similar elements in the given array.<br/><br/>
        If the count is greater than the max count update the max count and store the index in another variable.<br/>
        If the maximum count is greater than half the size of the array, print the element. Else print there is no majority element.<br/><br/>
        
        Below is the implementation of the above idea:<br/>
         </p>
        
        <Post21/>
        </div>
      <RightSidebar />
    </div>

    </div>
  )
}

export default U21Majorityelement

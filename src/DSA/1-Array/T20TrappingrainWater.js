import React from 'react'
import Leftsidebar from './leftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import '../../0Css/style.css'
import Subnav from '../Subnav/Subnav'
import Post20 from './editer1/Post20'

const T20TrappingrainWater = () => {
  return (
    <div className='subb'>
    <Subnav/>
    <div className='home-container1'>
      <Leftsidebar/>
      <div className='home-container2'>
        <h3>20: Trapping rain Water in an Array</h3><br/>
        <p className='pp'>
        Trapping rainwater in an array is a problem that can be solved by using the two-pointer approach. This approach involves maintaining two pointers, one at the beginning and one at the end of the array, and moving them towards each other until they meet. Here are the steps to solve this problem:<br/><br/>

        Initialize two pointers, left and right, at the beginning and end of the array, respectively.<br/><br/>
        Initialize two variables, left_max and right_max, to 0.<br/>
        Initialize a variable, result, to 0.<br/><br/>
        While the left pointer is less than or equal to the right pointer:<br/><br/>
        a. If the height at the left pointer is less than or equal to the height at the right pointer:<br/>
        i. Update left_max to be the maximum of left_max and the height at the left pointer.<br/>
        ii. Add the difference between left_max and the height at the left pointer to the result.<br/>
        iii. Increment the left pointer by 1.<br/><br/>
        b. Otherwise:<br/>
        i. Update right_max to be the maximum of right_max and the height at the right pointer.<br/>
        ii. Add the difference between right_max and the height at the right pointer to the result.<br/>
        iii. Decrement the right pointer by 1.
        Return the result.</p><br/>

        <p className='pp'><br/>
        <h3> * Follow the steps mentioned below to implement the idea:</h3><br/><br/>

        Traverse the array from start to end:<br/><br/>
        For every element: <br/>
        Traverse the array from start to that index and find the maximum height (a) and 
        Traverse the array from the current index to the end, and find the maximum height (b).<br/><br/>
        The amount of water that will be stored in this column is min(a,b) – array[i], add this value to the total amount of water stored<br/><br/>
        Print the total amount of water stored.<br/><br/>
        Below is the implementation of the above approach.<br/><br/>
        </p>
        <Post20/>
      </div>
      <RightSidebar />
    </div>

    </div>
  )
}

export default T20TrappingrainWater

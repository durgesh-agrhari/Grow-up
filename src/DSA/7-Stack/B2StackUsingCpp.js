import React from 'react'
import Leftsidebar from './leftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import './A_array.css'
import Subnav from '../Subnav/Subnav'
import Post2 from './editer1/Post2'

const B2StackUsingCpp = () => {
  return (
    <div className='subb'>
    <Subnav/>
    <div className='home-container1'>
      <Leftsidebar/>
      <div className='home-container2'>
        <h3>2: How to find length of String in cpp</h3><br/>
        <p className='pp'>To find duplicate elements in an array in C++, you can use a nested loop that compares each element of the array to all the other elements to check for duplicates. Here's an example of how to implement this algorithm:</p><br/>

        <h3>Example:</h3><br/>
        <p className='pp'>
        Input : n = 7 and array[ ] = 1, 2, 3, 6, 3, 6, 1.<br/>
        Output: 1, 3, 6.<br/><br/>

        Explanation: The numbers 1 , 3 and 6 appears more
        than once in the array.<br/><br/>

        Input : n = 5 and array[ ] = 1, 2, 3, 4 ,3.<br/>
        Output: 3.<br/><br/>

        Explanation: The number 3 appears more than once
        in the array.<br/>
        </p>
        <Post2/>
      </div>
      <RightSidebar />
    </div>

    </div>
  )
}

export default B2StackUsingCpp

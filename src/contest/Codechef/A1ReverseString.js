import React from 'react'
import Leftsidebar from './leftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import '../../0Css/style.css'
import Subnav from '../Subnav/Subnav'
import Post1 from './editer1/Post1'


const A1ReverseString = () => {
  return (
    <div className='subb'>
    <Subnav/>
    <div className='home-container1'>
      <Leftsidebar/>
      <div className='home-container2'>
        <h3>1: How to reverse String in cpp</h3><br/>
        <p className='pp'>To reverse an array in C++, you can use a simple algorithm that involves swapping the first and last elements of the array, the second and second-to-last elements, and so on, until the middle of the array is reached. Here's an example of how to implement this algorithm: </p><br/>

        <h3>Iterative way :</h3><br/>

        <p className='pp'>
          1: Initialize start and end indexes as start = 0, end = n-1 <br/>
          2: In a loop, swap arr[start] with arr[end] and change start and end as follows :
          start = start +1, end = end – 1<br/>

          a = start, b = end (Blow).
        </p><br/>

        <h3>Examples : </h3><br/>
        <p className='pp'>
        Input  : arr[ ] = 1, 2, 3.<br/>
        Output : arr[ ] = 3, 2, 1.<br/><br/>
        
        Input :  arr[ ] = 4, 5, 1, 2.<br/>
        Output : arr[ ] = 2, 1, 5, 4. <br/><br/>
        </p>
        <Post1/>

      </div>
      <RightSidebar />
    </div>

    </div>
  )
}

export default A1ReverseString
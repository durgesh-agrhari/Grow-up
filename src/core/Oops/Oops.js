import React from 'react'
import Leftsidebar from './leftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import './A_array.css'
import Subnav from '../Subnav/Subnav'
import Post1 from './editer1/Post1'


const Oops = () => {
  return (
    <div className='subb'>
    <Subnav/>
    <div className='home-container1'>
      <Leftsidebar/>
      <div className='home-container2'>
        <h3>1: Oops</h3><br/>
        <p className='pp'>To reverse an array in C++, you can use a simple algorithm that involves swapping the first and last elements of the array, the second and second-to-last elements, and so on, until the middle of the array is reached. Here's an example of how to implement this algorithm: </p><br/>
        <Post1/>

      </div>
      <RightSidebar />
    </div>

    </div>
  )
}

export default Oops

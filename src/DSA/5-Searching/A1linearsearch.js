import React from 'react'
import Leftsidebar from './leftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import './A_array.css'
import Subnav from '../Subnav/Subnav'
import Post1 from './editer1/Post1'


const A1linearsearch = () => {
  return (
    <div className='subb'>
    <Subnav/>
    <div className='home-container1'>
      <Leftsidebar/>
      <div className='home-container2'>
        <h2>1: How to implement linear search in cpp</h2><br/>
        <p className='pp'>
        Linear search is a simple search algorithm that searches for a target value in a given list or array by sequentially checking each element from the beginning to the end until the target value is found or the entire list has been searched.<br/><br/>

        In C++, a linear search can be implemented using a loop that iterates over each element in the array and compares it to the target value. Here is an example implementation of a linear search function in C++:
        </p><br/>
        <p className='pp'>
        </p><br/>
        <Post1/>

      </div>
      <RightSidebar />
    </div>

    </div>
  )
}

export default A1linearsearch
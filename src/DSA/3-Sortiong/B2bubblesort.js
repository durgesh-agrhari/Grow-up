import React from 'react'
import Leftsidebar from './leftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import './A_array.css'
import Subnav from '../Subnav/Subnav'
import Post2 from './editer1/Post2'

const B2bubblesort = () => {
  return (
    <div className='subb'>
    <Subnav/>
    <div className='home-container1'>
      <Leftsidebar/>
      <div className='home-container2'>
        <h3>2: How implement bubble sort in cpp</h3><br/>
        <p className='pp'>
        Bubble sort is a simple sorting algorithm that repeatedly steps through the list to be sorted, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.<br/><br/>

        Here's an example implementation of bubble sort in C++:  <br/><br/>
        </p>

        <Post2/>
      </div>
      <RightSidebar />
    </div>

    </div>
  )
}

export default B2bubblesort

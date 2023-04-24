import React from 'react'
import Leftsidebar from './leftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import './A_array.css'
import Subnav from '../Subnav/Subnav'
import Post6 from './editer1/Post6'

const F6reduxsort = () => {
  return (
    <div className='subb'>
    <Subnav/>
    <div className='home-container1'>
      <Leftsidebar/>
      <div className='home-container2'>
        <h3>6: How to implement redux sort in cpp</h3><br/>
        <p className='pp'>
        Radix sort is a sorting algorithm that sorts the elements by first grouping the individual digits of the same place value. Then, sort the elements according to their increasing/decreasing order.
        </p>
        <Post6/>
      </div>
      <RightSidebar />
    </div>

    </div>
  )
}

export default F6reduxsort

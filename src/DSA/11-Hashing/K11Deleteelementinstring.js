import React from 'react'
import Leftsidebar from './leftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import './A_array.css'
import Subnav from '../Subnav/Subnav'

import Post11 from './editer1/Post11'

const K11Deleteelementinstring = () => {
  return (
    <div className='subb'>
    <Subnav/>
    <div className='home-container1'>
      <Leftsidebar/>
      <div className='home-container2'>
        <h3>11: Delete element in string</h3><br/>
        <p className='pp'>In an array, the minimum (Min) element refers to the smallest value that is present in the array, while the maximum (Max) element refers to the largest value present in the array.<br/><br/>
        Algo...<br/>
        To find the minimum and maximum element in an array, you can traverse the array and compare each element with the current minimum and maximum values. Initially, you can set the minimum and maximum values to the first element of the array, and then iterate through the rest of the elements, updating the minimum and maximum values as you go along.
        </p><br/>
        <Post11/>
      </div>
      <RightSidebar />
    </div>

    </div>
  )
}

export default K11Deleteelementinstring

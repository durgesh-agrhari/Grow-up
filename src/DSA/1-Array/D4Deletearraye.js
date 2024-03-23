import React from 'react'
import Leftsidebar from './leftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import '../../0Css/style.css'
import Subnav from '../Subnav/Subnav'
import Post4 from './editer1/Post4'

const D4Deletearraye = () => {
  return (
    <div className='subb'>
    <Subnav/>
    <div className='home-container1'>
      <Leftsidebar/>
      <div className='home-container2'>
        <h3>4:How to delete element in an Array</h3><br/>
        <p className='pp'>
        In this tutorial, we are going to learn how to delete elements from the given range. Let's see the steps to solve the problem.
        <br/><br/>
        1: Initialize the array and range to delete the elements from.
        <br/>
        2: Initialize a new index variable.
        <br/>
        3: Iterate over the array.
        <br/>
        4: If the current index is not in the given range, then update the element in the array with a new index variable
        <br/>
        5: Increment the new index.
        <br/><br/>
        6: Return the new index.
        </p><br/>

        <Post4/>
      </div>
      <RightSidebar />
    </div>

    </div>
  )
}

export default D4Deletearraye

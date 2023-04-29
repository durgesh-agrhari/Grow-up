import React from 'react'
import Leftsidebar from './leftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import './A_array.css'
import Subnav from '../Subnav/Subnav'
import Post5 from './editer1/Post5'

const E5Comparetwomatrix = () => {
  return (
    <div className='subb'>
    <Subnav/>
    <div className='home-container1'>
      <Leftsidebar/>
      <div className='home-container2'>
        <h3>5: How to compare two matrix</h3><br/>
        <p className='pp'>
 
        To compare two matrices in C++, you can follow these steps:<br/><br/>

        1: Create two matrices of the same size and initialize them with some values.<br/>

        2:Traverse through each element of the matrices and compare the values of the corresponding elements.<br/>

        3: If the values of all corresponding elements are equal, the matrices are considered equal. Otherwise, they are considered unequal.<br/><br/>

        Here's an example code snippet that compares two matrices:
        </p><br/><br/>
        <p className='ppp'>
        <Post5/>
        </p>
      </div>
      <RightSidebar />
    </div>

    </div>
  )
}

export default E5Comparetwomatrix

import React from 'react'
import Leftsidebar from './leftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import './A_array.css'
import Subnav from '../Subnav/Subnav'
import Post14 from './editer1/Post14'

const N14MoveallZerotoBeginning = () => {
  return (
    <div className='subb'>
    <Subnav/>
    <div className='home-container1'>
      <Leftsidebar/>
      <div className='home-container2'>
        <h3>14: Moveall Zero to Beginning in an Array</h3><br/>
        <p className='pp'>
        Given an array arr[] of random integers, the task is to push all the zero’s in the array to the start and all the one’s to the end of the array. Note that the order of all the other elements should be the same.
        </p><br/>

        <Post14/>
      </div>
      <RightSidebar />
    </div>

    </div>
  )
}

export default N14MoveallZerotoBeginning

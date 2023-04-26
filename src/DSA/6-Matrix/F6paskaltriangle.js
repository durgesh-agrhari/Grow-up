import React from 'react'
import Leftsidebar from './leftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import './A_array.css'
import Subnav from '../Subnav/Subnav'
import Post6 from './editer1/Post6'

const F6paskaltriangle = () => {
  return (
    <div className='subb'>
    <Subnav/>
    <div className='home-container1'>
      <Leftsidebar/>
      <div className='home-container2'>
        <h3>6: Paskal triangle in matrix</h3><br/>
        <p className='pp'>
        In an array, the longest element refers to the element with the largest value, while the smallest element refers to the element with the smallest value.<br/><br/>

        * For example, consider the array [3, 7, 2, 9, 5]. <br/>
        In this case, the smallest element is 2, <br/>
        and the longest element is 9.<br/><br/>

        * Finding the longest and smallest elements in an array is a common problem in programming, and can be solved by iterating over the array and keeping track of the current smallest and longest elements.<br/><br/>
        </p>
        <Post6/>
      </div>
      <RightSidebar />
    </div>

    </div>
  )
}

export default F6paskaltriangle

import React from 'react'
import Leftsidebar from './leftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import '../../0Css/style.css'
import Subnav from '../Subnav/Subnav'
import Post7 from './editer1/Post7'

const G7Secondlargestandsmallestele = () => {
  return (
    <div className='subb'>
    <Subnav/>
    <div className='home-container1'>
      <Leftsidebar/>
      <div className='home-container2'>
        <h3>7: Find Second Largest and Smallest element in an Array</h3><br/>
        <p className='pp'>
        In an array, the second largest element refers to the element with the second-highest value, while the second smallest element refers to the element with the second-lowest value.<br/><br/>

        * For example, consider the array [3, 7, 2, 9, 5]. 
        In this case, the second smallest element is 3 (after 2), 
        and the second largest element is 7 (after 9).<br/><br/>

        * Finding the second largest and second smallest elements in an array is a common problem in programming, and can be solved by iterating over the array and keeping track of the current largest, second largest, smallest, and second smallest elements. Here's an example C++ code to find the second largest and second smallest elements in an array:  <br/><br/>
        </p><br/>
        
        <Post7/>
  
      </div>
      <RightSidebar />
    </div>

    </div>
  )
}

export default G7Secondlargestandsmallestele

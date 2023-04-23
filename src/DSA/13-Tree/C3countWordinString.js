import React from 'react'
import Leftsidebar from './leftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import './A_array.css'
import Subnav from '../Subnav/Subnav'
import Post3 from '../1-Array/editer1/Post3'

const C3countWordinString = () => {
  return (
    <div className='subb'>
    <Subnav/>
    <div className='home-container1'>
      <Leftsidebar/>
      <div className='home-container2'>
        <h3>3: How to Count Word in String</h3><br/>
        <p className='pp'>
        In the context of an array, the frequency of an element refers to the number of times it appears in the array. For example, if we have an array [1, 2, 2, 3, 3, 3], the frequency of 1 is 1, the frequency of 2 is 2, and the frequency of 3 is 3.
        <br/><br/>
        Finding the frequency of each element in an array can be useful in many applications such as data analysis, statistics, and signal processing. It allows us to better understand the distribution of values in the array and make informed decisions based on this information.
        </p><br/>
        <h3>Example: </h3><br/>
        <p className='pp'>
        Input :  arr[ ] = 10, 20, 20, 10, 10, 20, 5, 20.<br/>
        Output : 10 3<br/>
                20 4<br/>
                5  1<br/>
                <br/><br/>
        Input : arr[ ] = 10, 20, 20.<br/>
        Output : 10 1<br/>
                20 2 <br/>
        </p><br/>
        <Post3/>
      </div>
      <RightSidebar />
    </div>

    </div>
  )
}

export default C3countWordinString

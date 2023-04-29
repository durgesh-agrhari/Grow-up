import React from 'react'
import Leftsidebar from './leftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import './A_array.css'
import Subnav from '../Subnav/Subnav'
import Post3 from './editer1/Post3'

const C3Searchin2dmatrix = () => {
  return (
    <div className='subb'>
    <Subnav/>
    <div className='home-container1'>
      <Leftsidebar/>
      <div className='home-container2'>
        <h3>3: How to search in 2D matrix</h3><br/>
        <p className='pp'>
          
          To search for an element in a 2D matrix, you can follow the following steps:<br/><br/>

          1: Traverse the matrix starting from the top right corner or bottom left corner. Choose one of these corners based on whether you want to search for a smaller or larger element. For example, if you want to search for a smaller element, start at the top right corner. If you want to search for a larger element, start at the bottom left corner.<br/><br/>

          2: Compare the target element with the current element in the matrix. If they are equal, return the current position.<br/><br/>

          3: If the target element is greater than the current element, move to the next row (if you started at the top right corner) or the previous column (if you started at the bottom left corner).<br/><br/>

          4: If the target element is smaller than the current element, move to the previous column (if you started at the top right corner) or the next row (if you started at the bottom left corner).<br/><br/>

          5: Repeat steps 2 to 4 until you find the target element or reach the end of the matrix.<br/><br/>

          Here's an example code snippet that implements this algorithm to search for an element in a 2D matrix:<br/><br/>
        </p>
        <p className='ppp'>
        <Post3/>
        </p>
      </div>
      <RightSidebar />
    </div>

    </div>
  )
}

export default C3Searchin2dmatrix

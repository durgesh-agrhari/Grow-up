import React from 'react'
import Leftsidebar from './leftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import './abcontest.css'
import Subnav from './Subnav/Subnav'
import Post3 from './editer1/Post3'


const Leedcode = () => {
  return (
    <div className='subb'>
    <Subnav/>
    <div className='home-container1'>
      <Leftsidebar/>
      <div className='home-container2'>
        <h3>6376. Row With Maximum Ones</h3><br/>
        <p className='pp'>Given a m x n binary matrix mat, find the 0-indexed position of the row that contains the maximum count of ones, and the number of ones in that row.<br/><br/>

          In case there are multiple rows that have the maximum count of ones, the row with the smallest row number should be selected.<br/><br/>

          Return an array containing the index of the row, and the number of ones in it.<br/>

        </p><br/>

 
        <Post3/>

      </div>
      <RightSidebar />
    </div>

    </div>
  )
}

export default Leedcode

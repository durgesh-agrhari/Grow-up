
import React from 'react'
import Leftsidebar from './leftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import './A_array.css'
import Subnav from '../Subnav/Subnav'
import Post7 from './editer1/Post7'

const G7rotate90degreematrix = () => {
  return (
    <div className='subb'>
    <Subnav/>
    <div className='home-container1'>
      <Leftsidebar/>
      <div className='home-container2'>
        <h3>7: How to rotate 90 degree matrix.</h3><br/>
        <p className='pp'>
          
        To rotate a matrix by 90 degrees in clockwise direction in C++, you can follow these steps:<br/><br/>

        1: Create a 2D matrix of size n x n, where n is the number of rows and columns of the original matrix.<br/>

        2: Prompt the user to enter the elements of the original matrix.<br/>

        3: Use a nested loop to copy the elements of the original matrix into the new matrix, while swapping the rows and columns.<br/>

        4: Reverse each row of the new matrix to obtain the 90-degree rotated matrix.<br/>

        5: Print the rotated matrix.<br/><br/>

        Here's an example code snippet that rotates a matrix by 90 degrees in C++:
        </p><br/><br/>
        <p className='ppp'>
        <Post7/>
        </p>
  
      </div>
      <RightSidebar />
    </div>

    </div>
  )
}

export default G7rotate90degreematrix

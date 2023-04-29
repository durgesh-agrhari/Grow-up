import React from 'react'
import Leftsidebar from './leftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import './A_array.css'
import Subnav from '../Subnav/Subnav'
import Post1 from './editer1/Post1'


const A1Inputandoutput = () => {
  return (
    <div className='subb'>
    <Subnav/>
    <div className='home-container1'>
      <Leftsidebar/>
      <div className='home-container2'>
        <h3>1: How to take input and output of matrix in cpp</h3><br/>
        <p className='pp'>
        In C++, you can take input and output of a matrix using nested loops. Here is an example code to demonstrate the process:
        </p><br/>

        <p className='ppp'>
        <Post1/>
        </p>

        <p>
        <br/>

        Input<br/><br/>
        Enter the number of rows: 3 <br/>
        Enter the number of columns: 3<br/><br/>
        Enter the matrix elements: <br/>
        1 2 3 <br/>
        4 5 6 <br/>
        7 8 9<br/>

        <br/><br/>

        Output<br/><br/>
        The matrix is:<br/>
        1 2 3 <br/>
        4 5 6 <br/>
        7 8 9<br/>
        </p>

      </div>
      <RightSidebar />
    </div>

    </div>
  )
}

export default A1Inputandoutput
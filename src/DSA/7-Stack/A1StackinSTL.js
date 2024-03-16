import React from 'react'
import Leftsidebar from './leftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import './A_array.css'
import Subnav from '../Subnav/Subnav'
// import Post1 from './editer1/Post1'
import stack1 from '../../images/code images/stack/stack1.PNG'


const A1StackinSTL = () => {
  return (
    <div className='subb'>
    <Subnav/>
    <div className='home-container1'>
      <Leftsidebar/>
      <div className='home-container2'>
        <h3>1: Stack in C++ STL </h3><br/>
        {/* <p className='pp'></p><br/> */}
        {/* <h3></h3><br/> */}
        
        <img src={stack1} alt="Blog"/>

      </div>
      <RightSidebar />
    </div>

    </div>
  )
}

export default A1StackinSTL;
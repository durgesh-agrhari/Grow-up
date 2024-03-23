import React from 'react'
import Leftsidebar from './leftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import '../../0Css/style.css'
import Subnav from '../Subnav/Subnav'
import Post6 from './editer1/Post6'

const F6RemoveSpace = () => {
  return (
    <div className='subb'>
    <Subnav/>
    <div className='home-container1'>
      <Leftsidebar/>
      <div className='home-container2'>
        <h3>6: Remove space in string</h3><br/>
        <p className='pp'>
        Given a string, remove all spaces from the string and return it. 
        </p>
        <Post6/>
      </div>
      <RightSidebar />
    </div>

    </div>
  )
}

export default F6RemoveSpace

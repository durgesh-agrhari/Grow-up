import React from 'react'
import Leftsidebar from './leftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import './abcontest.css'
import Subnav from './Subnav/Subnav'
// import Post2 from './editer1/Post2'

const Codeforses = () => {
  return (
    <div className='subb'>
    <Subnav/>
    <div className='home-container1'>
      <Leftsidebar/>
      <div className='home-container2'>
        <h3>Codeforses Contest sSolution Comming soon</h3><br/>
        <p className='pp'></p>Codeforses Contest sSolution Comming soon<br/>
        {/* <Post2/> */}

      </div>
      <RightSidebar />
    </div>

    </div>
  )
}

export default Codeforses

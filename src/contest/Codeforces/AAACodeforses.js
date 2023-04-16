import React from 'react'
import Leftsidebar from './leftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import './abcontest.css'
import Subnav from '../Subnav/Subnav'

const AAACodeforses = () => {
  return (
    <div className='subb'>
    <Subnav/>
    <div className='home-container1'>
      <Leftsidebar/>
      <div className='home-container2'>
        <h2 className='s'> <u> -: Codeforces Contest Solutions :- </u></h2>
        <h3>Codeforses Contest Solution Comming soon</h3><br/>
        <p className='pp'></p>Codeforses Contest sSolution Comming soon<br/>

      </div>
      <RightSidebar />
    </div>

    </div>
  )
}

export default AAACodeforses

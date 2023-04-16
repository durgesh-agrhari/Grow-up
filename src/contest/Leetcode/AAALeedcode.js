import React from 'react'
import Leftsidebar from './leftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import './abcontest.css'
import Subnav from '../Subnav/Subnav'

const AAALeedcode = () => {
  return (
    <div className='subb'>
    <Subnav/>
    <div className='home-container1'>
      <Leftsidebar/>
      <div className='home-container2'>
        <h2 className='s'> <u> -: Leedcode Contest Solutions :- </u></h2>
        <h3>LeetCode Solution </h3><br/>
        <p className='pp'>Comming soon </p>

      </div>
      <RightSidebar />
    </div>

    </div>
  )
}

export default AAALeedcode

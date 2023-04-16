import React from 'react'
import Leftsidebar from './leftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import './A_array.css'
import Subnav from '../Subnav/Subnav'

import { Helmet } from 'react-helmet-async'

const WebDevelopment = () => {
  return (
    <div className='subb'>
      <Helmet>
        <title>Web development import Questions</title>
        <meta name='description' content=' Making learning easier and more convenient for you. Data Structure. Data structures are the problem-solving pillars of coding.'/>

        <link rel='canonical' href='/string-basic-questions' />
      </Helmet>
     <Subnav/>
    <div className='home-container1'>
     
      <Leftsidebar />
      <div className='home-container2'>
      
        <h3>Web development import Questions </h3><br/>
        
        <p className='pp'>
          comming soon
        </p>

      </div>
      <RightSidebar />
    </div>
    </div>
  )
}

export default WebDevelopment
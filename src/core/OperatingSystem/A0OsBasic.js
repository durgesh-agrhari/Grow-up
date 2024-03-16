import React from 'react'
import Leftsidebar from './leftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import './A_array.css'
import Subnav from '../Subnav/Subnav'

import { Helmet } from 'react-helmet-async'
import Post1 from '../../core/OperatingSystem/editer1/Post1'

const A0OsBasic = () => {
  return (
    <div className='subb'>
      <Helmet>
        <title>Basic Operating System questions</title>
        <meta name='description' content=' Making learning easier and more convenient for you. Data Structure. Data structures are the problem-solving pillars of coding.'/>

        <link rel='canonical' href='/string-basic-questions' />
      </Helmet>
     <Subnav/>
    <div className='home-container1'>
     
      <Leftsidebar />
      <div className='home-container2'>
      
      <Post1/>
      </div>

      <RightSidebar />
    </div>
    </div>
  )
}

export default A0OsBasic

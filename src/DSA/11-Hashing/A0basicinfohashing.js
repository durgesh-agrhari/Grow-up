import React from 'react'
import Leftsidebar from './leftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import './A_array.css'
import Subnav from '../Subnav/Subnav'

import { Helmet } from 'react-helmet-async'

const A0basicinfohashing = () => {
  return (
    <div className='subb'>
      <Helmet>
        <title>Hashing Basic Questions</title>
        <meta name='description' content=' Making learning easier and more convenient for you. Data Structure. Data structures are the problem-solving pillars of coding.'/>

        <link rel='canonical' href='/string-basic-questions' />
      </Helmet>
     <Subnav/>
    <div className='home-container1'>
     
      <Leftsidebar />
      <div className='home-container2'>

        <h2 className='s'> <u> -: Hashing :- </u></h2>
      
        <h3>What is Hashing ? </h3><br/>
        
        <p className='pp'>An array is a collection of elements, typically of the same data type, stored in a contiguous block of memory, and identified by an index or a key. 
        </p><br/> <br/>

        <h3>Advantages of using arrays: </h3><br/>
        <p className='pp'>

        </p><br/><br/>

      </div>
      <RightSidebar />
    </div>
    </div>
  )
}

export default A0basicinfohashing

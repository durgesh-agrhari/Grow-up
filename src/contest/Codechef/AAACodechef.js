import React from 'react'
import Leftsidebar from './leftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import './abcontest.css'
import Subnav from '../Subnav/Subnav'


const AAACodechef = () => {
  return (
    <div className='subb'>
     <Subnav/>
    <div className='home-container1'>
     
      <Leftsidebar />
      <div className='home-container2'>
       
        <h2 className='s'> <u> -: Codechef Contest Solutions :- </u></h2>
        <h3>Codechef Solutions Information </h3><br/>
        
        <p className='pp'> CodeChef was created as a platform to help programmers make it big in the world of algorithms, computer programming, and programming contests. It hosts three featured contests every month (Long Challenge, CookOff, LunchTime & Starters) and gives away prizes and goodies to the winners as encouragement.
        </p>

      </div>
      <RightSidebar />
    </div>
    </div>
  )
}

export default AAACodechef

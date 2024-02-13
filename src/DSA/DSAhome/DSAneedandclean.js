import React from 'react'
import './abcontest.css'
import Subnav from '../Subnav/Subnav'
import RightSidebar from './RightSidebar/RightSidebar'
// import RightSidebar from '../../../DSA/1-Array/RightSidebar/RightSidebar'

import { useEffect } from 'react'
import ReactGA from "react-ga"; //14.8k (gzipped: 4.9k)


const DSAneedandclean = () => {

  useEffect(() => {
    window.scrollTo(0,0)
    ReactGA.pageview(window.location.pathname);
  },[]);

  // const foodDetails = (item) => {
  //   //intrection
  //   ReactGA.event({
  //     category: item.name,
  //     action: "test action",
  //     label: "test label",
  //     value: item.price,
  //   });
  // }

  return (
    <div className='subb'>
    <Subnav/>
    <div className='home-container1a'>
      <div className='home-container2a'>
        <h2 className='s'> <u> -: 👆Choose Topice Upside👆 :- </u></h2>
        <h2 className='s'> <u> -: DSA Need And Clean SDE Sheet :- </u></h2><br/><br/><br/>

        <h3>What is Growup DSA Need and clean SDE Sheet? </h3><br/>
        <p className='pp'> 
           SDE Sheet contains very handily crafted and picked top coding interview questions from different 
           topics of Data Structures & Algorithms. These questions are one of the most asked coding interview 
           questions in coding interviews of companies like Amazon, Microsoft, Media.net, Flipkart, etc, and 
           cover almost all of the concepts related to Data Structure & Algorithms.
        </p><br/><br/>

        <h3>Why trust the Growup SDE sheet? </h3><br/>
        <p className='pp'>
        
          This is sheet is prepared by Durgesh Agrhari, Who is SDE in L&T organization, also contribute himanshu 
          singh who is SDE1 in amazon. this sheet is basicaly for fresher student stong fundamental.
        </p><br/>

        <h3>Disclaimer: </h3><br/>
        <p className='pp'>
         Only start doing these problems if you feel you are comfortable with solving the basic problems of
         DSA. Once you are, you can start preparing for these problems, because these problems are solely 
         interview-basedhout a cheat day. 
        </p>
      </div>
      <RightSidebar/>
    </div>

    </div>
  )
}

export default DSAneedandclean

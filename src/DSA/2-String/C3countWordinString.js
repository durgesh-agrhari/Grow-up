import React from 'react'
import Leftsidebar from './leftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import '../../0Css/style.css'
import Subnav from '../Subnav/Subnav'


import Post3 from './editer1/Post3'

const C3countWordinString = () => {
  return (
    <div className='subb'>
    <Subnav/>
    <div className='home-container1'>
      <Leftsidebar/>
      <div className='home-container2'>
        <h3>3: How to Count Word in String</h3><br/>
        <p className='pp'>
        Given a string, count the number of words in it. The words are separated by the following characters: space (‘ ‘) or new line (‘\n’) or tab (‘\t’) or a combination of these.
        </p><br/>
        <Post3/>
      </div>
      <RightSidebar />
    </div>

    </div>
  )
}

export default C3countWordinString

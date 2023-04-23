import React from 'react'
import Leftsidebar from './leftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import './A_array.css'
import Subnav from '../Subnav/Subnav'
import Post2 from './editer1/Post2'

const B2lengthofString = () => {
  return (
    <div className='subb'>
    <Subnav/>
    <div className='home-container1'>
      <Leftsidebar/>
      <div className='home-container2'>
        <h3>2: How to find length of String in cpp</h3><br/>
        <p className='pp'>
        The string is a sequence of characters or an array of characters. The declaration and definition of the string using an array of chars are similar to the declaration and definition of an array of any other data type.
        </p>
        <Post2/>
      </div>
      <RightSidebar />
    </div>

    </div>
  )
}

export default B2lengthofString

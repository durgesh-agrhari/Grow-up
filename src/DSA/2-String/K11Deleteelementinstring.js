import React from 'react'
import Leftsidebar from './leftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import './A_array.css'
import Subnav from '../Subnav/Subnav'

import Post11 from './editer1/Post11'

const K11Deleteelementinstring = () => {
  return (
    <div className='subb'>
    <Subnav/>
    <div className='home-container1'>
      <Leftsidebar/>
      <div className='home-container2'>
        <h3>11: Delete element in string</h3><br/>
        <p className='pp'>
        The function erases a part of the string content, shortening the length of the string. The characters affected depend on the member function version used: 
        Return value : erase() returns *this. <br/><br/>

        Time Complexity : O(n) , n=length of string<br/><br/>

        Auxiliary Space: O(1) for all approaches<br/>
        </p><br/>
        <p className='ppp'>
        Syntax 1: Erases all characters in a string
        string& string ::erase ()
        </p>
        <Post11/>
      </div>
      <RightSidebar />
    </div>

    </div>
  )
}

export default K11Deleteelementinstring

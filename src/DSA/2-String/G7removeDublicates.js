import React from 'react'
import Leftsidebar from './leftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import './A_array.css'
import Subnav from '../Subnav/Subnav'
import Post7 from './editer1/Post7'

const G7removeDublicates = () => {
  return (
    <div className='subb'>
    <Subnav/>
    <div className='home-container1'>
      <Leftsidebar/>
      <div className='home-container2'>
        <h3>7: How to remove dublicates element in string.</h3><br/>
        <p className='pp'>
        To remove duplicates from a string in C++ without using find function, you can use the following approach:<br/><br/>

        1: Create an empty string to store the result.<br/>
        2: Traverse the original string character by character.<br/>
        3: For each character, check if it has already occurred before in the result string.<br/>
        4: If the character has not occurred before, append it to the result string and mark it as occurred.<br/>
        5: Return the result string.<br/><br/>
        Here's the code that implements this approach:<br/><br/>
        </p>
        
        <Post7/>
  
      </div>
      <RightSidebar />
    </div>

    </div>
  )
}

export default G7removeDublicates

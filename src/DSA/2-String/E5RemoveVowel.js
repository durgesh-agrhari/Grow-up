import React from 'react'
import Leftsidebar from './leftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import './A_array.css'
import Subnav from '../Subnav/Subnav'
import Post5 from './editer1/Post5'

const E5RemoveVowel = () => {
  return (
    <div className='subb'>
    <Subnav/>
    <div className='home-container1'>
      <Leftsidebar/>
      <div className='home-container2'>
        <h3>5: How to remove vowel in string</h3><br/>
        <p className='pp'>
        To remove vowels from a string in C++, you can iterate through the characters of the string and remove the vowels using the erase() function. Here is an example code:
        </p><br/>

        <Post5/>
      </div>
      <RightSidebar />
    </div>

    </div>
  )
}

export default E5RemoveVowel

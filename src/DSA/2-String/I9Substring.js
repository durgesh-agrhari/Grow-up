import React from 'react'
import Leftsidebar from './leftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import './A_array.css'
import Subnav from '../Subnav/Subnav'
import Post9 from './editer1/Post9'

const I9Substring = () => {
  return (
    <div className='subb'>
    <Subnav/>
    <div className='home-container1'>
      <Leftsidebar/>
      <div className='home-container2'>
        <h3>9: Find Substring in string in C++</h3><br/>
        <p className='pp'>
        The substring function is used for handling string operations like strcat(), append(), etc. It generates a new string with its value initialized to a copy of a sub-string of this object. In C++, the header file which is required for  std::substr(), string functions is ‘string.h’. <br/><br/>
        
        The substring function takes two values pos and len as an argument and returns a newly constructed string object with its value initialized to a copy of a sub-string of this object. Copying of string starts from pos and is done till pos+len means [pos, pos+len).<br/><br/>

        Syntax: <br/><br/>
          </p>
          <p className='ppp'> string substr (size_t pos, size_t len) const;</p>
        <Post9/>

      </div>
      <RightSidebar />
    </div>

    </div>
  )
}

export default I9Substring

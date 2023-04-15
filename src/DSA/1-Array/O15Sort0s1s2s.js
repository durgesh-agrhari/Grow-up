import React from 'react'
import Leftsidebar from './leftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import './A_array.css'
import Subnav from '../Subnav/Subnav'
import Post15 from './editer1/Post15'

const O15Sort0s1s2s = () => {
  return (
    <div className='subb'>
    <Subnav/>
    <div className='home-container1'>
      <Leftsidebar/>
      <div className='home-container2'>
        <h3>15: Sort 0s 1s 2s in an Array</h3><br/>
        <p>Given an array A[] consisting of only 0s, 1s, and 2s. The task is to write a function that sorts the given array. The functions should put all 0s first, then all 1s and all 2s in last.<br/><br/>

        This problem is also the same as the famous “Dutch National Flag problem”. The problem was proposed by Edsger Dijkstra. The problem is as follows:</p><br/>

        <Post15/>
      </div>
      <RightSidebar />
    </div>

    </div>
  )
}

export default O15Sort0s1s2s

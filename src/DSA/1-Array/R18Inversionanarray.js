import React from 'react'
import Leftsidebar from './leftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import '../../0Css/style.css'
import Subnav from '../Subnav/Subnav'
import Post18 from './editer1/Post18'

const R18Inversionanarray = () => {
  return (
    <div className='subb'>
    <Subnav/>
    <div className='home-container1'>
      <Leftsidebar/>
      <div className='home-container2'>
        <h3>18: Inversionan Array</h3><br/>
        <p>
        Inversion Count for an array indicates – how far (or close) the array is from being sorted. If the array is already sorted, then the inversion count is 0, but if the array is sorted in reverse order, the inversion count is the maximum. <br/><br/>

        Given an array a[]. The task is to find the inversion count of a[]. Where two elements a[i] and a[j] form an inversion if a[i] less then a[j] and i greater then j.
        </p><br/>
        
       <Post18/>
      </div>
      <RightSidebar />
    </div>

    </div>
  )
}

export default R18Inversionanarray

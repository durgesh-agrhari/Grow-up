import React from 'react'
import Leftsidebar from './leftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import './A_array.css'
import Subnav from '../Subnav/Subnav'
import Post1 from './editer1/Post1'

import { useState } from 'react'


const A1ReverseArray = () => {

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index)
  }
  return (
    <div className='subb'>
      <Subnav />
      <div className='home-container1'>
        <Leftsidebar />
        <div className='home-container2'>
          <h3>1: How to reverse array element in cpp</h3><br />
          <p className='pp'>To reverse an array in C++, you can use a simple algorithm that involves swapping the first and last elements of the array, the second and second-to-last elements, and so on, until the middle of the array is reached. Here's an example of how to implement this algorithm: </p><br />

          <h3>Iterative way :</h3><br />

          <p className='pp'>
            1: Initialize start and end indexes as start = 0, end = n-1 <br />
            2: In a loop, swap arr[start] with arr[end] and change start and end as follows :
            start = start +1, end = end – 1<br />

            a = start, b = end (Blow).
          </p><br />

          <h3>Examples : </h3><br />
          <p className='pp'>
            Input  : arr[ ] = 1, 2, 3.<br />
            Output : arr[ ] = 3, 2, 1.<br /><br />

            Input :  arr[ ] = 4, 5, 1, 2.<br />
            Output : arr[ ] = 2, 1, 5, 4. <br /><br />
          </p>

          <div className='container-tab'>

            <div className='block-tabs'>

              <div className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(1)}
              >Tab 1</div>

              <div className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(2)}
              >Tab 2</div>

              <div className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(3)}
              >Tab 3</div>

            </div>

            <div className='content-tabs'>
              <div className={toggleState === 1 ? "content active-content" : "content"}>
                <h3>Content 1</h3>
                <hr />
                <p>Array reverse or reverse a array means changing the position of each number.</p>
                <Post1 />
              </div>

              <div className={toggleState === 2 ? "content active-content" : "content"}>
                <h3>Content 2</h3>
                <hr />
                <p>Array reverse or reverse a array means changing the position of each number.</p>
                <Post1 />
              </div>

              <div className={toggleState === 3 ? "content active-content" : "content"}>
                <h3>Content 3</h3>
                <hr />
                <p>Array reverse or reverse a array means changing the position of each number.</p>
              </div>

            </div>


          </div>

          

        </div>
        <RightSidebar />
      </div>



    </div>
  )
}

export default A1ReverseArray

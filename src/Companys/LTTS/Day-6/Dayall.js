import React from 'react'
import './abcontest.css'
import Subnav from '../Subnav/Subnav'
import RightSidebar from '../../../DSA/1-Array/RightSidebar/RightSidebar'

const Dayall = () => {
  return (
    <div className='subb'>
    <Subnav/>
    <div className='home-container1'>
      <div className='home-container2'>
        <h2 className='s'> <u> -: LTTS Day-6 :- </u></h2><br/>
        
        <h3>Day 6 :-  Task L1 and L2 Activities :: Array of Structures</h3><br/>
        <h3> Level-1:</h3><br/>
        <p className='pp'>
          1. Assume User will be providing input in the form of a string as show below. 
          Write a function to parse the string and initialize an array of structures. <br/><br/>

          Example String : "1001 Aron 100.00" <br/>
          Example Structure : <br/>
              struct Student[<br/>
                  int rollno;<br/>
                  char name[20];<br/>
                  float marks;<br/>
              ];<br/><br/>

          Note: User must be able define the no. of inputs/size of the array during runtime.<br/><br/>

          2. Write a function to initialize all members in the above array of structures<br/><br/>

          3. Write a function to display all members in the above array of structures<br/><br/>

          4. Write a function to sort the array of structures in descending order based on marks <br/><br/>

          5. Write a function to perform a search operation on the array of structures based on name of the student<br/><br/>

          </p><br/><br/>

        <h3> Level-2:</h3><br/>
        <p className='pp'>
          1. Write a function to add a member at the end of the above array of structures
          Note : Code must use Dynamic Memory concept<br/><br/>

          2. Write a function to delete a member at the start of the above array of structures
          Note : Code must use Dynamic Memory concept<br/><br/>

          3. Write a function to swap 2 members in different indexes (based on user input) in the above array of structures<br/><br/>

          4. Write a function to rotate the above array of structures by K positions<br/><br/>
        </p>

      </div>
      <RightSidebar/>
    </div>

    </div>
  )
}

export default Dayall

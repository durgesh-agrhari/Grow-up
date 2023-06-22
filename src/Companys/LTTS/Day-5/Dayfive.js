import React from 'react'
import './abcontest.css'
import Subnav from '../Subnav/Subnav'
import RightSidebar from '../../../DSA/1-Array/RightSidebar/RightSidebar'

const Dayfive = () => {
  return (
    <div className='subb'>
    <Subnav/>
    <div className='home-container1'>
      <div className='home-container2'>
        <h2 className='s'> <u> -: LTTS Day-5 :-  </u></h2> <br/>
        <h3>Day -5 task  L1 and L2 Activities :: Structures</h3><br/>

        <h3>L1 Activities:</h3><br/>
        <p className='pp'>

        1. Use structures to find the volume and the total surface area of the box. 
          You need to access the members of the structure with the help of a structure pointer:
            a. With the help of (*) asterisk or indirection operator and (.) dot operator.
            b. With the help of ( -> ) Arrow operator using pointer as well as dot representation.<br/><br/>

        2. Write a C program that uses functions to perform the following operations: <br/>
            i) Reading a complex number <br/>
            ii) Writing a complex number <br/>
            iii) Addition of two complex numbers <br/>
            iv) Multiplication of two complex numbers <br/>
          (Note: represent complex number using a structure.<br/><br/>

        3. Write a program using structures to calculate the difference between two time periods using a user-defined function.<br/><br/>

        4. write a program to Store Data for n students in Structures Dynamically. <br/><br/>

        5. Write a program to demonstrate the swapping the fields of two structures using pointers<br/><br/>
        </p>

        <h3>L2 Activities:</h3><br/>
        <p className='pp'>

          1. Data Parser:<br/><br/>
            A data logger transmits the data in ascii format as shown below<br/>
            "S1-T:36.5-H:100-L:50"<br/>
            Write a function to populate all the data in an array of structure. The output should be like<br/>
            Sensor Info:<br/>
            ---------------------<br/>
            Sensor ID: S1<br/>
            Temperature: 36.5 C<br/>
            Humidity: 100<br/>
            Light Intensity: 50%<br/>
            ---------------------<br/><br/>

          2. Write a program to enter to Cartesian coordinate points and display the distance between them.<br/><br/>

          3. Implement structures to read, write and compute average- marks and the students scoring above
            and below the average marks for a class of N students.<br/><br/>

          4. Write a program to pass a pointer to a structure as a parameter to a function and return back a pointer to structure 
            to the calling function after modifying the members of structure.<br/><br/>
          </p>

      </div>
      <RightSidebar/>
    </div>

    </div>
  )
}

export default Dayfive

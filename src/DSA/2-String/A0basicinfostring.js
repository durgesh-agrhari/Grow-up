import React from 'react'
import Leftsidebar from './leftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import './A_array.css'
import Subnav from '../Subnav/Subnav'

import Post0 from './editer1/Post0'

import { Helmet } from 'react-helmet-async'

const A0basicinfostring = () => {
  return (
    <div className='subb'>
      <Helmet>
        <title>String Basic Questions</title>
        <meta name='description' content=' Making learning easier and more convenient for you. Data Structure. Data structures are the problem-solving pillars of coding.'/>

        <link rel='canonical' href='/string-basic-questions' />
      </Helmet>
     <Subnav/>
    <div className='home-container1'>
     
      <Leftsidebar />
      <div className='home-container2'>

        <h2 className='s'> <u> -: String :- </u></h2>
      
        <h3>What is string ? </h3><br/>
        
        <p className='pp'>
        Strings are used for storing text.<br/> <br/>

        A string variable contains a collection of characters surrounded by double quotes:
        </p><br/> <br/>

        <h3>1 Example</h3>
        <p className='ppp'>Create a variable of type string and assign it a value:<br/> <br/>
        string greeting = "Hello";
        </p>

        <h3>2 Example</h3>
        <p className='ppp'>
        Include the string library<br/>
        #include string<br/> <br/>

        Create a string variable<br/>
        string greeting = "Hello";<br/>
        </p>
        <h3>Note *</h3>
        <p className='nn'>
          Note* String is one of the most import topic for interview and test. Please read it carefully.
        </p><br/>

        <h3>Applications of String</h3><br/>
        <p className='pp'>
        * Sorting and searching data: Arrays can be sorted and searched efficiently using algorithms like bubble sort, quicksort, and binary search.
        <br/><br/>

        1 Plagiarism Checker<br/>
        2 Encoding/Decoding(Cipher Text Generation)<br/>
        3 Improved Filters For The Approximate Suffix-Prefix Overlap Problem<br/>
        4 Information Retrieval<br/>
        5 Network communication<br/>

        </p><br/><br/>

        <h3>Advantages of using arrays: </h3><br/>
        <p className='pp'>
        1 Text Processing <br/>
        2 Data Representation<br/>
        3 Ease of Use<br/>
        4 Compatibility<br/>
        5 Memory Efficiency<br/>
        </p><br/><br/>

        <h3>Disadvantages of using arrays: </h3> <br/>
        <p className='pp'>
          1 Memory Consumption<br/>
          2 Immutability<br/>
          3 Performance Overhead<br/>
          4 Encoding and Decoding Overhead<br/>  
          5 Security Vulnerabilities<br/>
        </p><br/><br/>

        <h3>1. The String keyword to Create String Array in C++</h3><br/>
        <p className='pp'>
        C++ provides us with ‘string’ keyword to declare and manipulate data in a String array.<br/><br/>

        The string keyword allocates memory to the elements of the array at dynamic or run-time accordingly. Thus it saves the headache of static memory allocation of data-elements.<br/><br/>

        Syntax: To declare an array of string using ‘string’ keyword<br/><br/>
        </p>
        <Post0/>
      </div>
      <RightSidebar />
    </div>
    </div>
  )
}

export default A0basicinfostring

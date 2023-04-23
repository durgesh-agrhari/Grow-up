import React from 'react'
import Leftsidebar from './leftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import './A_array.css'
import Subnav from '../Subnav/Subnav'

import { Helmet } from 'react-helmet-async'

const A0basicinfoSorting = () => {
  return (
    <div className='subb'>
      <Helmet>
        <title>Sorting Basic Questions</title>
        <meta name='description' content=' Making learning easier and more convenient for you. Data Structure. Data structures are the problem-solving pillars of coding.'/>

        <link rel='canonical' href='/string-basic-questions' />
      </Helmet>
     <Subnav/>
    <div className='home-container1'>
     
      <Leftsidebar />
      <div className='home-container2'>

        <h2 className='s'> <u> -: Sorting :- </u></h2>
      
        <h3>What is Sorting ?</h3><br/>
        
        <p className='pp'>
        Sorting refers to ordering data in an increasing or decreasing fashion according to some linear relationship among the data items.
        </p><br/> <br/>

        <h3>Applications on Array</h3><br/>
        <p className='pp'>
        1: Storing and accessing data: Arrays are commonly used to store and access collections of data such as lists of numbers or strings.
        <br/><br/>

        2: Sorting and searching data: Arrays can be sorted and searched efficiently using algorithms like bubble sort, quicksort, and binary search.
        <br/><br/>

        3: Implementing data structures: Many common data structures such as stacks, queues, and heaps can be implemented using arrays.
        <br/><br/>

        4: Image processing: Images can be represented as arrays of pixel values and processed using operations such as filtering, resizing, and cropping.
        <br/><br/>

        5: Scientific computing: Arrays are used extensively in scientific computing for representing and manipulating multidimensional data such as matrices, tensors, and grids.
        </p><br/><br/>

        <h3>Advantages of using arrays: </h3><br/>
        <p className='pp'>
        1: Arrays allow random access to elements. This makes accessing elements by position faster.<br/><br/>
        2: Arrays have better cache locality which makes a pretty big difference in performance.<br/><br/>
        3: Arrays represent multiple data items of the same type using a single name.
        </p><br/><br/>

        <h3>Disadvantages of using arrays: </h3> <br/>
        <p className='pp'>You can’t change the size i.e. once you have declared the array you can’t change its size because of static memory allocation. Here Insertion(s) and deletion(s) are difficult as the elements are stored in consecutive memory locations and the shifting operation is costly too.</p><br/><br/>

      </div>
      <RightSidebar />
    </div>
    </div>
  )
}

export default A0basicinfoSorting

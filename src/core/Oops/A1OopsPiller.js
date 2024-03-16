import React from 'react'
import Leftsidebar from './leftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import './A_array.css'
import Subnav from '../Subnav/Subnav'

import { Helmet } from 'react-helmet-async'

const A1OopsPiller = () => {
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
      
        <h3>What is string ? </h3><br/>
        
        <p className='pp'>An array is a collection of elements, typically of the same data type, stored in a contiguous block of memory, and identified by an index or a key. In programming, arrays are used to store and manipulate a large number of data items efficiently.
          <br/><br/>
          An array is a collection of items of same data type stored at contiguous memory locations. 
          <br/><br/>
          Is the array always of a fixed size.
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

export default A1OopsPiller
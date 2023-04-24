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
        </p><br/>

        <h4>Example: </h4>
        <p className='ppp'>
          Input  : 2, 1, 3, 5, 4<br/>
          Output : 1, 2, 3, 4, 5<br/>
        </p><br/>

        <h3>Sorting Algorithms:</h3><br/>

        <table>
          <tr>
            <th>Sorting Algorithms</th>
            <th>Best Case</th>
            <th>Average Case</th>
            <th>Worst Case</th>
            <th>Stable</th>
          </tr>
          <tr className='sort'>
            <td>Selection Sort</td>
            <td>n^2</td>
            <td>n^2</td>
            <td>n^2</td>
            <td>No</td>
          </tr>
          <tr className='sort'>
            <td>Bubble Sort</td>
            <td>n</td>
            <td>n^2</td>
            <td>n^2</td>
            <td>Yes</td>
          </tr>
          <tr className='sort'>
            <td>Insertion Sort</td>
            <td>n</td>
            <td>n^2</td>
            <td>n^2</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Merge Sort</td>
            <td>nlogn</td>
            <td>nlogn</td>
            <td>nlogn</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Quick Sort</td>
            <td>nlogn</td>
            <td>nlogn</td>
            <td>n^2</td>
            <td>No</td>
          </tr>
          <tr>
            <td>Heap Sort</td>
            <td>nlogn</td>
            <td>nlogn</td>
            <td>nlogn</td>
            <td>No</td>
          </tr>
          
        </table>

        <h3>Applications of sorting</h3><br/>
        <p className='pp'>
        Sorting algorithms and priority queues are widely used in a broad variety of applications. Our purpose in this section is to briefly survey some of these applications.<br/><br/>

        ** Sorting various types of data. Our implementations sort arrays of Comparable objects. This Java convention allows us to use Java's callback mechanism to sort arrays of objects of any type that implements the Comparable interface.<br/><br/>

        1: Transaction example. Program Transaction.java implements the Comparable interface for a transaction data type based on when the transaction occurred.<br/><br/>

        2: Pointer sorting. The approach we are using is known in the classical literature as pointer sorting, so called because we process references to keys and do not move the data itself.<br/><br/>

        3: Keys are immutable. It stands to reason that an array might not remain sorted if a client is allowed to change the values of keys after the sort. In Java, it is wise to ensure that key values do not change by using immutable keys.
        </p><br/><br/>


      </div>
      <RightSidebar />
    </div>
    </div>
  )
}

export default A0basicinfoSorting

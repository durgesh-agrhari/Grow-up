import React from 'react'
import Leftsidebar from './leftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import './A_array.css'
import Subnav from '../Subnav/Subnav'

import { Helmet } from 'react-helmet-async'

const A0basicinfoSearching = () => {
  return (
    <div className='subb'>
      <Helmet>
        <title>Searching Basic Questions</title>
        <meta name='description' content=' Making learning easier and more convenient for you. Data Structure. Data structures are the problem-solving pillars of coding.'/>

        <link rel='canonical' href='/string-basic-questions' />
      </Helmet>
     <Subnav/>
    <div className='home-container1'>
     
      <Leftsidebar />
      <div className='home-container2'>

        <h2 className='s'> <u> -: Searching :- </u></h2>
      
        <h3>What is Searching ? </h3><br/>
        <p className='pp'>
        Searching Algorithms are designed to check for an element or retrieve an element from any data structure where it is stored.
        </p><br/>
        
        <h3>Searching Algorithm</h3><br/>
        <p className='pp'>
        Now we have learned about some linear data structures and is time to learn about some basic and most used algorithms which are hugely used in these types of data structures. One such algorithm is the searching algorithm. <br/><br/>

        Searching algorithms are used to find a specific element in an array, string, linked list, or some other data structure. <br/><br/>

        The most common searching algorithms are:<br/>
        </p><br/>


        <p className='ppp'>
        1: Linear Search – In this searching algorithm, we check for the element iteratively from one end to the other.
        </p>

        <p className='ppp'>
        2: Binary Search – In this type of searching algorithm, we break the data structure into two equal parts and try to decide in which half we need to find for the element.
        </p>
        <p className='ppp'>
        3: Ternary Search – In this case, the array is divided into three parts, and based on the values at partitioning positions we decide the segment where we need to find the required element.
        </p><br/>
        
        <p className='pp'>
        Besides these, there are other searching algorithms also like <br/><br/>

        1: Jump Search<br/>
        2: Interpolation Search <br/>
        4: Exponential Search <br/>
        </p><br/>

        <h3>Complexity of Searching</h3><br/>

        <table>
          <tr>
            <th>Searching</th>
            <th>Complexity</th>
          </tr>
          <tr >
            <td>Linear Search</td>
            <td>n</td>
          </tr>
          <tr>
            <td>Binary Search</td>
            <td>n / 2</td>
          </tr>          
        </table>

        <h3>Application of Searching</h3><br/>
        <p className='pp'>
        Applications of search algorithms<br/>
        Specific applications of search algorithms include:<br/><br/>

        * Problems in combinatorial optimization, such as:<br/><br/>
        1: The vehicle routing problem, a form of shortest path problem<br/>
        2: The knapsack problem: Given a set of items, each with a weight and a value, determine the number of each item to include in a collection so that the total weight is less than or equal to a given limit and the total value is as large as possible.<br/>
        3: The nurse scheduling problem<br/><br/>

        * Problems in constraint satisfaction, such as:<br/>
        1: The map coloring problem<br/>
        2: Filling in a sudoku or crossword puzzle<br/><br/>

        * In game theory and especially combinatorial game theory, choosing the best move to make next (such as with the minmax algorithm)<br/>
        * Finding a combination or password from the whole set of possibilities<br/>
        * Factoring an integer (an important problem in cryptography)<br/>
        </p><br/>

      </div>
      <RightSidebar />
    </div>
    </div>
  )
}

export default A0basicinfoSearching

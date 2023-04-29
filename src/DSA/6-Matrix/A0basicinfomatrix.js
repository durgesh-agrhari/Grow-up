import React from 'react'
import Leftsidebar from './leftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import './A_array.css'
import Subnav from '../Subnav/Subnav'
import { Helmet } from 'react-helmet-async'

const A0basicinfomatrix = () => {
  return (
    <div className='subb'>
      <Helmet>
        <title>Matrix Basic Questions</title>
        <meta name='description' content=' Making learning easier and more convenient for you. Data Structure. Data structures are the problem-solving pillars of coding.'/>

        <link rel='canonical' href='/string-basic-questions' />
      </Helmet>
     <Subnav/>
    <div className='home-container1'>
     
      <Leftsidebar />
      <div className='home-container2'>

        <h2 className='s'> <u> -: Matrix :- </u></h2>
      
        <h3>What is Matrix ? </h3><br/>
        
        <p className='pp'>
        matrix, a set of numbers arranged in rows and columns so as to form a rectangular array. The numbers are called the elements, or entries, of the matrix. Matrices have wide applications in engineering, physics, economics, and statistics as well as in various branches of mathematics.  
        </p><br/> <br/>

        <h3>Advantages of matrix: </h3><br/>
        <p className='pp'>
          * It is improve your logic and knowledge.
        </p><br/><br/>
        <h3>Basic question of matrix</h3><br/>
        <p>
          1: Input and Output in matrix<br/>
          2: Add two matrix<br/>
          3: Searching in 2D matrix<br/>
          4: Replace element in matrix<br/>
          5: Compare of two matrix<br/>
          6: Paskal Triangle in matrix<br/>
          7: Rotate 90 degree matrix <br/>
          8: Set matrix zero<br/><br/>
        </p>

      </div>
      <RightSidebar />
    </div>
    </div>
  )
}

export default A0basicinfomatrix

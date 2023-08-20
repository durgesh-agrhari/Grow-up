import React from 'react'
import Leftsidebar from './leftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
//import './A_array.css'
import '../Style.css'
import Subnav from '../Subnav/Subnav'

import { Helmet } from 'react-helmet-async'

const Javascript = () => {
  return (
    <div className='subb'>
      <Helmet>
        <title>Javascript import Questions</title>
        <meta name='description' content=' Making learning easier and more convenient for you. Data Structure. Data structures are the problem-solving pillars of coding.'/>

        <link rel='canonical' href='/string-basic-questions' />
      </Helmet>
     <Subnav/>
    <div className='home-container1'>
     
      <Leftsidebar />
      <div className='home-container2'>
      
        <h3>JavaScript import Questions </h3><br/>
        
        <h3>What is javaScript</h3><br/>
        <p className='pp'>
        JavaScript is a client-side programming language used to create dynamic interactions in app, game and web development. Commonly represented as JS, this language is considered one of the core technologies of the web in conjunction with HTML and CSS. 
        </p><br/><br/>

        <h3>About javaScript imp points</h3><br/>
        <p className='pp'>
         1. javaScript is used bothe client side and serverside.<br/>

         2. JavaScript which is often known as JS, is a high-level dynamic interpreted programming language.<br/>

         3. It allows client-side scripting to create completely dynamic web applications and websites <br/>

         4. JavaScript was initially designed for making pages "alive"<br/>

         5.Scripts can be executed in the browser itself.<br/>

         6.  JavaScript and Java are different programming languages<br/>

         7.  It can be executed on the browser as well as the server<br/>

         8.  JavaScript is a safe language when used in browser<br/>

         9.  There are languages that get "transpiled" to JavaScript<br/>
        </p>

      </div>
      <RightSidebar />
    </div>
    </div>
  )
}

export default Javascript


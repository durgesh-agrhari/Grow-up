import React from 'react'
import './abcontest.css'
import Subnav from '../Subnav/Subnav'
import RightSidebar from '../../../DSA/1-Array/RightSidebar/RightSidebar'

const Dayseven = () => {
  return (
    <div className='subb'>
    <Subnav/>
    <div className='home-container1a'>
      <div className='home-container2a'>
        <h2 className='s'> <u> -: LTTS Day-7 :- </u></h2><br/>

        <h3>L1 and L2 Activities :: File Handling</h3><br/><br/>

        <h3>Level-1 :</h3><br/>

        <p className='pp'>
        
        1. File Copy: Write a C program to copy a file using file operations <br/><br/>

        2. Case Handler:<br/>
        Write a C program to copy a file by considering the user option to handle the text case<br/>
        -u, to change file content to Upper Case<br/>
        -l, to change file content to Lower Case<br/>
        -s, to change file content to Sentence Case<br/>
        if no options are passed then it should be a normal copy<br/><br/>

        Example, say we have a file f1 with the following content<br/>
        f1:<br/>
        -----------------------<br/>
        This is the file data<br/>
        testing Case copy<br/>
        application<br/>
        -----------------------<br/>

        ./cp -s f1 f2<br/>
        f2:<br/>
        -----------------------<br/>
        This Is The Tile Data<br/>
        Testing Case Copy<br/>
        Application<br/>
        -----------------------<br/>

        ./cp -l f1 f3<br/>
        f3:<br/>
        -----------------------<br/>
        this is the tile data<br/>
        testing case copy<br/>
        application<br/>
        -----------------------<br/>

        ./cp -u f1 f4<br/>
        f4:<br/>
        -----------------------<br/>
        THIS IS THE FILE DATA<br/>
        TESTING CASE COPY<br/>
        APPLICATION<br/>
        -----------------------<br/>

        ./cp f1 f5<br/><br/>
        Should perform a normal copy<br/><br/>

        

        3. Data Viewer:<br/><br/>
        Write an application to view the log stored in data.csv<br/>
        Example, say you have the following data in data.csv<br/>

        ------------------------------------<br/><br/>

        EntryNo,sensorNo,Temperature,Humidity,Light,<br/>

        1,S1,36.5,100,50,10:30:50<br/>
        2,S3,30,100,50,10:30:55<br/>
        3,S2,-6.6,100,10,10:31:00<br/>
        ------------------------------------<br/><br/>

        a. Write a function to extract each line in the .csv file and store it in an array of structures. <br/><br/>

        b. Also implement functions to display the contents of the array of structures.<br/><br/>
        
        </p><br/><br/>

        <h3>Level-2 :</h3><br/>

          <p className='pp'>
          1. Sort the above "data.csv" based on the "Temperature" field in descending order <br/>

          a. Use only file handling concepts<br/>

          b. Use array of structures and file handling<br/><br/>

          

          2. Update an entry in the data.csv based on the "EntryNo" field<br/><br/>

          a. Use only file handling concepts<br/>

          b. Use array of structures and file handling<br/><br/>

          

          3. Delete an entry in the file data.csv file  on the "EntryNo" field<br/><br/>

          a. Use only file handling concepts<br/>

          b. Use array of structures and file handling<br/><br/>

          </p>
      </div>
      <RightSidebar/>
    </div>

    </div>
  )
}

export default Dayseven

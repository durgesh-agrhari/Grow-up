import React from 'react'
import Leftsidebar from './leftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import './A_array.css'
import Subnav from '../Subnav/Subnav'
// import Post1 from './editer1/Post1'


const A0Oops = () => {
  return (
    <div className='subb'>
    <Subnav/>
    <div className='home-container1'>
      <Leftsidebar/>
      <div className='home-container2'>
        <h3>1: What is OOPs Concept? </h3><br/>

        <p className='pp'> Object-oriented programming is a core of Java Programming,
         which is used for designing a program using classes and objects. OOPs, can also
          be characterized as data controlling for accessing the code.  </p><br/>

        <h3>1.1: What is OOPs in java?</h3><br/>

<p className='pp'> OOPs stands for Object-Oriented Programming. It is a programming 
paradigm that is used in Java and many other programming languages. In OOP, the core 
concept is to model software as a collection of objects that represent real-world 
entities or concepts. These objects have attributes (data) and methods (functions)
 that operate on the data. Java is a prominent language that follows the principles 
 of OOP. </p><br/>

<h3>There are four main principles of Object-Oriented Programming in Java:</h3><br/>

<ol>
  <li> **Encapsulation:** This principle is about bundling data (attributes) and the methods (functions) that operate on that data into a single unit known as a class. This class serves as a blueprint for creating objects. Encapsulation helps in hiding the internal details of the object and providing a controlled interface to interact with it.</li>
  <br/>
  <li> **Inheritance:** Inheritance allows you to create a new class that is a modified version of an existing class. The new class inherits the attributes and methods of the existing class, which promotes code reusability and establishes a relationship between classes.</li>
  <br/>
  <li> **Polymorphism:** Polymorphism means "many shapes" and allows objects of different classes to be treated as objects of a common super-class. It enables you to write more generic code that can work with different types of objects. This is often achieved through method overriding and interfaces in Java.</li>
  <br/>
  <li> **Abstraction:** Abstraction involves simplifying complex reality by modeling classes based on the essential attributes and behaviors. It helps in managing the complexity of large software systems by focusing on the most important aspects of the objects.</li>
</ol> <br/>

<h4>
In Java, classes and objects are used to implement these OOP principles. A class is a blueprint that defines the structure and behavior of objects, and objects are instances of classes. By using OOP, you can create modular, maintainable, and reusable code, which is essential for developing large and complex software applications. </h4>
<p className='pp'> Commin Soon </p><br/>
      

      </div>
      <RightSidebar />
    </div>

    </div>
  )
}

export default A0Oops

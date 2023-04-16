import React from 'react'
import './scroller.css'

const Scroller = () => {
  return (
    <div>
      <nav className='sidebar'>
        <header>
            <h2>Growup Code</h2>
        </header>

        <div className='scrollbox'>
            <div className='scrollbox-inner'>
                <p>Applications on Array
                5: Scientific computing: Arrays are used extensively in scientific computing for representing and manipulating multidimensional data such as matrices, tensors, and grids
                Advantages of using arrays:
                1: Arrays allow random access to elements. This makes accessing elements by position faster.
                2: Arrays have better cache locality which makes a pretty big difference in performance.
                3: Arrays represent multiple data items of the same type using a single name.
                Disadvantages of using arrays:
                You can’t change the size i.e. once you have declared the array you can’t change its size because of static memory allocation. Here Insertion(s) and deletion(s) are difficult as the elements are stored in consecutive memory locations and the shifting operation is costly too.
                1: Arrays allow random access to elements. This makes accessing elements by position faster.
                2: Arrays have better cache locality which makes a pretty big difference in performance.
                3: Arrays represent multiple data items of the same type using a single name.
                Disadvantages of using arrays:
                You can’t change the size i.e. once you have declared the array you can’t change its size because of static memory allocation. Here Insertion(s) and deletion(s) are difficult as the elements are stored in consecutive memory locations and the shifting operation is costly too.
                </p>
            </div>
        </div>

        <footer>
          <h2>I am Footer</h2>
        </footer>

      </nav>
    </div>
  )
}

export default Scroller

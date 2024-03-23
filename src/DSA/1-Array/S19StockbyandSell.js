import React from 'react'
import Leftsidebar from './leftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import '../../0Css/style.css'
import Subnav from '../Subnav/Subnav'
import Post19 from './editer1/Post19'

const S19StockbyandSell = () => {
  return (
    <div className='subb'>
    <Subnav/>
    <div className='home-container1'>
      <Leftsidebar/>
      <div className='home-container2'>
        <h3>19: Stock by and Sell in an Array</h3><br/>
        <p>
        Stock Buy and Sell is a problem in computer science that involves finding the maximum profit that can be earned by buying and selling a stock at different prices. Given an array of stock prices for each day, the goal is to find the maximum profit that can be earned by buying and selling the stock once.
        </p><br/>
        
        <Post19/>
      </div>
      <RightSidebar />
    </div>

    </div>
  )
}

export default S19StockbyandSell

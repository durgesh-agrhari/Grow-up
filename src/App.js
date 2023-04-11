import './App.css';
import React, {useState, useEffect} from 'react'; //4.5k (gzipped: 2k)
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Homepage from './homepage/Homepage';
import DataStructure from './courses/dataStructure/dataStructure/DataStructure';
import BlogHome from './blog/blog/BlogHome'
import Rodemap from './blog/blog/Rodemap'
import Post from './editor/Post';
import EditHeader from './editor/EditHeader';
import ComingSoon from './ComingSoon/ComingSoon';


import A1basicinfo from './DSA/1-Array/A0basicinfo';
import A1ReverseArray from './DSA/1-Array/A1ReverseArray';
import B2Dublicateselement from './DSA/1-Array/B2Dublicateselement';
import C3frequency from './DSA/1-Array/C3frequency';
import D4Deletearraye from './DSA/1-Array/D4Deletearraye';
import E5Palendromearray from './DSA/1-Array/E5Palendromearray';
import F6LongestandSmallestele from './DSA/1-Array/F6LongestandSmallestele';
import G7Secondlargestandsmallestele from './DSA/1-Array/G7Secondlargestandsmallestele';
import H8Kadanesalgo from './DSA/1-Array/H8Kadanesalgo';
import I9Removedublicate from './DSA/1-Array/I9Removedublicate';
import J10Removesortedarraydublicate from './DSA/1-Array/J10Removesortedarraydublicate';
import K11MinandMaxelement from './DSA/1-Array/K11MinandMaxelement';
import L12Repeatandmissing from './DSA/1-Array/L12Repeatandmissing';
import M13Twosum from './DSA/1-Array/M13Twosum';
import N14MoveallZerotoBeginning from './DSA/1-Array/N14MoveallZerotoBeginning';
import O15Sort0s1s2s from './DSA/1-Array/O15Sort0s1s2s';
import P16KthLargestandsmallest from './DSA/1-Array/P16KthLargestandsmallest';
import Q17MergeTwoSortedArray from './DSA/1-Array/Q17MergeTwoSortedArray';
import R18Inversionanarray from './DSA/1-Array/R18Inversionanarray';
import S19StockbyandSell from './DSA/1-Array/S19StockbyandSell';
import T20TrappingrainWater from './DSA/1-Array/T20TrappingrainWater';
import U21Majorityelement from './DSA/1-Array/U21Majorityelement';
import A0basicinfostring from './DSA/2-String/A0basicinfostring';
import Codechef from './contest/Codechef';
import Codeforses from './contest/Codeforses';
import Leedcode from './contest/Leedcode';

import ReactGA from "react-ga"; // 14.8k (gzipped: 4.9k)

const TRACKING_ID = "UA-263179101-1"; //
ReactGA.initialize(TRACKING_ID);

function App() {

  const [theme, setTheme] = useState('')
  const toggleTheme = () => {
    theme === '' ? setTheme('light-theme') : setTheme('')
  }

  useEffect(() => {
    document.body.className = theme
  }, [theme])


  ///This is helpes to send page view to google analisis
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  },[])

  return (
    <>
     <Router>
      <Header theme={theme} toggleTheme={toggleTheme} /> 
        <Routes>
          <Route path='/' element = {<Homepage/> }/>
          <Route path='/dataStructure' element = {<DataStructure/> }/>
          <Route path='/explore' element = {<BlogHome /> }/>
          <Route path='/rodemap' element = {<Rodemap /> }/>

          {/* ========== Array Routing ============= */}
          <Route path='/array-basic-questions' element = {<A1basicinfo /> }/>
          <Route path='/reverseelementinanarray' element = {<A1ReverseArray /> }/>
          <Route path='/bublicateselement' element = {<B2Dublicateselement /> }/>
          <Route path='/frequencyinanarray' element = {<C3frequency /> }/>
          <Route path='/deletearrayeelement' element = {<D4Deletearraye /> }/>
          <Route path='/palendromearray' element = {<E5Palendromearray /> }/>
          <Route path='/longestandSmallestele' element = {<F6LongestandSmallestele /> }/>
          <Route path='/secondlargestandsmallestele' element = {<G7Secondlargestandsmallestele /> }/>
          <Route path='/kadanesalgo' element = {<H8Kadanesalgo/> }/>
          <Route path='/removedublicate' element = {<I9Removedublicate/> }/>
          <Route path='/removesortedarraydublicate' element = {<J10Removesortedarraydublicate/> }/>
          <Route path='/minandMaxelement' element = {<K11MinandMaxelement/> }/>
          <Route path='/repeatandmissing' element = {<L12Repeatandmissing/> }/>
          <Route path='/twosum' element = {<M13Twosum/> }/>
          <Route path='/moveallZerotoBeginning' element = {<N14MoveallZerotoBeginning/> }/>
          <Route path='/sort0s1s2s' element = {<O15Sort0s1s2s/> }/>
          <Route path='/kthLargestandsmallest' element = {<P16KthLargestandsmallest/> }/>
          <Route path='/mergeTwoSortedArray' element = {<Q17MergeTwoSortedArray/> }/>
          <Route path='/inversionanarray' element = {<R18Inversionanarray/> }/>
          <Route path='/stockbyandSell' element = {<S19StockbyandSell/> }/>
          <Route path='/trappingrainWater' element = {<T20TrappingrainWater/> }/>
          <Route path='/majorityelement' element = {<U21Majorityelement/> }/>

                 
          {/* ================== String =============== */}
          <Route path='/string-basic-questions' element = {<A0basicinfostring/> }/>


          {/* ========== Pages ================== */}
          <Route path='/post' element = {<Post /> }/>
          <Route path='/edith' element = {<EditHeader /> }/>
          <Route path='/soon' element = {<ComingSoon /> }/>
          <Route path='/codechef' element = {<Codechef /> }/>
          <Route path='/codeforces' element = {<Codeforses /> }/>
          <Route path='/leedcode' element = {<Leedcode /> }/>


        </Routes>
      </Router>
      <Footer/>
    </>
  );
}

export default App;







      // <Hero theme={theme} /> 
      // <Counter/>
      // <Services/>
      // <About/>
      // <Team/>
      // <Blog/>
      // <Testimonial/>
      // <Newsletter/>
      // <Footer/> 
      // <Home/>
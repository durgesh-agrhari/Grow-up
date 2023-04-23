import './App.css';
import React, {useState, useEffect} from 'react'; //4.5k (gzipped: 2k)
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Homepage from './homepage/Homepage';
import DataStructure from './courses/dataStructure/dataStructure/DataStructure';
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
// import Codechef from './contest/Codechef';
// import Codeforses from './contest/Codeforses';
// import Leedcode from './contest/Leedcode';

import ReactGA from "react-ga"; // 14.8k (gzipped: 4.9k)
import WebDevelopment from './web/WebDevelopment/WebDevelopment';
import JobHome from './job/JobHome';
import Oops from './core/Oops/Oops';
import Explore from './explore/Explore';
import Sidenav from './tutorials/Sidenav/Sidenav'
import Video from './tutorials/Video/Video';
import Videotute from './tutorials/Video/Videotute';
import Home from './tutorials/Sidenav/Home';
import Scroller from './scroller/Scroller';
import A1ReverseString from './DSA/2-String/A1ReverseString';
import B2lengthofString from './DSA/2-String/B2lengthofString';
import C3countWordinString from './DSA/2-String/C3countWordinString';
import D4PalendromeString from './DSA/2-String/D4PalendromeString';
import E5RemoveVowel from './DSA/2-String/E5RemoveVowel';
import F6RemoveSpace from './DSA/2-String/F6RemoveSpace';
import G7removeDublicates from './DSA/2-String/G7removeDublicates';
import H8countFrequency from './DSA/2-String/H8countFrequency';
import I9Substring from './DSA/2-String/I9Substring';
import J10CapitalizedfirstcharacterofEachwordinStrng from './DSA/2-String/J10CapitalizedfirstcharacterofEachwordinStrng';
import K11Deleteelementinstring from './DSA/2-String/K11Deleteelementinstring';
import A0basicinfoSorting from './DSA/3-Sortiong/A0basicinfoSorting';
import AAACodechef from './contest/Codechef/AAACodechef';
import AAACodeforses from './contest/Codeforces/AAACodeforses';
import AAALeedcode from './contest/Leetcode/AAALeedcode';
import A1selectionsort from './DSA/3-Sortiong/A1selectionsort';
import B2bubblesort from './DSA/3-Sortiong/B2bubblesort';
import C3insertionsort from './DSA/3-Sortiong/C3insertionsort';
import D4mergesort from './DSA/3-Sortiong/D4mergesort';
import E5quicksort from './DSA/3-Sortiong/E5quicksort';
import F6reduxsort from './DSA/3-Sortiong/F6reduxsort';
import A0basicinfopattern from './DSA/4-Pattern/A0basicinfopattern';
import A0basicinfoSearching from './DSA/5-Searching/A0basicinfoSearching';

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

          {/* ========= Pagrs ============== */}
          <Route path='/' element = {<Homepage/> }/>
          <Route path='/post' element = {<Post /> }/>
          <Route path='/edith' element = {<EditHeader /> }/>
          <Route path='/soon' element = {<ComingSoon /> }/>
          <Route path='/codechef-contest-solution' element = {<AAACodechef/> }/>
          <Route path='/codeforces-contest-solution' element = {<AAACodeforses /> }/>
          <Route path='/leedcode-contest-solution' element = {<AAALeedcode /> }/>
          <Route path='/job-home' element = {<JobHome /> }/>
          <Route path='/explore' element = {<Explore /> }/>

          {/* ========== Sub Pages =========== */}
          <Route path='/dataStructure' element = {<DataStructure/> }/>
          <Route path='/sidenav' element = {<Sidenav/> }/>
          <Route path='/video' element = {<Video/> }/>
          <Route path='/videotute' element = {<Videotute/> }/>
          <Route path='/home' element = {<Home/> }/>
          <Route path='/scroller' element = {<Scroller/> }/>



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
          <Route path='/reverse-element-string' element = {<A1ReverseString/> }/>
          <Route path='/length-of-string' element = {<B2lengthofString/> }/>
          <Route path='/count-Word-in-string' element = {<C3countWordinString/> }/>
          <Route path='/check-palendrome-string' element = {<D4PalendromeString/> }/>
          <Route path='/remove-vowel-string' element = {<E5RemoveVowel/> }/>
          <Route path='/remove-space-string' element = {<F6RemoveSpace/> }/>
          <Route path='/remove-dublicates-string' element = {<G7removeDublicates/> }/>
          <Route path='/count-frequency-string' element = {<H8countFrequency/> }/>
          <Route path='/find-Substring-string' element = {<I9Substring/> }/>
          <Route path='/capitalized-first-character-of-each-word-in-strng' element = {<J10CapitalizedfirstcharacterofEachwordinStrng/> }/>
          <Route path='/delete-element-in-strng' element = {<K11Deleteelementinstring/> }/>

          {/* ========== Sorting ========= */}
          <Route path='/sorting-basic-questions' element = {<A0basicinfoSorting/> }/>
          <Route path='/selection-sort-in-c++' element = {<A1selectionsort/> }/>
          <Route path='/bubble-sort-in-c++' element = {<B2bubblesort/> }/>
          <Route path='/insertion-sort-in-c++' element = {<C3insertionsort/> }/>
          <Route path='/merge-sort-in-c++' element = {<D4mergesort/> }/>
          <Route path='/quick-sort-in-c++' element = {<E5quicksort/> }/>
          <Route path='/redux-sort-in-c++' element = {<F6reduxsort/> }/>


          {/* ========== web Development */}
          <Route path='/web-development' element = {<WebDevelopment/> }/>

          {/* ========= core ========= */}
          <Route path='/oops' element = {<Oops/> }/>

          {/* ========== Pattern que ========= */}
          <Route path='/pattern-basic-questions' element = {<A0basicinfopattern/> }/>

          {/* ========== Searching Que ========= */}
          <Route path='/searching-basic-questions' element = {<A0basicinfoSearching/> }/>

          {/* ========== Pattern que ========= */}
          <Route path='/pattern-basic-questions' element = {<A0basicinfopattern/> }/>

          {/* ========== Pattern que ========= */}
          <Route path='/pattern-basic-questions' element = {<A0basicinfopattern/> }/>

          {/* ========== Pattern que ========= */}
          <Route path='/pattern-basic-questions' element = {<A0basicinfopattern/> }/>

          {/* ========== Pattern que ========= */}
          <Route path='/pattern-basic-questions' element = {<A0basicinfopattern/> }/>

          {/* ========== Pattern que ========= */}
          <Route path='/pattern-basic-questions' element = {<A0basicinfopattern/> }/>

        </Routes>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
import './App.css';
import React, {useState, useEffect} from 'react'; //4.5k (gzipped: 2k)
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
// import Homepage from './homepage/Homepage';
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

import WebDevelopment from './web/WebDevelopment/WebDevelopment';
import JobHome from './job/JobHome';


import A0basicinfoSorting from './DSA/3-Sortiong/A0basicinfoSorting';
import A1selectionsort from './DSA/3-Sortiong/A1selectionsort';
import B2bubblesort from './DSA/3-Sortiong/B2bubblesort';
import C3insertionsort from './DSA/3-Sortiong/C3insertionsort';
import D4mergesort from './DSA/3-Sortiong/D4mergesort';
import E5quicksort from './DSA/3-Sortiong/E5quicksort';
import F6reduxsort from './DSA/3-Sortiong/F6reduxsort';
import A0basicinfopattern from './DSA/4-Pattern/A0basicinfopattern';
import A0basicinfoSearching from './DSA/5-Searching/A0basicinfoSearching';
import A0basicinfomatrix from './DSA/6-Matrix/A0basicinfomatrix';
import A0basicinfostack from './DSA/7-Stack/A0basicinfostack';
import A0basicinfoqueue from './DSA/8-Queue/A0basicinfoqueue';
import A0basicinfoLinkedlist from './DSA/9-Linkedlist/A0basicinfoLinkedlist';
import A0basicinforecursion from './DSA/10-Recursion/A0basicinforecursion';
import A0basicinfohashing from './DSA/11-Hashing/A0basicinfohashing';
import A0basicinfoheap from './DSA/12-Heap/A0basicinfoheap';
import A0basicinfotree from './DSA/13-Tree/A0basicinfotree';
import A0basicinfograph from './DSA/14-Graph/A0basicinfograph';
import A0basicinfodp from './DSA/15-Dp/A0basicinfodp';
import A0basicinfogreedy from './DSA/16-Greedy/A0basicinfogreedy';
import A1linearsearch from './DSA/5-Searching/A1linearsearch';
import B2binarysearch from './DSA/5-Searching/B2binarysearch';
import C3fierstandlast from './DSA/5-Searching/C3fierstandlast';
import D4floorandceil from './DSA/5-Searching/D4floorandceil';
import A1Inputandoutput from './DSA/6-Matrix/A1Inputandoutput';
import B2addtwomatrix from './DSA/6-Matrix/B2addtwomatrix';
import C3Searchin2dmatrix from './DSA/6-Matrix/C3Searchin2dmatrix';
import D4Replaceelementinmatrix from './DSA/6-Matrix/D4Replaceelementinmatrix';
import E5Comparetwomatrix from './DSA/6-Matrix/E5Comparetwomatrix';
import F6paskaltriangle from './DSA/6-Matrix/F6paskaltriangle';
import G7rotate90degreematrix from './DSA/6-Matrix/G7rotate90degreematrix';
import H8setmatrixzero from './DSA/6-Matrix/H8setmatrixzero';
import A1RectanglePattern from './DSA/4-Pattern/A1RectanglePattern';
import B2PyramidPattern from './DSA/4-Pattern/B2PyramidPattern';
import C3PyramidPatternnum from './DSA/4-Pattern/C3PyramidPatternnum';
import D4PalindromePyramidPattern from './DSA/4-Pattern/D4PalindromePyramidPattern';
import E5DiamondPattern from './DSA/4-Pattern/E5DiamondPattern';
import F6diamondpatternstarsnumbers from './DSA/4-Pattern/F6diamondpatternstarsnumbers';
import H8PascalTriangle from './DSA/4-Pattern/H8PascalTriangle';
import G7FloydTriangle from './DSA/4-Pattern/G7FloydTriangle';

import DSAneedandclean from './DSA/DSAhome/DSAneedandclean';
import Javascript from './web/JavaScript/Javascript';


//import ReactGA from "react-ga"; //14.8k (gzipped: 4.9k)
import ReactGA from "react-ga4";

import A1StackinSTL from './DSA/7-Stack/A1StackinSTL';
import B2StackUsingCpp from './DSA/7-Stack/B2StackUsingCpp';
import A0Oops from './core/Oops/A0Oops';
import A1OopsPiller from './core/Oops/A1OopsPiller';
import A2IMPOOps from './core/Oops/A2IMPOOps';
import A3OopsImpQue from './core/Oops/A3OopsImpQue';
import A0Basiccn from './core/Cn/A0Basiccn';
import A1ImpCnQue from './core/Cn/A1ImpCnQue';
import A0OsBasic from './core/OperatingSystem/A0OsBasic';
import A1ImpOsQuestoins from './core/OperatingSystem/A1ImpOsQuestoins';
import A0DBMSBasic from './core/Dbms/A0DBMSBasic';
import A1ImpDBMSQuestoins from './core/Dbms/A1ImpDBMSQuestoins';
import A0Mysql from './core/Mysql/A0Mysql';
import A1ImpMysqlQuestoins from './core/Mysql/A1ImpMysqlQuestoins';
import A0Html from './web/Html/A0Html';
import A0Css from './web/Css/A0Css';
import A1ImpCssQuestoins from './web/Css/A1ImpCssQuestoins';
import A1ImpHtmlQuestoins from './web/Html/A1ImpHtmlQuestoins';
import A0Bootstrap from './web/Bootstrap/A0Bootstrap';
import A0Reactjs from './web/ReactJs/A0Reactjs';
import A1ImpReactjasQuestoins from './web/ReactJs/A1ImpReactjasQuestoins';
import A0Nodejs from './web/NodeJs/A0Nodejs';
import A0ExpressJs from './web/ExpressJs/A0ExpressJs';
import A0MongoDB from './web/MongoDB/A0MongoDB';
import A0Redux from './web/Redux/A0Redux';
import AIPopularTools from './AI-Tools/AIPopularTools';
import JavaScriptimpque from './web/JavaScript/JavaScriptimpque';
import Homepage from './components/homepage/Homepage';
import A0basicinfostring from './DSA/2-String/A0basicinfostring';
import A1ReverseString from './DSA/2-String/A1ReverseString';


const TRACKING_ID = "G-PE3WVLWX2S"; //
ReactGA.initialize(TRACKING_ID);
// ReactGA.pageview(document.location.pathname);

function App() {

  const [theme, setTheme] = useState('')
  const toggleTheme = () => {
    theme === '' ? setTheme('light-theme') : setTheme('')
  }

  useEffect(() => {
    document.body.className = theme
  }, [theme])


  //This is helpes to send page view to google analisis
  // useEffect(() => {
  //   ReactGA.pageview(window.location.pathname);
  // },[])

  return (
    <>
     <Router>
      <Header theme={theme} toggleTheme={toggleTheme} /> 
        <Routes>

          {/* ========= Pages ============== */}
          <Route path='/' element = {<Homepage/> }/>
          <Route path='/post' element = {<Post /> }/>
          <Route path='/edith' element = {<EditHeader /> }/>
          <Route path='/soon' element = {<ComingSoon /> }/>
          <Route path='/job-home' element = {<JobHome /> }/>
          <Route path='/DSA-Need-And-Clean-SDE-Sheet' element = {<DSAneedandclean/> }/>
  

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

                 
          ================== String ===============
          <Route path='/string-basic-questions' element = {<A0basicinfostring/> }/>
          <Route path='/string-basic-questions' element = {<A1ReverseString/>} />

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
          <Route path='/javascript' element = {<Javascript/> }/>

          <Route path='/html-basic' element = {<A0Html/> }/>
          <Route path='/Importent-html-basic-questions' element = {<A1ImpHtmlQuestoins/> }/>
          
          <Route path='/css-basic' element = {<A0Css/> }/>
          <Route path='/Css-Importent-Questoins' element = {<A1ImpCssQuestoins/> }/>

          <Route path='/Bootstrap-Basic-Concept' element = {<A0Bootstrap/> }/>
          <Route path='/Importent-Reactjs-Questions' element = {<A1ImpReactjasQuestoins/> }/>

          <Route path='/Reactjs-Basic-Concept' element = {<A0Reactjs/> }/>
          <Route path='/Importent-Reactjs-Questions' element = {<A1ImpReactjasQuestoins/> }/>

          <Route path='/Nodejs-Basic-Concept' element = {<A0Nodejs/> }/>
          <Route path='/Importent-Reactjs-Questions' element = {<A1ImpReactjasQuestoins/> }/>

          <Route path='/ExpressJs-Basic-Concept' element = {<A0ExpressJs/> }/>
          <Route path='/Importent-Reactjs-Questions' element = {<A1ImpReactjasQuestoins/> }/>

          <Route path='/Mongodb-Basic-Concept' element = {<A0MongoDB/> }/>
          <Route path='/Importent-Reactjs-Questions' element = {<A1ImpReactjasQuestoins/> }/>

          <Route path='/Redux-Basic-Concept' element = {<A0Redux/> }/>
          <Route path='/Importent-Reactjs-Questions' element = {<A1ImpReactjasQuestoins/> }/>

          <Route path='/Importent-Javascript-Questions' element = {<JavaScriptimpque/> }/>

          
          {/* ========= AI TOOLS ========= */}
          <Route path='/Best-AI-Tools-For-Coding-And-All' element = {<AIPopularTools/> }/>

          

          {/* ========= core ========= */}
          <Route path='/oops' element = {<A0Oops/> }/>
          <Route path='/OopsPillars' element = {<A1OopsPiller/> }/>
          <Route path='/Implementation-of-oops' element = {<A2IMPOOps/> }/>
          <Route path='/Top-20-Oops-Importent-Questions' element = {<A3OopsImpQue/> }/>

          <Route path='/Basic-Computer-Network' element = {<A0Basiccn/> }/>
          <Route path='/Computer-Network-Importent-interview-Questions' element = {<A1ImpCnQue/> }/>

          <Route path='/Operating-System-Basic-questions' element = {<A0OsBasic/> }/>
          <Route path='/Importent-Operating-System-questions' element = {<A1ImpOsQuestoins/> }/>

          <Route path='/DBMS-Basic-questions' element = {<A0DBMSBasic/> }/>
          <Route path='/DBMS-Importent-questions' element = {<A1ImpDBMSQuestoins/> }/>

          <Route path='/Mysql-Basic-questions' element = {<A0Mysql/> }/>
          <Route path='/Mysql-Importent-questions' element = {<A1ImpMysqlQuestoins/> }/>

          {/* ========== Pattern que ========= */}
          <Route path='/pattern-basic-questions' element = {<A0basicinfopattern/> }/>
          <Route path='/rectangle-pattern-in-c++' element = {<A1RectanglePattern/> }/>
          <Route path='/pyramid-pattern-in-c++' element = {<B2PyramidPattern/> }/>
          <Route path='/pyramid-pattern-in-c++-using-number' element = {<C3PyramidPatternnum/> }/>
          <Route path='/palindrome-pyramid-pattern-in-c++-using-number-and-alphabet' element = {<D4PalindromePyramidPattern/> }/>
          <Route path='/diamond-pattern-in-c++-using-star' element = {<E5DiamondPattern/> }/>
          <Route path='/diamond-pattern-in-c++-using-star-and-numbers' element = {<F6diamondpatternstarsnumbers/> }/>
          <Route path='/floyd-triangle-in-c++' element = {<G7FloydTriangle/> }/>
          <Route path='/pascal-triangle-in-c++' element = {<H8PascalTriangle/> }/>

          {/* ========== Searching Que ========= */}
          <Route path='/searching-basic-questions' element = {<A0basicinfoSearching/> }/>
          <Route path='/linear-search-in-c++' element = {<A1linearsearch/> }/>
          <Route path='/binary-search-in-c++' element = {<B2binarysearch/> }/>
          <Route path='/fierst-and-last-occurrence-in-c++' element = {<C3fierstandlast/> }/>
          <Route path='/floor-and-ceil-in-c++' element = {<D4floorandceil/> }/>

          {/* ========== Matrix Que ========= */}
          <Route path='/matrix-basic-questions' element = {<A0basicinfomatrix/> }/>
          <Route path='/how-to-take-input-and-output-in-matrix' element = {<A1Inputandoutput/> }/>
          <Route path='/how-to-add-two-matrix-in-c++' element = {<B2addtwomatrix/> }/>
          <Route path='/how-search-in-2d-matrix-in-c++' element = {<C3Searchin2dmatrix/> }/>
          <Route path='/how-to-replace-element-in-matrix-in-c++' element = {<D4Replaceelementinmatrix/> }/>
          <Route path='/how-to-Compare-two-in-matrix-in-c++' element = {<E5Comparetwomatrix/> }/>
          <Route path='/how-to-paskal-triangle-in-matrix-in-c++' element = {<F6paskaltriangle/> }/>
          <Route path='/how-to-rotate-90-degree-in-matrix-in-c++' element = {<G7rotate90degreematrix/> }/>
          <Route path='/how-to-find-8set-matrix-zero-in-c++' element = {<H8setmatrixzero/> }/>

          {/* ========== Stack Que ========= */}
          <Route path='/stack-basic-questions' element = {<A0basicinfostack/> }/>
          <Route path='/Stack-in-STL' element = {<A1StackinSTL/> }/>
          <Route path='/Stack-in-STL' element = {<B2StackUsingCpp/> }/>


          {/* ========== Queue Que ========= */}
          <Route path='/queue-basic-questions' element = {<A0basicinfoqueue/> }/>

          {/* ========== Linkedlist Que ========= */}
          <Route path='/linkedlist-basic-questions' element = {<A0basicinfoLinkedlist/> }/>

          {/* ========== Hashing Que ========= */}
          <Route path='/hashing-basic-questions' element = {<A0basicinfohashing/> }/>

          {/* ========== Heap Que ========= */}
          <Route path='/heap-basic-questions' element = {<A0basicinfoheap/> }/>

          {/* ========== tree Que ========= */}
          <Route path='/tree-basic-questions' element = {<A0basicinfotree/> }/>
          
          {/* ========== Graph Que ========= */}
          <Route path='/graph-basic-questions' element = {<A0basicinfograph/> }/>

          {/* ========== DP Que ========= */}
          <Route path='/dp-basic-questions' element = {<A0basicinfodp/> }/>

          {/* ========== Greedy Que ========= */}
          <Route path='/greedy-basic-questions' element = {<A0basicinfogreedy/> }/>

          {/* ========== Trie Que ========= */}
          <Route path='/recursion-basic-questions' element = {<A0basicinforecursion/> }/>

          
        </Routes>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
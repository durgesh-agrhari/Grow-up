import React from "react";
import "./ai.css";
import { Helmet } from "react-helmet-async";

import a1 from "../images/a1.png";
import a2 from "../images/a2.png";
import a3 from "../images/a3.jpeg";
import a4 from "../images/a4.png";

import a5 from "../images/a5.jpeg";
import a6 from "../images/a6.jpeg";
import a7 from "../images/a7.png";
import a8 from "../images/a8.jpeg";

// const serviceData = [
//     {
//         icon: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg',
//         title: 'TensorFlow',
//         desc: 'Developed by Google Brain, TensorFlow is an open-source machine learning framework widely used for research and production purposes. It offers extensive support for deep learning models and has a large community contributing to its development.'
//     },
//     {
//         icon: 'a2',
//         title: 'PyTorch',
//         desc: 'Developed by Facebooks AI Research lab (FAIR) PyTorch is another popular open-source deep learning framework known for its flexibility and ease of use. It has gained significant traction in the research community and is commonly used for building neural networks.'
//     },
//     {
//         icon: 'a3',
//         title: 'Scikit-learn',
//         desc: 'Scikit-learn is a popular machine learning library in Python that provides simple and efficient tools for data mining and data analysis. Its widely used for tasks such as classification, regression, clustering, and dimensionality reduction.'
//     },
//     {
//         icon: 'ri-bar-chart-2-line',
//         title: 'Keras',
//         desc: ' Keras is a high-level neural networks API written in Python and capable of running on top of TensorFlow, Theano, or Microsoft Cognitive Toolkit (CNTK). Its known for its user-friendliness and allows for fast prototyping of deep learning models.'
//     },

// ]

// const serviceData1 = [
//     {
//         icon: 'ri-apps-line',
//         title: 'OpenAI GPT',
//         desc: 'OpenAI GPT (Generative Pre-trained Transformer) models: OpenAI GPT models, including GPT-2 and GPT-3, have gained significant attention for their capabilities in natural language processing (NLP) tasks such as text generation, summarization, and translation.'
//     },
//     {
//         icon: 'ri-code-s-slash-line',
//         title: 'Microsoft Azure AI',
//         desc: 'Microsoft Azure offers a suite of AI services and tools, including Azure Machine Learning, Azure Cognitive Services, and Azure Bot Service, which are widely used for various AI applications, including computer vision, speech recognition, and natural language understanding.'
//     },
//     {
//         icon: 'ri-store-3-line',
//         title: 'IBM Watson',
//         desc: 'IBM Watson is a cognitive computing platform that offers a range of AI services and tools for businesses, including machine learning, natural language processing, and computer vision capabilities.IBM Watson is a powerful artificial intelligence platform developed by IBM. '
//     },
//     {
//         icon: 'ri-bar-chart-2-line',
//         title: 'Bard',
//         desc: '"Bard AI" could refer to an AI-powered writing assistant or creative tool designed to aid writers in generating content, refining language, or providing creative suggestions. However, without more specific information, its challenging to provide further details on its features or capabilities.'
//     },
// ]

const AIPopularTools = () => {
  return (
    <div>
      <Helmet>
        <title>Top 10 Ai Tool coding skills</title>
        <meta
          name="description"
          content=" Making learning easier and more convenient for you. Data Structure. Data structures are the problem-solving pillars of coding."
        />

        <link rel="canonical" href="/Best-AI-Tools-For-Coding-And-All" />
        {/* it is use to not indexing to google pages */}
        {/* <meta name='robots' content='noindex' /> */}
      </Helmet>

      <section className="service" id="service">
        <div className="container">
          <div className="service__top-content">
            <h6 className="subtitle"> Best Ai Tools For Students and All </h6>
            <h2>Save time manage your coding skills with Smart AI Tools</h2>
            <h2 className="highlight"> AI HUB </h2>
          </div>

          {/* <div className='service__item1-wrapper'>
                {
                    serviceData.map((item, index) => (
                        <div className='service__item1' key={index}>
                        <span className='service__icon'><i class={item.icon}></i></span>
                        <h3 className='service__title'>{item.title}</h3>
                        <p className='discription'>{item.desc}</p>
                        </div>
                    ))
                }
            </div> */}

          <div className="service__item-wrapper1">
            <div className="service__item1">
              <a
                href="https://www.tensorflow.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="service__icon">
                  {" "}
                  <img
                    src={a1}
                    width="1000"
                    height="60"
                    className="a1"
                    alt="logo"
                  />
                </span>
                <h3 className="service__title">TensorFlow</h3>
                <p className="discription">
                  Developed by Google Brain, TensorFlow is an open-source
                  machine learning framework widely used for research and
                  production purposes. It offers extensive support for deep
                  learning models and has a large community contributing to its
                  development.
                </p>
              </a>
            </div>

            <div className="service__item1">
              <a
                href="https://scikit-learn.org/stable/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="service__icon">
                  {" "}
                  <img
                    src={a3}
                    width="800"
                    height="60"
                    className="a1"
                    alt="logo"
                  />
                </span>
                <h3 className="service__title">Scikit-learn</h3>
                <p className="discription">
                  Scikit-learn is a popular machine learning library in Python
                  that provides simple and efficient tools for data mining and
                  data analysis. Its widely used for tasks such as
                  classification, regression, clustering, and dimensionality
                  reduction.
                </p>
              </a>
            </div>
          </div>

          <div className="service__item-wrapper1">
            <div className="service__item1">
              <a
                href="https://azure.microsoft.com/en-us/solutions/ai/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="service__icon">
                  {" "}
                  <img
                    src={a6}
                    width="1000"
                    height="60"
                    className="a1"
                    alt="logo"
                  />
                </span>
                <h3 className="service__title">Microsoft Azure AI</h3>
                <p className="discription">
                  Microsoft Azure offers a suite of AI services and tools,
                  including Azure Machine Learning, Azure Cognitive Services,
                  and Azure Bot Service, which are widely used for various AI
                  applications, including computer vision, speech recognition,
                  and natural language understanding.
                </p>
              </a>
            </div>

            <div className="service__item1">
              <a
                href="https://www.ibm.com/watson"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="service__icon">
                  {" "}
                  <img
                    src={a7}
                    width="800"
                    height="60"
                    className="a1"
                    alt="logo"
                  />
                </span>
                <h3 className="service__title">IBM Watson</h3>
                <p className="discription">
                  IBM Watson is a cognitive computing platform that offers a
                  range of AI services and tools for businesses, including
                  machine learning, natural language processing, and computer
                  vision capabilities.IBM Watson is a powerful artificial
                  intelligence platform developed by IBM.
                </p>
              </a>
            </div>
          </div>

          <div className="service__item-wrapper1">
            <div className="service__item1">
              <a
                href="https://chat.openai.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="service__icon">
                  {" "}
                  <img
                    src={a5}
                    width="1000"
                    height="60"
                    className="a1"
                    alt="logo"
                  />
                </span>
                <h3 className="service__title">OpenAI GPT</h3>
                <p className="discription">
                  OpenAI GPT (Generative Pre-trained Transformer) models: OpenAI
                  GPT models, including GPT-2 and GPT-3, have gained significant
                  attention for their capabilities in natural language
                  processing (NLP) tasks such as text generation, summarization,
                  and translation.
                </p>
              </a>
            </div>
            <div className="service__item1">
              <a
                href="https://gemini.google.com/app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="service__icon">
                  {" "}
                  <img
                    src={a8}
                    width="1000"
                    height="60"
                    className="a1"
                    alt="logo"
                  />
                </span>
                <h3 className="service__title">Bard</h3>
                <p className="discription">
                  "Bard AI" could refer to an AI-powered writing assistant or
                  creative tool designed to aid writers in generating content,
                  refining language, or providing creative suggestions. However,
                  without more specific information, its challenging to provide
                  further details on its features or capabilities.
                </p>
              </a>
            </div>
          </div>

          <div className="service__item-wrapper1">
            <div className="service__item1">
              <a
                href="https://pytorch.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="service__icon">
                  {" "}
                  <img
                    src={a2}
                    width="1000"
                    height="60"
                    className="a1"
                    alt="logo"
                  />
                </span>
                <h3 className="service__title">PyTorch </h3>
                <p className="discription">
                  Developed by Facebooks AI Research lab (FAIR) PyTorch is
                  another popular open-source deep learning framework known for
                  its flexibility and ease of use. It has gained significant
                  traction in the research community and is commonly used for
                  building neural networks.
                </p>
              </a>
            </div>

            <div className="service__item1">
              <a
                href="https://keras.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="service__icon">
                  {" "}
                  <img
                    src={a4}
                    width="1000"
                    height="60"
                    className="a1"
                    alt="logo"
                  />
                </span>
                <h3 className="service__title">Keras</h3>
                <p className="discription">
                  Keras is a high-level neural networks API written in Python
                  and capable of running on top of TensorFlow, Theano, or
                  Microsoft Cognitive Toolkit (CNTK). Its known for its
                  user-friendliness and allows for fast prototyping of deep
                  learning models.
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIPopularTools;

// import React from 'react'
// import "./ai.css"
// import { Helmet } from 'react-helmet-async'

// import a1 from '../images/a1.png'
// import a2 from '../images/a2.png'
// import a3 from '../images/a3.jpeg'
// import a4 from '../images/a4.png'

// import a5 from '../images/a5.jpeg'
// import a6 from '../images/a6.jpeg'
// import a7 from '../images/a7.png'
// import a8 from '../images/a8.jpeg'

// // const serviceData = [
// //     {
// //         icon: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg',
// //         title: 'TensorFlow',
// //         desc: 'Developed by Google Brain, TensorFlow is an open-source machine learning framework widely used for research and production purposes. It offers extensive support for deep learning models and has a large community contributing to its development.'
// //     },
// //     {
// //         icon: 'a2',
// //         title: 'PyTorch',
// //         desc: 'Developed by Facebooks AI Research lab (FAIR) PyTorch is another popular open-source deep learning framework known for its flexibility and ease of use. It has gained significant traction in the research community and is commonly used for building neural networks.'
// //     },
// //     {
// //         icon: 'a3',
// //         title: 'Scikit-learn',
// //         desc: 'Scikit-learn is a popular machine learning library in Python that provides simple and efficient tools for data mining and data analysis. Its widely used for tasks such as classification, regression, clustering, and dimensionality reduction.'
// //     },
// //     {
// //         icon: 'ri-bar-chart-2-line',
// //         title: 'Keras',
// //         desc: ' Keras is a high-level neural networks API written in Python and capable of running on top of TensorFlow, Theano, or Microsoft Cognitive Toolkit (CNTK). Its known for its user-friendliness and allows for fast prototyping of deep learning models.'
// //     },

// // ]

// // const serviceData1 = [
// //     {
// //         icon: 'ri-apps-line',
// //         title: 'OpenAI GPT',
// //         desc: 'OpenAI GPT (Generative Pre-trained Transformer) models: OpenAI GPT models, including GPT-2 and GPT-3, have gained significant attention for their capabilities in natural language processing (NLP) tasks such as text generation, summarization, and translation.'
// //     },
// //     {
// //         icon: 'ri-code-s-slash-line',
// //         title: 'Microsoft Azure AI',
// //         desc: 'Microsoft Azure offers a suite of AI services and tools, including Azure Machine Learning, Azure Cognitive Services, and Azure Bot Service, which are widely used for various AI applications, including computer vision, speech recognition, and natural language understanding.'
// //     },
// //     {
// //         icon: 'ri-store-3-line',
// //         title: 'IBM Watson',
// //         desc: 'IBM Watson is a cognitive computing platform that offers a range of AI services and tools for businesses, including machine learning, natural language processing, and computer vision capabilities.IBM Watson is a powerful artificial intelligence platform developed by IBM. '
// //     },
// //     {
// //         icon: 'ri-bar-chart-2-line',
// //         title: 'Bard',
// //         desc: '"Bard AI" could refer to an AI-powered writing assistant or creative tool designed to aid writers in generating content, refining language, or providing creative suggestions. However, without more specific information, its challenging to provide further details on its features or capabilities.'
// //     },
// // ]

// const AIPopularTools = () => {
//     return (

//         <div>
//       <Helmet>
//         <title>Top 10 Ai Tool coding skills</title>
//         <meta name='description' content=' Making learning easier and more convenient for you. Data Structure. Data structures are the problem-solving pillars of coding.'/>

//         <link rel='canonical' href='/Best-AI-Tools-For-Coding-And-All' />
//         {/* it is use to not indexing to google pages */}
//         {/* <meta name='robots' content='noindex' /> */}
//       </Helmet>

//         <section className='service' id='service'>
//             <div className='container'>
//                 <div className='service__top-content'>
//                     <h6 className='subtitle'> Best Ai Tools For Students and All </h6>
//                     <h2>Save time manage your coding skills with Smart AI Tools</h2>
//                     <h2 className='highlight'> AI HUB </h2>
//                 </div>

//                 {/* <div className='service__item-wrapper'>
//                 {
//                     serviceData.map((item, index) => (
//                         <div className='service__item' key={index}>
//                         <span className='service__icon'><i class={item.icon}></i></span>
//                         <h3 className='service__title'>{item.title}</h3>
//                         <p className='discription'>{item.desc}</p>
//                         </div>
//                     ))
//                 }
//             </div> */}

//                 <div className='service__item-wrapper'>

//                     <div className='service__item'>
//                     <a href="https://www.tensorflow.org/" target="_blank" rel="noopener noreferrer">
//                         <span className='service__icon'> <img src={a1} width='1000' height='60' className='a1' alt='logo' /></span>
//                         <h3 className='service__title'>TensorFlow</h3>
//                         <p className='discription'>Developed by Google Brain, TensorFlow is an open-source machine learning framework widely used for research and production purposes. It offers extensive support for deep learning models and has a large community contributing to its development.</p>
//                         </a>
//                     </div>

//                     <div className='service__item'>
//                     <a href="https://pytorch.org/" target="_blank" rel="noopener noreferrer">
//                         <span className='service__icon'> <img src={a2} width='1000' height='60' className='a1' alt='logo' /></span>
//                         <h3 className='service__title'>PyTorch </h3>
//                         <p className='discription'>Developed by Facebooks AI Research lab (FAIR) PyTorch is another popular open-source deep learning framework known for its flexibility and ease of use. It has gained significant traction in the research community and is commonly used for building neural networks.</p>
//                         </a>
//                     </div>
//                 </div>

//                 <div className='service__item-wrapper'>
//                     <div className='service__item'>
//                     <a href="https://scikit-learn.org/stable/" target="_blank" rel="noopener noreferrer">
//                         <span className='service__icon'> <img src={a3} width='800' height='60' className='a1' alt='logo' /></span>
//                         <h3 className='service__title'>Scikit-learn</h3>
//                         <p className='discription'>Scikit-learn is a popular machine learning library in Python that provides simple and efficient tools for data mining and data analysis. Its widely used for tasks such as classification, regression, clustering, and dimensionality reduction.</p>
//                     </a>
//                     </div>

//                     <div className='service__item'>
//                     <a href="https://keras.io/" target="_blank" rel="noopener noreferrer">
//                         <span className='service__icon'> <img src={a4} width='1000' height='60' className='a1' alt='logo' /></span>
//                         <h3 className='service__title'>Keras</h3>
//                         <p className='discription'>Keras is a high-level neural networks API written in Python and capable of running on top of TensorFlow, Theano, or Microsoft Cognitive Toolkit (CNTK). Its known for its user-friendliness and allows for fast prototyping of deep learning models.</p>
//                     </a>
//                     </div>
//                 </div>

//                 <div className='service__item-wrapper'>

//                 <div className='service__item'>
//                 <a href="https://chat.openai.com/" target="_blank" rel="noopener noreferrer">
//                     <span className='service__icon'> <img src={a5} width='1000' height='60' className='a1' alt='logo' /></span>
//                     <h3 className='service__title'>OpenAI GPT</h3>
//                     <p className='discription'>OpenAI GPT (Generative Pre-trained Transformer) models: OpenAI GPT models, including GPT-2 and GPT-3, have gained significant attention for their capabilities in natural language processing (NLP) tasks such as text generation, summarization, and translation.</p>
//                     </a>
//                 </div>

//                 <div className='service__item'>
//                 <a href="https://azure.microsoft.com/en-us/solutions/ai/" target="_blank" rel="noopener noreferrer">
//                     <span className='service__icon'> <img src={a6} width='1000' height='60' className='a1' alt='logo' /></span>
//                     <h3 className='service__title'>Microsoft Azure AI</h3>
//                     <p className='discription'>Microsoft Azure offers a suite of AI services and tools, including Azure Machine Learning, Azure Cognitive Services, and Azure Bot Service, which are widely used for various AI applications, including computer vision, speech recognition, and natural language understanding.</p>
//                     </a>
//                 </div>
//             </div>

//             <div className='service__item-wrapper'>
//                 <div className='service__item'>
//                 <a href="https://www.ibm.com/watson" target="_blank" rel="noopener noreferrer">
//                     <span className='service__icon'> <img src={a7} width='800' height='60' className='a1' alt='logo' /></span>
//                     <h3 className='service__title'>IBM Watson</h3>
//                     <p className='discription'>IBM Watson is a cognitive computing platform that offers a range of AI services and tools for businesses, including machine learning, natural language processing, and computer vision capabilities.IBM Watson is a powerful artificial intelligence platform developed by IBM.</p>
//                 </a>
//                 </div>

//                 <div className='service__item'>
//                 <a href="https://gemini.google.com/app" target="_blank" rel="noopener noreferrer">
//                     <span className='service__icon'> <img src={a8} width='1000' height='60' className='a1' alt='logo' /></span>
//                     <h3 className='service__title'>Bard</h3>
//                     <p className='discription'>"Bard AI" could refer to an AI-powered writing assistant or creative tool designed to aid writers in generating content, refining language, or providing creative suggestions. However, without more specific information, its challenging to provide further details on its features or capabilities.</p>
//                 </a>
//                 </div>
//             </div>

//             </div>
//         </section>
//         </div>
//     )
// }

// export default AIPopularTools

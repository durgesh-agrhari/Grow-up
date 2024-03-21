import React from 'react'
// import "../../style/services.css"
import "./ai.css"

const serviceData = [
    {
        icon: 'ri-apps-line',
        title: 'TensorFlow',
        desc: 'Developed by Google Brain, TensorFlow is an open-source machine learning framework widely used for research and production purposes. It offers extensive support for deep learning models and has a large community contributing to its development.'
    },
    {
        icon: 'ri-code-s-slash-line',
        title: 'PyTorch',
        desc: 'Developed by Facebooks AI Research lab (FAIR) PyTorch is another popular open-source deep learning framework known for its flexibility and ease of use. It has gained significant traction in the research community and is commonly used for building neural networks.'
    },
    {
        icon: 'ri-store-3-line',
        title: 'Scikit-learn',
        desc: 'Scikit-learn is a popular machine learning library in Python that provides simple and efficient tools for data mining and data analysis. Its widely used for tasks such as classification, regression, clustering, and dimensionality reduction.'
    },
    {
        icon: 'ri-bar-chart-2-line',
        title: 'Keras',
        desc: ' Keras is a high-level neural networks API written in Python and capable of running on top of TensorFlow, Theano, or Microsoft Cognitive Toolkit (CNTK). Its known for its user-friendliness and allows for fast prototyping of deep learning models.'
    },
   
]



const serviceData1 = [
    {
        icon: 'ri-apps-line',
        title: 'OpenAI GPT',
        desc: 'OpenAI GPT (Generative Pre-trained Transformer) models: OpenAI GPT models, including GPT-2 and GPT-3, have gained significant attention for their capabilities in natural language processing (NLP) tasks such as text generation, summarization, and translation.'
    },
    {
        icon: 'ri-code-s-slash-line',
        title: 'Microsoft Azure AI',
        desc: 'Microsoft Azure offers a suite of AI services and tools, including Azure Machine Learning, Azure Cognitive Services, and Azure Bot Service, which are widely used for various AI applications, including computer vision, speech recognition, and natural language understanding.'
    },
    {
        icon: 'ri-store-3-line',
        title: 'IBM Watson',
        desc: 'IBM Watson is a cognitive computing platform that offers a range of AI services and tools for businesses, including machine learning, natural language processing, and computer vision capabilities.IBM Watson is a powerful artificial intelligence platform developed by IBM. '
    },
    {
        icon: 'ri-bar-chart-2-line',
        title: 'Bard',
        desc: '"Bard AI" could refer to an AI-powered writing assistant or creative tool designed to aid writers in generating content, refining language, or providing creative suggestions. However, without more specific information, its challenging to provide further details on its features or capabilities.'
    },
]



const AIPopularTools = () => {
  return (
    <section className='service' id='service'>
        <div className='container'>
            <div className='service__top-content'>
                <h6 className='subtitle'> Best Ai Tools For Students and All </h6>
                <h2>Save time manage your coding skills with Smart AI Tools</h2>
                <h2 className='highlight'> AI HUB </h2>
            </div>

            <div className='service__item-wrapper'>
                {
                    serviceData.map((item, index) => (
                        <div className='service__item' key={index}>
                        <span className='service__icon'><i class={item.icon}></i></span>
                        <h3 className='service__title'>{item.title}</h3>
                        <p className='discription'>{item.desc}</p>
                        </div>
                    ))
                }
            </div>

            <div className='service__item-wrapper'>
                {
                    serviceData1.map((item, index) => (
                        <div className='service__item' key={index}>
                        <span className='service__icon'><i class={item.icon}></i></span>
                        <h3 className='service__title'>{item.title}</h3>
                        <p className='discription'>{item.desc}</p>
                        </div>
                    ))
                }
            </div>
          

        </div>
    </section>
  )
}

export default AIPopularTools

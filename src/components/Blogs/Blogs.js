import React from 'react';

const Blogs = () => {
    const nonSemanticDiv = '<div>';
    const nonSemanticSpan = '<span>';
    const semanticForm = '<form>';
    const semanticTable = '<table>';
    const semanticSection = '<section>';

    return (
        <div className='mt-5 md:mx-10 mx-5'>
            <h1 className='text-center text-4xl mb-10'>Frequently asked <span className='text-red-400 font-semibold'>Questions and Answers</span>.</h1>
            <div className='questions-container'>
                <div>
                    <h3 className='text-xl font-medium mb-1'>Question: What is <span className='text-red-800'>Context API</span>?</h3>
                    <p><span className='font-medium underline text-red-600'>Ans:</span> Context API is a feature of React that allows one to share state across the app more easily. The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to 'prop drilling' or moving props from grandparent to child parent. Context is also touted as an easier, lighter approach to state management using Redux. React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the 'store' and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>
                </div>
                <br />
                <div>
                    <h3 className='text-xl font-medium mb-1'>Question: What is <span className='text-red-800'>Semantic tag</span>?</h3>
                    <p><span className='font-medium underline text-red-600'>Ans:</span> Semantic elements can be used to define different parts of a web page. Example: The {semanticSection} element defines a section in a document. A semantic element clearly describes its meaning to both the browser and the developer. Examples of <span className='font-semibold'>non-semantic</span> elements: {nonSemanticDiv} and {nonSemanticSpan} - Tells nothing about its content. Examples of <span>semantic</span> elements: {semanticForm} and {semanticTable} - Clearly defines its content. </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
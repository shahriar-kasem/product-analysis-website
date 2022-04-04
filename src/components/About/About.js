import React from 'react';

const About = () => {
    return (
        <div className='mx-5'>
            <h1 className='text-center text-red-500 font-bold text-2xl my-4'>Hey! We are here to help you with more information.</h1>
            <h5 className='text-center font-semibold text-xl my-2'>Our website info:</h5>
            <p>In this website you can see our business details chart in Dashboard. You can check our customer reviews. For getting more information about our products you can check out our Blog page. You can contact us on <span className='text-red-500 font-medium'>Twitter, Facebook</span> or you can mail us at <span className='text-red-500 font-medium'>'sportsworld@worldsport.com'</span>.</p>
        </div>
    );
};

export default About;
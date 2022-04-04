import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className='home-container md:p-2 p-5'>
            <section className='home-main grid grid-cols-1 md:grid-cols-2'>
                <div className='home-main-details ml-1'>
                    <h2 className='text-center text-orange-500 text-4xl font-medium'>Our best is your best!</h2>
                    <h1 className='text-center text-orange-300 text-2xl font-medium  m-3 '>Choose quality products</h1>
                    <p className=''>Shop a wide collection of sports clothes and equipments. We don't compromise with our product qualities! We are promised to give our customers best things. Their satisfaction is our goal.</p>
                    <br />
                    <div className='ml-10'>
                        <button className='border-2 rounded-lg px-5 py-2 bg-red-400 text-white font-semibold'>Shop More</button>
                    </div>
                </div>
                <div className='home-main-img'>
                    <img src="https://www.maxpixel.net/static/photo/2x/Game-Cricketer-Ball-Cricket-Cricket-Ball-Sports-5470308.png" alt="" />
                </div>
            </section>
        </div>
    );
};

export default Home;
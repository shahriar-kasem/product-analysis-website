import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Reviews/Review/Review';
import './Home.css';

const Home = () => {
    const [products] = useReviews();

    return (
        <div className='home-container md:p-2 p-5'>
            <section className='home-main grid grid-cols-1 md:grid-cols-2'>
                <div className='home-main-details md:ml-10 ml-0'>
                    <h2 className='text-center text-orange-500 xl:text-6xl lg:text-5xl text-3xl font-medium'>Our best is your best!</h2>
                    <h1 className='text-center text-orange-300 xl:text-5xl lg:text-5xl text-2xl font-medium  m-5 '>Choose quality products</h1>
                    <p className=''>Shop a wide collection of sports clothes and equipments. We don't compromise with our product qualities! We are promised to give our customers best things. Their satisfaction is our goal.</p>
                    <br />
                    <div className='ml-2'>
                        <button className='border-2 rounded-lg px-5 py-2 bg-red-400 text-white font-semibold'>Shop More</button>
                    </div>
                </div>
                <div className='home-main-img'>
                    <img src="https://www.maxpixel.net/static/photo/2x/Game-Cricketer-Ball-Cricket-Cricket-Ball-Sports-5470308.png" alt="" />
                </div>
            </section>
            <section className='home-customer-review mx-10 flex flex-col items-center'>
                <h2 className='text-center text-2xl font-semibold my-3'>What our customers say about us!</h2>
                <div className='grid md:grid-cols-3 grid-cols-1
            gap-5'>
                    {
                        products.slice(0, 3).map(product => <Review
                        key={product.id}
                        product={product}
                        ></Review>)
                    }
                </div>
                <br />
                <button className='home-review-btn border-2 rounded-lg px-5 py-2 bg-red-400 text-white font-semibold'>See all reviews</button>
            </section>
        </div>
    );
};

export default Home;
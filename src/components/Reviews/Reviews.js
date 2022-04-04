import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from './Review/Review';

const Reviews = () => {
    const [products] = useReviews();

    return (
        <div className='reviews-container mx-5'>
            <h2 className='text-center text-2xl font-semibold my-3'>What our customers say about us!</h2>
            <div className='review-container grid md:grid-cols-3 grid-cols-1
            gap-5'>
                {
                    products.map(product => <Review
                        key={product.id}
                        product={product}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;
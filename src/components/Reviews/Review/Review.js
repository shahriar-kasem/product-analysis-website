import React from 'react';

const Review = ({product}) => {
    const {name, description, ratings} = product;
    return (
        <div className='review border-4 px-5 py-3 bg-slate-200'>
            <h3 className='font-bold text-red-600 text-center'>Customer name: {name}</h3>
            <p><span className='text-red-500'>{name} says:</span> {description}</p>
            <p><span className='text-yellow-700 font-semibold'>Ratings:</span> <span className='font-bold'>{ratings}</span> Out of 5</p>
        </div>
    );
};

export default Review;
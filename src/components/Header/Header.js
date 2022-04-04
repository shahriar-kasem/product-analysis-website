import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header-container pb-2'>
            <div>
                <h1 className='text-center text-4xl text-red-400 font-bold p-1 md:mb-2 mb-3'>Sports World</h1>
            </div>
            <div className='link-container md:mb-0 mb-1'>
                <Link to='/'>Home</Link>
                <Link to='/reviews'>Reviews</Link>
                <Link to='/dashboard'>Dashboard</Link>
                <Link to='/blogs'>Blogs</Link>
                <Link to='/about'>About</Link>
            </div>
        </div>
    );
};

export default Header;
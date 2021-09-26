import React from 'react';
//CSS FILE 
import './Header.css';

const Header = () => {
    return (
        <div className='header-section'>
            <h1 >Car Show</h1>
            <h4>Now you got your channce to enhance your CAR COLLECTION!!!</h4>
            <h4>Your Budget Limit : $100 million</h4>
            <nav className='navbar'>
                <a className='navpoint' href='/shop'>About Us </a>
                <a className='navpoint' href='/orders'>Blogs</a>
                <a className='navpoint' href='/inventory'>Company Info</a>

            </nav>

        </div>
    );
};

export default Header;
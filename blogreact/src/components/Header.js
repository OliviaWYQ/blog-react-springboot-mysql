import React from 'react';
import { NavLink } from 'react-router-dom';
// import logoPic from './../statics/logo.png';

const Header = () => (
    <header>
        <div className='header__wrapper'>
            <h1>BLOG</h1>
        </div>
        <div className='header__nav'>
            <NavLink to='/' className='header__navItem' activeClassName='activeNav header__navItem active' exact={true}>Home</NavLink>
            <NavLink to='/add' className='header__navItem' activeClassName='activeNav header__navItem active'>Add A New Post</NavLink>
        </div>
    </header>
);

export default Header;
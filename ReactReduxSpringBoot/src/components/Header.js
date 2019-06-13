import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h2>BLOG</h2>
        <div className='header__nav'>
            <NavLink to='/' activeClassName='activeNav' exact={true}>Home</NavLink>
            <NavLink to='/add' activeClassName='activeNav'>Add New Posts</NavLink>
        </div>
    </header>
);

export default Header;
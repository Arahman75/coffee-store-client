import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className=''>
            <ul className='flex w-1/2 mx-auto'>
                <li className='mr-10'>  <NavLink to='/'>Home</NavLink></li>
                <li className='mr-10'>   <NavLink to='/users'>Users</NavLink></li>
                <li className='mr-10'>   <NavLink to='/users2'>Users2</NavLink></li>
                <li className='mr-10'>  <NavLink to='/signup'>Sign Up</NavLink></li>
                <li>   <NavLink to='/signIn'>Sign In</NavLink></li>
            </ul>
        </div>
    );
};

export default Header;
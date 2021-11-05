import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <>
      <nav>
        <ul>
          <NavLink
            className='different'
            to='/'
            exact='true'
            activestyle={{ color: 'green', textDecoration: 'underline' }}>
            <li>Home</li>
          </NavLink>
          <NavLink to='/about' activestyle={{ color: 'green' }}>
            <li>About</li>
          </NavLink>
          <NavLink to='/products' activeclassname='red'>
            <li>Products</li>
          </NavLink>
        </ul>
      </nav>
    </>
  );
};

export default Nav;

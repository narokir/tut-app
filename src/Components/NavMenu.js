import React from 'react';
import { Link } from 'react-router-dom';

function NavMenu(props) {
  return (
    <div>
      <div className='font-bold py-2'>AppName</div>
      <ul>
        <li>
          <Link
            to='/'
            className='text-blue-500 py-2 border-t border-b block'
            onClick={props.closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to='/about'
            className='text-blue-500 py-2 border-b block'
            onClick={props.closeMenu}>
            About
          </Link>
          <Link
            to='/products'
            className='text-blue-500 py-2 border-b block'
            onClick={props.closeMenu}>
            Products
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default NavMenu;

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const currentPage = useLocation().pathname;

    return (
        <ul>
            <li>
                <Link
                    to='/'
                    className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                >
                    Home
                </Link>
            </li>
            <li>
                <Link
                    to='/Login'
                    className={currentPage === '/Login' ? 'nav-link active' : 'nav-link'}
                >
                    Login
                </Link>
            </li>
        </ul>
    );
};

export default Navbar;
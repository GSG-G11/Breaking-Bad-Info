import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpg'

const Header = () => {
    return (
        <>
            <img src={logo} alt='logo' style={{width: '150px'}} />
            <Link to='/'>Home </Link>
            <Link to='/characters'>Characters </Link>
            <Link to='/episodes'>Episodes</Link>
        </>
    );
};

export default Header;
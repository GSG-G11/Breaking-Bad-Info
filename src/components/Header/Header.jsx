import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpg'

const Header = () => {
    return (
        <>
            <img src={logo} alt='logo' style={{width: '150px'}} />
            <Link to='/' className='btn'>Home </Link>
            <Link to='/characters' className='btn'>Characters </Link>
            <Link to='/episodes' className='btn'>Episodes</Link>
        </>
    );
};

export default Header;
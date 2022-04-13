import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <h1>Welcome to Breaking Bad information app</h1>
           <Link to='/characters'>characters</Link>
           <br></br>
            <Link to='/episodes'>episodes</Link>
           
        </>
    );
};

export default Home;
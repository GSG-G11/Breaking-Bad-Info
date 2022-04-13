import React from 'react';
import { Link } from 'react-router-dom'
import characters from '../../assets/characters.webp'
import episodes from '../../assets/episods.jpg'

const Home = () => {
    return (
        <>
            <h1>Welcome to Breaking Bad information app</h1>
            <p>Premise. Set in Albuquerque, New Mexico, 
                between 2008 and 2010, Breaking Bad follows
                 Walter White, a meek high school chemistry 
                 teacher who transforms into a ruthless player
                  in the local methamphetamine drug trade, 
                  driven by a desire to financially provide
                   for his family after being diagnosed with 
                   terminal lung cancer.</p>
                   <p>You want to know more?</p>
                   <div className='char-info'>
                        <img src={characters} alt="characters" />
                        <p>Characters</p>
                        <p>This is the list of characters from Breaking Bad series which was shown on AMC</p>
                     <Link to='/characters' className='btn'>more</Link>
                   </div>
           <br></br>
           <div className='char-info'>
                        <img src={episodes} alt="episodes" />
                        <p>Episodes</p>
                        <p>It contains 62 episodes divided into 5 seasons</p>
                     <Link to='/episodes' className='btn'>more</Link>
                   </div>
           
        </>
    );
};

export default Home;
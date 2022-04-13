import React from 'react';
import { Link } from 'react-router-dom';

const Cards = (props) => {
const { result } = props
console.log(result);
    return (
       <>
            {result.map((item) => {
                return (
                    <div className='card'>
                    <Link to={`/characters/${item.char_id}`}>
                     <img src={item.img} alt={item.name} />
                     <p className='name'>{item.name}</p>
                    </Link>
                 </div>
            )
            } )}
       </>
    );
};

export default Cards;
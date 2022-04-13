
import React, { useState, useEffect } from 'react'

import Cards from './Cards/Cards';
import "./Characters.css";

const Characters = ({char}) => {



  return (<>
            <h1>Characters</h1>
            <Cards result={char} />
  </>);
}

export default Characters;
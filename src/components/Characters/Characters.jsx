import React from 'react'
import CharCards from './CharCards/CharCards';
import "./Characters.css";

const Characters = ({char}) => {

  return (<>
            <h1>Characters</h1>
            <CharCards result={char} />
  </>);
}

export default Characters;
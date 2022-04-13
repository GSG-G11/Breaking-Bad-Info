import axios from 'axios';
import React, {  useEffect } from 'react'
import Cards from './Cards/Cards';
import "./Characters.css";

const Characters = ({data}) => {

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios (
        `https://www.breakingbadapi.com/api/characters`
      )
       
     console.log(result.data);
    }
    fetchData()
  }, [])

  return <>
            <h1>Characters</h1>
            <Cards result={data} />
  </>;
}

export default Characters;
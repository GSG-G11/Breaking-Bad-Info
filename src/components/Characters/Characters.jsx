import axios from 'axios';
import React, { useState, useEffect } from 'react'
import "./Characters.css";

const Characters = ({data, setData, isLoading, setIsLoading}) => {

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios (
        `https://www.breakingbadapi.com/api/Characters`
      )
       
      setData(data.data)
      setIsLoading(false)
    }
    fetchData()
  }, [])

  return <>
            <h1>Characters</h1>
  </>;
}

export default Characters;
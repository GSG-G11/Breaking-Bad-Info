import axios from 'axios';
import React, { useState, useEffect } from 'react'
import "./Episodes.css";

const Episodes = ({data, setData, isLoading, setIsLoading}) => {

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios (
        `https://www.breakingbadapi.com/api/episodes`
      )
        setData(data.data)
        setIsLoading(false)
    }
    fetchData()
  }, [])

  return <>
            <h1>Episodes</h1>
  </>;
}

export default Episodes;
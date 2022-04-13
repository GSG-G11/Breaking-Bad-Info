import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Card from './components/Characters/Card/Card';
import Characters from './components/Characters/Characters';
import Episodes from './components/Episodes/Episodes';
import Home from './components/Home/Home';

const App = () => {
  const [data, setData] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios (
        `https://www.breakingbadapi.com/api/characters`
      )
      setData(result.data)
    
    }
    fetchData()
  }, [])

  return <>
    <Router>
    <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/characters' element={<Characters char={data} />}>

    </Route>
<Route    path='/characters/:id' element={<Card char={data} />} />
 
     
    <Route path='/episodes' element={<Episodes  />}/>
    </Routes>
    </Router>
  </>;
}

export default App;
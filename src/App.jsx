import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Characters from './components/Characters/Characters';
import Episodes from './components/Episodes/Episodes';
import Home from './components/Home/Home';

const App = () => {
  
  const [data, setData] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  return <>
    <Router>
    <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/characters' element={<Characters data={data} setData={setData} isLoading={isLoading} setIsLoading={setIsLoading} />}>
      {/* <Route path='/:id' /> */}
      </Route>
    <Route path='/episodes' element={<Episodes data={data} setData={setData} isLoading={isLoading} setIsLoading={setIsLoading} />}/>
    </Routes>
    </Router>
  </>;
}

export default App;
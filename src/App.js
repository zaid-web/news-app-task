import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

const App = () => {

  //get api key from .env.local file (concept for confidential data)
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;

  //set card size
  const pageSize = 5;

  //set state for loader bar
  const [progress, setProgress] = useState(0)

  return (
    <>
      <Navbar />
      <LoadingBar
        color='#f11946'
        progress={progress}
      />
      <Routes>
        <Route path="/" element={<News key="general" setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="general" />} />
        <Route path="/business" element={<News key="business" setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="business" />} />
        <Route path="/entertainment" element={<News key="entertainment" setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="entertainment" />} />
        <Route path="/general" element={<News key="general" setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="general" />} />
        <Route path="/health" element={<News key="health" setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="health" />} />
        <Route path="/science" element={<News key="science" setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="science" />} />
        <Route path="/sports" element={<News key="sports" setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="sports" />} />
        <Route path="/technology" element={<News key="technology" setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="technology" />} />
      </Routes>
    </>
  )
}

export default App
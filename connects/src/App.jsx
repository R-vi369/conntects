import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Find from './pages/Find'
import Message from './pages/Message'
import Story from './pages/Story'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' exect element={<Hero />} />
          <Route path='/Find' element={<Find />} />
          <Route path='/Message' element={<Message />} />
          <Route path='/Story' element={<Story />} />
        </Routes>
      </Router>



    </>
  )
}

export default App
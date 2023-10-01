import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Find from './pages/Find'
import Message from './pages/Message'
import Story from './pages/Story'
import Notify from './pages/Notify'
import Chat from './pages/Chat'
// import Login from './Login'
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
          <Route path='/Notify' element={<Notify />} />
          <Route path='/Chat' element={<Chat/>}/>
        </Routes>
      </Router>

   {/* <Login/> */}

    </>
  )
}

export default App
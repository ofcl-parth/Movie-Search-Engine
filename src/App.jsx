import React from 'react'
import MovieCard from './components/movieCard'
import Home from './pages/homePage'
import Favorites from './pages/favorites'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/navBar'
import './css/App.css'

function App() {
  return (
    <>
    <div className="all">
      <NavBar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </div>
    </>
  
  )
}

export default App

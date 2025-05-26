import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import ProductSelectionPage from './pages/ProductSelectionPage'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/select" element={<ProductSelectionPage />} />
      </Routes>
    </Router>
  )
}

export default App

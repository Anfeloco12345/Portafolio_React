import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Nav from './components/Nav'
import Init from './components/Init'

function App() {
  return (
    <div>
        <Nav/>
        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="/about" element={ <About /> }/>
          <Route path="/contact" element={ <Contact /> }/>
          <Route path="/init" element={ <Init /> }/>
        </Routes>
    </div>
  )
}

export default App
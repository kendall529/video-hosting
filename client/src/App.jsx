import { useEffect, useState } from 'react'
import './App.css'
import { connectWithWebSocket } from './utils/wsConnection/wsConnection';
import React from 'react';
import {
  BrowserRouter as Router, Routes, Route
} from 'react-router-dom';
import  Navbar  from './components/Navbar'
import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {

  useEffect(() => {
    connectWithWebSocket();
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App

import { useEffect, useState } from 'react'
import './App.css'
import { connectWithWebSocket } from './utils/wsConnection/wsConnection';
import React from 'react';
import {
  BrowserRouter as Router, Routes, Route
} from 'react-router-dom';
import  Navbar  from './components/Navbar'
import Dashboard from './components/Dashboard';
import Login from './components/Login';

function App() {

  useEffect(() => {
    connectWithWebSocket();
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App

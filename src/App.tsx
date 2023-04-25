import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { useEffect } from "react"
import axios from "axios";
import CardList from './CardList/CardList'
import IGameCard from './types/types';
import Dashboard from './pages/admin/Dashboard'
import Nav from './Nav/Nav'
import GameSearch from './pages/public/GameSearch'


function App() {



  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" />
        <Route path="/gamesearch" element={<GameSearch />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
      </Routes>
    </div>
  )
}

export default App

import React from "react";
import { useEffect } from 'react'
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from '../../components/sidebar'
import Library from '../library'
import Feed from '../feed/feed'
import Trending from '../trending'
import Player from '../player'
import Favorite from '../favorite'
import './home.scss'
import Login from "../auth/login";
import { setClientToken } from "../../spotify";

export default function Home() {
  const [token,setToken] = useState('')

    useEffect(() => {
      const token = window.localStorage.getItem('token')
      const hash = window.location.hash
      window.location.hash = ''
      if (!token && hash){
        const _token = hash.split("&")[0].split("=")[1]
        window.localStorage.setItem('token', _token)
        setToken(_token)
        setClientToken(_token)
      }else{
        setToken(token)
        setClientToken(token)
      }
    }, [])
  return !token ? (
    <Login />
  ) : (
    <Router>
      <div className="main-body">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Library />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/player" element={<Player />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </div>
    </Router>
  )
}

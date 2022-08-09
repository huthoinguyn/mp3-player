import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from '../../components/sidebar'
import Library from '../library'
import Feed from '../feed/feed'
import Trending from '../trending'
import Player from '../player'
import Favorite from '../favorite'
import './home.scss'

export default function Home() {
  return (
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
  );
}

import React from 'react'
import {useLocation} from 'react-router-dom'
import { useState,useEffect } from 'react'
import './player.scss'
import apiClient from '../../spotify'
import SongCard from '../../components/songCard'
import Queue from '../../components/queue'
import AudioPlayer from '../../components/audioPlayer'

export default function Player() {
  const location = useLocation()
  const [tracks,setTracks] = useState([])
  const [currentTrack, setCurrentTrack] = useState({})
  const [currentIndex,setCurrentIndex] = useState(0)
  useEffect(() => {
    if (location.state) {
      apiClient
        .get("playlists/" + location.state?.id + "/tracks")
        .then((res) => {
          setTracks(res.data.items)
          setCurrentTrack(res.data.items[0].track)
        })
    }
  }, [location.state])
  useEffect(() => {
    setCurrentTrack(tracks[currentIndex]?.track)
  },[currentIndex,tracks])
  return (
    <div className="screen-container flex">
      <div className="left-player">
        <AudioPlayer
          currentTrack={currentTrack}
          total={tracks}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </div>
      <div className="right-player">
        <SongCard album={currentTrack?.album} />
        <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />
      </div>
    </div>
  );
}

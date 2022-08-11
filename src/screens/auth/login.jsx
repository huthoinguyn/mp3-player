import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import apiClient, { loginEndpoint } from '../../spotify'
import './login.scss'

export default function Login() {
    const [image, setImage] = useState('https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png');
    useEffect(() => {
      apiClient.get("me").then((res) => {
        setImage(res.data.image[0].url)
      })
    }, [])
  return (
    <div className="login-page">
      <img
        src={image}
        alt="logo-spotify"
        className="logo"
      />
      <a href={loginEndpoint}>
        <div className="login-btn">LOG IN</div>
      </a>
    </div>
  )
}

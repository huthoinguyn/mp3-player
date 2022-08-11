import React from 'react'
import './albumImage.scss'

export default function AlbumImage({url}) {
  return (
    <div className="albumImage flex">
      <img src={url} alt="Album art" className="albumImage-art" />
      <div className="albumImage-shadow">
        <img src={url} alt="Album shadow" className="albumImage-shadow" />
      </div>
    </div>
  )
}

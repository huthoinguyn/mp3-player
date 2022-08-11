import React from 'react'
import AlbumImage from './albumImage'
import AlbumInfo from './albumInfo'
import './songCard.scss'

export default function SongCard({album}) {
  return (
    <div className='songCard flex'>
      <AlbumImage url={album?.images[0]?.url}/>
      <AlbumInfo album={album} />
    </div>
  )
}

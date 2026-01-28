import React from 'react'
import VideoEmbed from '../hooks/VideoEmbed'

const Video = () => {
  return (
    <div className='w-full flex items-center justify-center p-2 mt-2 rounded-xl'>
        <VideoEmbed  embedUrl='https://www.youtube.com/embed/LWMk9yFAE5M' title='Youtubr'/>
    </div>
  )
}

export default Video
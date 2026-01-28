import React from 'react';

interface VideoEmbedProps {
  embedUrl: string; // The specific embed URL, e.g., for YouTube it would be "https://www.youtube.com"
  title: string;
}

const VideoEmbed: React.FC<VideoEmbedProps> = ({ embedUrl, title }) => {
  return (
    <div className="">
      <iframe
        width="760"
        height="420"
        src={embedUrl}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={title}
        className='rounded-xl '
      />
    </div>
  );
};

export default VideoEmbed;

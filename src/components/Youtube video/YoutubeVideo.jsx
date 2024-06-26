import React from 'react';

const YouTubeEmbed = ({ videoId }) => {
  return (
    <div className="video-responsive">
      <iframe
        width="100%"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded YouTube"
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;

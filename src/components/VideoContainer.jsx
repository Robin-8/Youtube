import React, { useEffect, useState } from 'react';
import { YOUTUBE_API_URL } from '../utils/constant';
import VideoCard from '../../src/components/VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_API_URL);
      if (!data.ok) {
        throw new Error('Network response was not ok');
      }
      const json = await data.json();
      setVideos(json.items);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="ml-36 p-5 flex flex-wrap">
      {error && <div>Error: {error}</div>}
      {videos.map((video) => (
        <Link to={'/watch?v=' + video.id} key={video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;

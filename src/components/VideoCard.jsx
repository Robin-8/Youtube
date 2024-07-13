import React from "react";

const VideoCard = ({ info }) => {
  if(!info) return null


  const { snippet, statistics } = info;

  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-5 py-5 w-64 px-5 border-black shadow-md cursor-pointer">
      <img src={thumbnails.medium.url} alt="youtube-images" />
      <ul>
        <li className="text-sm">{title}</li>
        <li className="text-sm">{channelTitle}</li>
        <li className="text-sm">{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;

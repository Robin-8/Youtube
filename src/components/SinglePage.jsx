import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { handilburgOff } from "../slice/handBurgerSlice";
import { useSearchParams } from "react-router-dom";
import { VIDEO_BY_ID } from "../utils/constant";
import CommentContainer from "../../src/components/CommentContainer";
import LiveChat from "./LiveChat";

const SinglePage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [video, setVideo] = useState(null);

  const videoId = searchParams.get("v");
  console.log(videoId, "videoIdddd here");

  const getById = async (id) => {
    const url = `${VIDEO_BY_ID}&id=${id}`; // Assuming VIDEO_BY_ID contains the base URL and necessary parameters except the video ID
    const response = await fetch(url);
    const json = await response.json();
    setVideo(json.items[0]); // Since the response returns an array of items, we take the first item
    console.log(json, "videoBy id");
  };

  useEffect(() => {
    if (videoId) {
      getById(videoId);
    }
  }, [videoId]);

  useEffect(() => {
    dispatch(handilburgOff());
  }, [dispatch]);

  if (!video) return <div>Loading...</div>;

  const { channelTitle, thumbnails } = video.snippet;
  const statistics = video.statistics || {};
  const { likeCount, viewCount } = statistics;

  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="flex flex-col w-full">
      <div className="flex pt-20">
        <iframe
          width="800"
          height="500"
          src={embedUrl}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
        <div className="flex-grow h-[500px] ml-2">
          <LiveChat />
        </div>
      </div>
      <h1>{channelTitle}</h1>
      <p>Likes: {likeCount || "N/A"}</p>
      <p>Views: {viewCount || "N/A"}</p>
      <CommentContainer />
    </div>
  );
};

export default SinglePage;



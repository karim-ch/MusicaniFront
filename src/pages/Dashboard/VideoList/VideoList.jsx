import React from 'react';
import { useSelector } from 'react-redux';

const VideoList = () => {
  const videosList = useSelector(({ videos }) => videos);
  console.log(videosList);
  return (
    <div>
      {
        videosList.map(video => (
          <div>{video.title}</div>
        ))
      }
    </div>
  );
};

export default VideoList;

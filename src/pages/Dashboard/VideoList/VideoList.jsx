import React from 'react';
import { isEmpty } from 'lodash';
import { useSelector } from 'react-redux';
import getVideos from './getVideos';

const VideoList = () => {
  const videosList = useSelector(getVideos);
  return (
    <div>
      {
        !isEmpty(videosList) && videosList.map(video => (
          <div>{video.title}</div>
        ))
      }
    </div>
  );
};

export default VideoList;

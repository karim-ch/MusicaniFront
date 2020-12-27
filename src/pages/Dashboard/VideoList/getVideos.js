import { createSelector } from 'reselect';

const getVideos = createSelector(
  (state) => state.videos,
  (videos) => videos
);

export default getVideos;

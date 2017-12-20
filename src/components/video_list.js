import React from 'react';
import VideoListItem from './video_list_item';

// In functional components props are available as argument to function
// In case of class components it is available any where in the class and it can be accessed as this.props
// so Whenever we are refactoring functional component to class component accessing props with this key word is important
const VideoList = (props) => {
  //use built in map function for iterating array of videos. This will return a new array.
  // if you are not using a key when rendering a list of items react throws a waring to the console
  // This is the one of the optimization technique of react.
  // Keep the key uniqueand consistant. For optimization key should be consistant, it should not change when page is refreshed
  //React internally uses this unique key when ever there is an update in that particular location
  const videoItems = props.videos.map( (video) => {
    return (
      <VideoListItem
      onVideoSelect={props.onVideoSelect}
      key={video.etag}
      video={video} />
    );
  });

  return (
    // we use the keyword className for styling instead of class
    // this is because to avoid confusion for class components also use the keyword class
    <ul className="col-md-4 list-group">

    {videoItems}
    </ul>
  );
};

export default VideoList;

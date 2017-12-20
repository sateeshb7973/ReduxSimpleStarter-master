import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBIzC6baZLIh1g6v9mb04bbLUg-ubRYtN0';

// React is a Javascript library which returns html to show on the browser
// React is a combinations of many different components or views
// Component is again a group of Javascript functions which returns html
// It is going to be a 2 step process to put this html on page or document
// step 1 - create a new component that should return html
// step 2 - Take this generated HTML and put it on the page(in the DOM)
// We have React module to create or manage our components
// and ReactDOM module is used to interact the real DOM elements


// downward data flow , means only the most parent component is responsible for fetching data
// and here index.js is the most parent component so index.js must be responsible for fetching data

class App extends Component  {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('surfboats');

  }

  videoSearch(term) {

    // here we have used a fat arrow function as call back
    // the call back object can be data or foo or video
    // to make advantage of ES6 object destructuring chnage data to videos
    //so setState becomes this.setState({ videos: videos });
    // here key and value names are same than make it as
    //this.setState({ videos });
    YTSearch({key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo:  videos[0]
      });
    });
  }

  render() {
    //to handle throttle
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

  return (
    <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
        videos={this.state.videos}
        onVideoSelect={selectedVideo => this.setState({selectedVideo}) } />  {/*here we are sending the state of videos as props to the component Videolist*/}
    </div>
  );
  }

}

ReactDOM.render(<App />, document.querySelector('.container'));

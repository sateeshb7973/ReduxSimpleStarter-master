import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends Component {
  render() {
     return <input onChange={this.onInputChange} />;
  }

  // All browser that gets triggred by passes an event object
  // it can be event or e or whatever
  // generally the event object describes the event context that occured
  //
  onInputChange(event) {
    console.log(event.target.value);
  }

}

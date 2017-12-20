import React, { Component } from 'react';
import ReactDOM from 'react-dom';


// There are 2 ways to write components
// First one functional component and second one is Class component (ES6 syntax)
// Event handling in react has 2 steps
// First declare event handling function, and the function should ran when event occurs
// Second pass the event handler declared in step one to the JSX element which we want to moniter
// in this example JSX element is input element and pass event handler on input text changes

// State is a plain Javascript object that is used to record and react/respond to the user events
// each class based component that we have defined has its own state object and the state object will have key value pairs
// Whenever a component state changed the component immedetely re-renders and also forces to re-render its childres as well
// functional components doesn't have State
//  We will initialize the state in side the constructor method like this.state = {someobject}
// and the constructor method will be executed when a new object is created for the first time
// Only in the constructor method use this.state = some someobject
// other than constructor method to update the sate use this.setState() method

// Controlled field or controlled input or controlled form elements
// A controlled field is a form element whos value is set by the state rather than other way round
// like value={this.state.term}

// in legacy react for creating class we have to use createClass method
// and for state, we have to call getInitialState method



class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};
  }
  render() {
     return (
       <div className="search-bar">
        <input
        value={this.state.term}
        onChange={event => this.onInputChange(event.target.value)} />

       </div>
     );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }


}


export default SearchBar;

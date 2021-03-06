import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';

//Components
import Header from './components/navComponent/header';

//Pages
import Intro from './components/pages/intro';
import Summary from './components/pages/summary';
import Experience from './components/pages/experience';

// SASS compiled css
import './Assets/css/default.min.css';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
            <Header />
            <Intro />
            <Summary />
            <Experience />

      </div>
      </Router>
    );
  }
}

export default App;

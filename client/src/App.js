import React, { Component } from 'react';

import './App.css';

import {
  BrowserRouter as Router,
  // Link,
  Route
  // Redirect,
  // NotFoundRoute
} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Watermark from './components/Watermark';
// import Headline from './components/Headline';
// import Overview from './components/Overview';
// import Highlight from './components/Highlight';

import Subscribe from './components/Subscribe';
 
import Resources from './pages/Resources';
// import PageNotFound from './pages/PageNotFound';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
       <Navbar/>
       <Watermark />
      <Route exact path ="/" component={Home}/>
       <Route exact path="/Resources" component={Resources} />

        <Subscribe/>
      </div>
      </Router>
    );
  }
}

export default App;

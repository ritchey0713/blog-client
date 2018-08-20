import React, { Component } from 'react';
import { BrowserRouter  as Router, Route } from 'react-router-dom'


import Home from './containers/Home.js'
import AllPosts from './containers/AllPosts.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/posts' component={AllPosts} />
        </div>
      </Router>
    );
  }
}

export default App;

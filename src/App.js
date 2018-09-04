import React, { Component } from 'react';
import { BrowserRouter  as Router, Route } from 'react-router-dom'



import Home from './containers/Home.js'
import AllPosts from './containers/AllPosts.js'
import SinglePost from './components/SinglePost'
import PostForm from './components/PostForm.js'
import Contact from './components/static/Contact.js'
import About from './components/static/About.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/about' component={About} />
          <Route exact path='/posts' component={AllPosts}/>
          <Route exact path='/posts/:id' component={SinglePost}/>
          <Route path='/post/new' component={PostForm} />
        </div>
      </Router>
    );
  }
}

export default App;

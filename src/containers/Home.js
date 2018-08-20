import React, { Component } from 'react';


import './Home.css';
import Navbar from '../components/static/Navbar'
import Footer from '../components/static/Footer'
import Jumbotron from '../components/static/Jumbotron'



class Home extends Component {
  render(){
    return(
      <div>
      <Navbar />
      <Jumbotron title="Welcome to Looking Glass" subtitle="Take a glance into the lives of our users!"/>
        <div className="container">
          <hr />
          <p> This app is free to use to post photos from your life! There is no sign up and you are free to scroll
          but, if you want to leave comments for authors, you have to sign in using your email!</p>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Home

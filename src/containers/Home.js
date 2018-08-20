import React, { Component } from 'react';


import './App.css';
import Navbar from '../components/static/Navbar'
import Footer from '../components/static/Footer'
import Jumbotron from '../components/static/Jumbotron'



class Home extends Component {
  render(){
    return(
      <div>
      <Navbar />
      <Jumbotron title="Welcome" subtitle="put something here?!"/>
        <div className="container">
          <h2>Welcome!</h2>
          <hr />
        </div>
        <Footer />
      </div>
    )
  }
}

export default Home

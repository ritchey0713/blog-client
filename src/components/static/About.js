import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Jumbotron from './Jumbotron'

const About = () => {
    return(
      <div>
        <div >
        <Navbar />
        <Jumbotron title={"Profile"} subtitle={'coming soon!'} />
          <h2>Profile</h2>
            <p>UNDER CONSTRUCTION</p>
        </div>
        <Footer />
      </div>
    )
  }


export default About

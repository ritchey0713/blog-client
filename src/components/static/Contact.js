import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Jumbotron from './Jumbotron'

const Contact = () => {
    return(
      <div>
        <div >
        <Navbar />
        <Jumbotron title={"Contact"} subtitle={"thank you for your time"} />
          <h2>Contact Us</h2>
            <p>If you have any issues, please contact us and we will work to get it back up for you as soon as possible thank you!</p>
              <br />
              <br />
              <br />
        </div>
      </div>
    )
  }

export default Contact

import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Jumbotron from './Jumbotron'

const Contact = (props) => {
    return(
      <div>
      <Navbar />
      <Jumbotron title="Contact Us" subtitle="If you have any issues please reach out to us!"/>
        <div className="container">
          <h2>Contact Us</h2>
            <p>dlskfjlkasdfhlksajdbfnlkjasjhflkjsadhflkjsadhfkljasdhflkjshdfljk
            skjdfbklsdhflkjsdahflkjsadhflkjsdhflkshdfkljhsdlfkhsdkljfhskjldfhjlkjsdh
            sdkfjls;dfjls;kdfjl;ksdjf;lksdjf;lksdjf;lkdjsf;lkjsdak;lfjsa;dlkfj;klsadjfadkls;</p>
        </div>
        <Footer />
      </div>
    )
  }

export default Contact

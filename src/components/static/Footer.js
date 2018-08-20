import React from 'react'
import './Footer.css'

const Footer = () => {
    return(
      <div>
        <footer className="footer">
          <div className="container">
            <span className="text-muted">My WebSite{new Date().getFullYear()}</span>
          </div>
        </footer>
      </div>
    )
  }
export default Footer

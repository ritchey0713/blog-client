import React from 'react'
import './JumboNewPost.css';

const JumboNewPost = (props) =>{

    return(
      <div className="jumboNewPost jumbotron-fluid">
        <div className='container'>
          <h1 className="display-3">{props.title}</h1>
          <p className="lead">{props.subtitle}</p>
        </div>
      </div>
    )
  }

export default JumboNewPost

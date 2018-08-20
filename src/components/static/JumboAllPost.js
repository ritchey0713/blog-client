import React from 'react'
import './JumboAllPost.css';

const JumboNewPost = (props) =>{

    return(
      <div className="jumboAllPost jumbotron-fluid">
        <div className='container'>
          <h1 className="display-3">{props.title}</h1>
          <p className="lead">{props.subtitle}</p>
        </div>
      </div>
    )
  }

export default JumboNewPost

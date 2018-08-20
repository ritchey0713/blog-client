import React, { Component } from 'react'
import{ Link } from 'react-router-dom'
import { connect } from 'react-redux'
import CSSTransitionGroup from 'react-addons-css-transition-group'
import './RenderPhotos.css'

class RenderPhotos extends Component {

  render(){
    const { post, comments } = this.props
    return(
      <div className="grid-container" key={post.id}>
        <div className="grid-wrap">
            <Link to={`/posts/${post.id}`}>
            <img src={post.img_url} alt={post.caption} className='grid-photo'/>
            </Link>
            <figcaption>
              <p>{post.caption}</p>
              <div className="control-buttons">
                <Link className="button" to={`posts/${post.id}`}>
                  Add Comment
                </Link>
              </div>
            </figcaption>
          </div>
      </div>
    )
  }
}


export default RenderPhotos

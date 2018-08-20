import React, { Component } from 'react'
import{ Link } from 'react-router-dom'
import { connect } from 'react-redux'
import CSSTransitionGroup from 'react-addons-css-transition-group'

import { incrementLike } from '../actions/posts.js'

class RenderPhotos extends Component {
  render(){
    const { post, i, comments } = this.props
    debugger
    return(
      <div classNmae="card-container" key={post.id}>
        <div className="card">
          <div className="photo">
            <Link to={`/posts/${post.id}`}>
            <img src={post.img_url} alt={post.caption} />
            </Link>
            <CSSTransitionGroup transitionName="like" transitionEnterTimeout={500}
              transitionLeaveTimeout={500}>
              <span key={post.likes} className="likes-heart">{post.likes}</span>
            </CSSTransitionGroup>
            <figcaption>
              <p>{post.caption}</p>
              <div classNmae="control-buttons">
              
                <Link className="button" to={`posts/${post.id}`}>

                </Link>
              </div>
            </figcaption>
          </div>

        </div>
      </div>
    )
  }
}
export default RenderPhotos

import React, { Component } from 'react'
import{ Link } from 'react-router-dom'
import { connect } from 'react-redux'
import CSSTransitionGroup from 'react-addons-css-transition-group'

const PostGrid = ({ post }) => (
  <div>
  <div className="card-container" key={post.id}>
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
            <div className="control-buttons">
            // add like button here
              <Link className="button" to={`posts/${post.id}`}>
                <span className="comment-count">
                  <span className="speech-bubble"></span>
                    // comment stuff here
                  </span>
              </Link>
            </div>
          </figcaption>
        </div>
      </div>
    </div>
  </div>



)
export default PostGrid

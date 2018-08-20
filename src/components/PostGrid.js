import React, { Component } from 'react'
import{ Link } from 'react-router-dom'
import { connect } from 'react-redux'
import CSSTransitionGroup from 'react-addons-css-transition-group'

class PostGrid extends Component {
  render(){
    const { post, index, comments } = this.props
    return(
      <div>
        <div>
          <div>
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
                <button className="heart" onClick={this.props.addLike(index)}> &hearts; {post.likes} </button>
                <Link className="button" to={`posts/${post.id}`}>
                  <span className="comment-count">
                    <span classNmae="speech-bubble"></span>
                      {comments[post.id] ? comments[post.id].length : 0 }
                    </span>
                </Link>
              </div>
            </figcaption>
          </div>
        </div>
      </div>
    )
  }
}

export default PostGrid

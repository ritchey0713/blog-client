import React, { Component } from 'react'
import{ Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './RenderPhotos.css'
import LikeButton from './LikeButton.js'
import { likePost } from '../actions/posts.js'
import { sortingPosts } from '../actions/posts.js'
import { sortingBestPosts } from '../actions/posts.js'

class RenderPhotos extends Component {

  handleOnClick = () => {
    this.props.likePost(this.props.post)
  }

  render(){
    const { post } = this.props
    return(
      <div>
      <button onClick={this.props.sortingPosts}> Sort by least Likes!</button>
      <button onClick={this.props.sortingBestPosts}> Sort by most Likes!</button>
      <div className="grid-container" key={post.id}>
        <div className="grid-wrap">
            <Link to={`/posts/${post.id}`}>
            <img src={post.img_url} alt={post.caption} className='grid-photo'/>
            </Link>
            <figcaption>
              <p className="container">{post.caption}</p>
              <div className="control-buttons">
                <Link className="button" to={`posts/${post.id}`}>
                  Add Comment
                </Link>
                <LikeButton post={post} likePost={this.handleOnClick} />
              </div>
            </figcaption>
          </div>
      </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return({
    posts: state.posts
  })
}


export default connect( mapStateToProps, {
  likePost,
  sortingPosts,
  sortingBestPosts
})(RenderPhotos)

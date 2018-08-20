import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import RenderPhotos from './RenderPhotos'

class SinglePost extends Component{

  componentDidMount(){
    const { id } = this.props.match.params
    this.props.getPost(id)
  }

  render(){
    const { postId } = this.props.params
    const index = this.props.posts.findIndex((post =>
    post.id === postId))
    const post = this.props.posts[index]
    const postComments = this.props.comments[postId] || []

    return(
      <div>
        <RenderPhotos index={index}
        post={post}
        {...this.props} />
      </div>
    )
  }
}

export default SinglePost

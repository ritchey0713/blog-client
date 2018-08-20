import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { getPost } from '../actions/posts.js'


class SinglePost extends Component{

  componentDidMount(){
    const { id } = this.props.match.params
    this.props.getPost(id)
  }

  render(){
    return(
      <div>
      i am a single post here!!!
        {this.props.posts.title}
        {this.props.posts.caption}
        {this.props.posts.img_url}
        {this.props.posts.likes}
      </div>
    )
  }
}
const mapStateToProps = state => {
  return({
    posts: state.posts
  })
}

export default connect(mapStateToProps, {
  getPost
})(SinglePost)

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './SinglePost.css'
import Comments from './comments/Comments.js'

import { getPost } from '../actions/posts.js'

import { deletePost } from '../actions/posts.js'

class SinglePost extends Component{

  componentDidMount(){
    const { id } = this.props.match.params
    this.props.getPost(id)
  }

  handleOnClick = () => {
const { id } = this.props.match.params
this.props.deletePost(id)
this.props.history.push('/')
}


  render(){
    console.log(this.props)
    return(
      <div>
        <h1 className="container">{this.props.posts.title}</h1>
      <figcaption className="container-single">
        <h6>Caption:{this.props.posts.caption} <br /></h6>
        <img src={this.props.posts.img_url} alt={this.props.posts.caption} className='grid-photo'/>
            <Comments post={this.props.posts} className="comments"/>
          </figcaption>
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

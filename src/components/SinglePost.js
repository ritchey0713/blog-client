import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import './SinglePost.css'
import Comments from './comments/Comments.js'
import { getPost } from '../actions/posts.js'
import { deletePost } from '../actions/posts.js'
import Navbar from './static/Navbar'
import JumboSinglePost from './static/JumboSinglePost'

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

    return(
      <div>
      <Navbar />
      <JumboSinglePost title={this.props.posts.title} subtitle={this.props.posts.caption} />
        <figcaption className="container-single">
        <strong> &hearts;Likes: {this.props.posts.likes}</strong>
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

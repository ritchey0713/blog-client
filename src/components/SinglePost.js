import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './SinglePost.css'

import { getPost } from '../actions/posts.js'


class SinglePost extends Component{

  componentDidMount(){
    const { id } = this.props.match.params
    this.props.getPost(id)
  }


  render(){
    console.log(this.props)
    return(
      <div>
        <h1 className="container">{this.props.posts.title}</h1>
        <h6 className="container">Caption:{this.props.posts.caption} <br />
        <button>{this.props.posts.likes}</button></h6>
        <img src={this.props.posts.img_url} alt={this.props.posts.caption} className='grid-photo'/>
          <br />


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

import React, { Component } from 'react'
import { connect } from 'react-redux'

import './SinglePost.css'
import Comments from './comments/Comments.js'
import { getPost } from '../actions/posts.js'
import { deleteItem } from '../actions/posts.js'
import Navbar from './static/Navbar'
import JumboSinglePost from './static/JumboSinglePost'

class SinglePost extends Component{


  componentDidMount(){
    const { id } = this.props.match.params
    this.props.getPost(id)
  }

  handleOnClick = () => {
const { id } = this.props.match.params
this.props.deleteItem(id)
this.props.history.push('/')
}

  render(){
    console.log(this.props)
    return(
      <div>
      <Navbar />
      <JumboSinglePost title={this.props.posts.title} subtitle={this.props.posts.caption} />
        <figcaption className="container-single">
        <strong> &hearts;Likes: {this.props.posts.likes}</strong>

          <img src={this.props.posts.img_url} alt={this.props.posts.caption} className='grid-photo'/>
          <button onClick={this.handleOnClick}> DELETE POST </button>
            <Comments post={this.props.posts} className="comments"/>
          </figcaption>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return({
    posts: state.posts[0]
  })
}

export default connect(mapStateToProps, {
  getPost,
  deleteItem
})(SinglePost)

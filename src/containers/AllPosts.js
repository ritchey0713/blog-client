import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getPosts } from '../actions/posts.js'
import RenderPhotos from '../components/RenderPhotos.js'
import './AllPosts.css'
import JumboAllPost from '../components/static/JumboAllPost.js'
import Navbar from '../components/static/Navbar.js'

class AllPosts extends Component {

  componentDidMount(){
    this.props.getPosts()
  }

  render(){
    const allPost = this.props.posts
    
    return(
      <div >
      <Navbar />
      <JumboAllPost title="See what others are up to!" subtitle={"click to comment!"}/>
          {allPost.map(post =>
          <RenderPhotos key={post.id} index={post.id} post={post}/>)}
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
  getPosts
})(AllPosts)

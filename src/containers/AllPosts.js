import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getPosts } from '../actions/posts.js'
import PostGrid from '../components/PostGrid.js'
import './AllPosts.css'

class AllPosts extends Component {

  componentDidMount(){
    this.props.getPosts()
  }

  render(){
    const { post, index, comments } = this.props
    return(
      <div >
        <h3>See what others are up to!</h3>
          {this.props.posts.map(post =>
          <PostGrid key={post.id} {...this.props} post={post}/>)}
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

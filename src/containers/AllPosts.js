import React, { Component } from 'react'
import { connect } from 'react-redux'

import './AllPosts.css'

class AllPosts extends Component {

  componentDidMount(){
    this.props.getPosts()
  }

  render(){
    return(
      <div>
      index component
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

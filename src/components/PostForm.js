import React, { Component } from 'react'
import { connect } from 'react-redux'

import { updatePostFormData } from '../actions/postFormData'
import { createPost } from '../actions/posts'


class PostForm extends Component {

  handleOnChange = (e) => {
    const { name, value } = e.target
    const currentPostData = Object.assign({}, this.props.postFormData, {
          [name]: value
        })
        this.props.updatePostFormData(currentPostData)
    }

  handleOnSubmit = (e) => {
    e.preventDefault()
    this.props.createPost(this.props.postFormData)
    this.props.history.push('/')
  }


  render(){
    const { title, caption, img_url } = this.props.postFormData
    return(
      <div>
      <h1>Upload a new Post!</h1>
        <form onSubmit={this.handleOnSubmit}>
          <input type="text"
          onChange={this.handleOnChange}
          name="title"
          value={title}
          placeholder="title" />

          <input type="text"
          onChange={this.handleOnChange}
          name="caption"
          value={caption}
          placeholder="caption" />

          <input type="text"
          onChange={this.handleOnChange}
          name="img_url"
          value={img_url}
          placeholder="img_url" />

          <input type="submit" />

        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    postFormData: state.postFormData
  }
}

export default connect(mapStateToProps, {
  updatePostFormData,
  createPost
})(PostForm)

import React, { Component } from 'react'
import { connect } from 'react-redux'

class PostForm extends Component {
  render(){
    return(
      <div>
      <h1>Upload a new Post!</h1>
    <form onSubmit={this.handleOnSubmit}>
      <input type="text"
      onChange={this.handleOnChange}
      ref="title"
      placeholder="title" />
      <input type="text"
      onChange={this.handleOnChange}
      ref="caption"
      placeholder="caption" />
      <input type="text"
      onChange={this.handleOnChange}
      ref="img_url"
      placeholder="img_url" />
    </form>
      </div>
    )
  }
}

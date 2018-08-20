import React, { Component } from 'react'

class CommentsForm extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    const { postId } = this.props.params
    const author = this.refs.author.value
    const comment = this.refs.comment.value
    this.props.addComment(postId, author, comment)
    this.refs.commentForm.reset()
  }



  render(){
    return(
      <form onSubmit={this.handleSubmit} ref="commentForm" className="commentForm">
        <input type="text" ref="author" placeholder="author" />
        <input type="text" ref="comment" placeholder="comment" />
        <input type="submit" hidden />
      </form>
    )
  }
}

export default CommentsForm

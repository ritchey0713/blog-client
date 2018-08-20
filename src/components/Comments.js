import React, { Component} from 'react'
import CommentsForm from './CommentsForm'

class Comments extends Component {
  renderComment(comment, index){
      return(
        <div key={index}>
          <p>
            <strong>{comment.user}</strong>
            {comment.text}
            <button onClick={this.props.removeComment(this.props.params.postId, index)} className="remove-comment">&times;</button>
          </p>
          <CommentsForm  {...this.props}/>
        </div>
      )
  }
  render(){
    return(
      <div className="comments">
        
      </div>
    )
  }
}

export default Comments

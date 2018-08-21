import React, { Component } from 'react'

class LikeButton extends Component {
  render(){
    return(
      <div>
        <button>
          onClick={this.props.likePost}
          likes: {this.props.posts.likes}
        </button>
      </div>
    )
  }
}

export default LikeButton

import React, { Component } from 'react'

import Disqus from 'disqus-react'

class Comments extends Component{
  render(){
    const disqusShortname = 'example';
  const disqusConfig = {
      url: this.props.post.url,
      identifier: this.props.post.id,
      title: this.props.post.title,
  };

  return (
      <div className="comments">
          <h1>{this.props.post.title}</h1>
          <Disqus.CommentCount shortname={disqusShortname} config={disqusConfig}>
              Comments
          </Disqus.CommentCount>
          <p>{this.props.post.body}</p>
          <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
      </div>
    );
  }
}

export default Comments

import React, { Component } from 'react'

import Disqus from 'disqus-react'

class Comments extends Component{
  render(){
    const disqusShortname = 'localhost-3000';
  const disqusConfig = {
      url: this.props.post.url,
      identifier: this.props.post.id,
      title: this.props.post.title,
  };

  return (
      <div>
          <Disqus.CommentCount shortname={disqusShortname} config={disqusConfig}>
          </Disqus.CommentCount>
          <p>{this.props.post.body}</p>
          <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
      </div>
    );
  }
}

export default Comments

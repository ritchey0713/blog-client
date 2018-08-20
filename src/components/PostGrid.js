import React, { Component } from 'react'
import{ Link } from 'react-router-dom'
import { connect } from 'react-redux'
import CSSTansitionGroup from 'react-addons-css-transition-group'

class PostGrid extends Component {
  render(){
    return(
      <div>
        <div>
          <div>
            <Link to={`/posts/${post.id}`}>
              <img src={post.img_url} alt={post.caption} />
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

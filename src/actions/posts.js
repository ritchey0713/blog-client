const API_URL = process.env.REACT_APP_API_URL

const addPost = post => {
  return {
    type: 'CREATE_NEW_POST',
    post
  }
}

const setPosts = posts => {
  return {
    type: 'GET_ALL_POSTS',
    posts
  }
}

const setPost = post => {
  return {
    type: 'GET_SINGLE_POST',
    post
  }
}


export const createPost = post => {
  return dispatch => {
    return fetch(`${API_URL}/posts`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({post: post})
    })
    .then(resp => resp.json())
    .then(post =>{
      dispatch(addPost(post))
    })
  }
}

export const getPosts = () => {
  return dispatch => {
    return fetch(`${API_URL}/posts`)
    .then(resp => resp.json())
    .then(posts => dispatch(setPosts(posts)))
  }
}

export const getPost = id => {
  return dispatch => {
    return fetch(`${API_URL}/posts/${id}`)
    .then(resp => resp.json())
    .then(post => dispatch(setPost(post)))
  }
}

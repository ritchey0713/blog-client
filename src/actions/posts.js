const API_URL = process.env.REACT_APP_API_URL
// action creators
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

const deletePost = post => {
  return {
    type: 'DELETE_POST',
    post
  }
}

const addLikes = post => {
  return {
    type: 'ADD_LIKE',
    post
  }
}

export const sortingPosts = posts => {
  return {
    type: 'SORT_POSTS',
    posts
  }
}

export const sortingBestPosts = posts => {
  return {
    type: 'SORT_BEST_POSTS',
    posts
  }
}
// async actions

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


export const deleteItem = post => {
  return dispatch => {
    return fetch(`${API_URL}/posts/${post}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({post : post})
    })
    .then(resp => resp.json())
    .then(post => {
      dispatch(deletePost(post))
    })
  }
}

export const likePost = post => {
  const updatedLikes = Object.assign(...post, {likes: post.likes + 1})
  return dispatch => {
    return fetch(`${API_URL}/posts/${post.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
        body: JSON.stringify({post: updatedLikes})
    })
    .then(resp => resp.json())
    .then(post => {
      dispatch(addLikes(post))
    })
  }
}

const API_URL = process.env.REACT_APP_API_URL

const addPost = post => {
  return {
    type: 'CREATE_NEW_POST',
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
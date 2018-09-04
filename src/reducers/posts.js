export default (state = [], action) => {

  switch(action.type){
    case "CREATE_NEW_POST":
      return state.concat(action.post)

    case "GET_ALL_POSTS":
      return action.posts

    case 'GET_SINGLE_POST':
      return [action.post]

    case 'ADD_LIKE':
      return state.map((post) => {
        if (post.id === action.post.id){
          return action.post
        } else {
          return post
        }
      })

    default:
      return state
  }
}

export default (state = [], action) => {
  switch(action.type){
    case "CREATE_NEW_POST":
      return state.concat(action.post)

    case "GET_ALL_POSTS":
      return action.posts

    default:
      return state
  }
}

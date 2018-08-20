export default (state = [], action) => {

  switch(action.type){
    case "CREATE_NEW_POST":
      return state.concat(action.post)

    case "GET_ALL_POSTS":
      return action.posts

    case 'GET_SINGLE_POST':
      return action.post

    case 'ADD_LIKE':
      const index = action.index
        return [
          ...state.slice(0,index),
          {...state[index], likes: state[index].likes + 1},
          ...state.slice(index + 1)
        ]

    default:
      return state
  }
}

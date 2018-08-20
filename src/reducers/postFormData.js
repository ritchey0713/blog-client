const initialState = {
  title: '',
  caption: '',
  img_url: '',
  likes: 0,
}

export default (state = initialState, action) => {
  switch(action.type){
    case 'UPDATED_POST':
      return action.postFormData

    default:
      return state
  }
}

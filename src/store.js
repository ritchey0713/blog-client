import { Provider } from 'react-redux';
import { createStore,
         applyMiddleware,
         combineReducers } from 'redux';
import thunk from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import posts from './reducers/posts'
import postFormData from './reducers/postFormData'

const reducers = combineReducers({
  posts,
  postFormData,
  form: formReducer
})

const middleware = [thunk]

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware)
)

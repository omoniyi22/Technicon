import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk'

import rootRuducer from './reducers'

const configureStore = () => {
  const store = createStore(
    rootRuducer,
    compose(
      applyMiddleware(thunk)
      // , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  )

  return store
}

export default configureStore();
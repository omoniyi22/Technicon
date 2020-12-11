import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk'
import { persistStore } from 'redux-persist'
import logger from 'redux-logger'

import rootRuducer from './reducers'

const configureStore = () => {
  const store = createStore(
    rootRuducer,
    compose(
      applyMiddleware(thunk)
      // , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  )
  const persistor = persistStore(store)
  return { store, persistor }
}

export default configureStore();
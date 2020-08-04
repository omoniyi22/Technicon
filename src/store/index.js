import {applyMiddleware, createStore, compose} from 'redux';
// import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk'

// import rootSaga from './sagas'
import rootRuducer from './reducers'

const configureStore =()=>{
    const store = createStore(
        rootRuducer,     
        compose(
          applyMiddleware(thunk),
          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
     )
    )
   
    return store
}

export default configureStore();
import {all} from 'redux-saga/effects'

import errorSaga from './errorSaga';
import authSaga from './authSaga.js';

export default function* rootSaga(){
    yield all([errorSaga(), authSaga()])
}

import {takeEvery, put} from 'redux-saga/effects';

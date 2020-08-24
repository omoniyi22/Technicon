import {} from './../types'
import { take, put, takeEvery } from "redux-saga/effects";
import {} from './../actions/'

function* errorSaga(){
  yield put({type: LOGIN_FAIL, })
}

export default function* watchErrorSaga(){
  yield takeEvery({type: GET_ERRORS})
}
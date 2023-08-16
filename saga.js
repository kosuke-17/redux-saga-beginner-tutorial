import { put, takeEvery, all, call } from 'redux-saga/effects'

export function* helloSaga() {
  console.log('hello saga!')
}

export const delay = (ms) => new Promise((res) => setTimeout(res, ms))

// 1つ目の関数のPrimseがresolvedになったら2つ目の関数実行
export function* incrementAsync() {
  yield put({ type: 'INCREMENT' })
  yield call(delay, 3000)
}

export function* watchIncremetnAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export default function* rootSaga() {
  yield all([helloSaga(), watchIncremetnAsync()])
}

import test from 'tape'
import { put, call } from 'redux-saga/effects'
import { incrementAsync, delay } from './saga'

test('incrementAsync Saga test', (assert) => {
  const gen = incrementAsync()

  assert.deepEqual(
    gen.next().value,
    put({ type: 'INCREMENT' }),
    'incrementAsync Saga must dispatch an INCREMENT action'
  )

  assert.deepEqual(
    gen.next().value,
    call(delay, 3000),
    'incrementAsync Saga must call delay(3000)'
  )

  assert.deepEqual(
    gen.next(),
    { done: true, value: undefined },
    'incrementAsync Saga must be done'
  )

  assert.end()
})

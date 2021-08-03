import { put, delay } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'
import { setListSearch } from './listSearchSlice'

export function* handleInputKeyword(action: PayloadAction<string>) {
  yield delay(500)
  yield put(setListSearch(action.payload))
}
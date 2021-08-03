import { call, put } from 'redux-saga/effects'
import { failedCountryList, fetchCountryList, setCountryList } from './countryListSlice'

export function* handleGetCountryList() {
  try {
    const response = yield call(fetchCountryList)
    yield put(setCountryList(response))
  } catch(error) {
    yield put(failedCountryList(error))
  }
}
import { takeLatest } from "redux-saga/effects"
import { handleGetCountryList } from "../../features/countryList/countryListSaga"
import { getCountryList } from "../../features/countryList/countryListSlice"

export function* rootSaga() {
  yield takeLatest(getCountryList.type, handleGetCountryList)
}
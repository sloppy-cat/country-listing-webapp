import { all, takeLatest } from "redux-saga/effects"
import { handleGetCountryList } from "../../features/countryList/countryListSaga"
import { getCountryList } from "../../features/countryList/countryListSlice"
import { handleInputKeyword } from "../../features/listSearch/listSearchSaga"
import { getListSearch } from "../../features/listSearch/listSearchSlice"

export function* rootSaga() {
  yield all([
    takeLatest(getCountryList.type, handleGetCountryList),
    takeLatest(getListSearch.type, handleInputKeyword)
  ])
}
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import createSagaMiddleware from '@redux-saga/core'
import countryListReducer, { countryList } from '../../features/countryList/countryListSlice'
import { rootSaga } from './rootSaga'
import listSortReducer, { listSort } from '../../features/listSort/listSortSlice'

const sagaMiddleware = createSagaMiddleware()

function createStore() {

  const store = configureStore({
    reducer: combineReducers({[countryList]: countryListReducer, [listSort]: listSortReducer}),
    middleware: [sagaMiddleware]
  })
  sagaMiddleware.run(rootSaga)

  return store
}

export default createStore
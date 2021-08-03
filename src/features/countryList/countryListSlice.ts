import { createAsyncThunk, createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { Country } from '../../@lib/type'

interface CountryListState {
  countryList: Country[]
  loading: boolean
  error: any
}

export const fetchCountryList = async () => {
  return axios.request<Country[]>({
    url: "https://restcountries.eu/rest/v2/all?fields=alpha2Code;capital;name;region;callingCodes",
    method: 'GET'
  }).then((res)=>res.data).catch((error)=>error)
}

const countryListSlice = createSlice({
  name: 'countryList',
  initialState: {
    countryList: [],
    loading: false,
    error: ''
  } as CountryListState,
  reducers: {
    getCountryList(state) {
      state.loading = true
    },
    setCountryList(state, action: PayloadAction<Country[]>) {
      state.countryList = action.payload
      state.loading = false
    },
    failedCountryList(state, action) {
      state.loading = false
      state.error = action.payload
    },
    addCountry(state, action: PayloadAction<Country>) {
      state.countryList.unshift(action.payload)
    },
    removeCountry(state, action: PayloadAction<number>) {
      state.countryList = state.countryList.filter((_, index) => index !== action.payload)
    }
  },
})
export const countryListSelector = (state: {[countryListSlice.name]: CountryListState}) => state[countryListSlice.name]
export const countryList = countryListSlice.name
export const { getCountryList, setCountryList, failedCountryList, addCountry, removeCountry} = countryListSlice.actions
export default countryListSlice.reducer
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const listSearchSlice = createSlice({
  name: 'listSearch',
  initialState: {
    keyword: '',
  },
  reducers: {
    setListSearch(state, action: PayloadAction<string>) {
      state.keyword = action.payload.toUpperCase()
    },
  },
})
export const listSearch = listSearchSlice.name
export const listSearchSelector = (state: {[listSearchSlice.name]: {keyword: string}}) => state[listSearch]
export const { setListSearch } = listSearchSlice.actions
export default listSearchSlice.reducer
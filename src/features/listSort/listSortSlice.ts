import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { countryAttribute } from '../../@lib/type'

export interface ListSortState {
  sortedBy: countryAttribute | ''
  order: 'asc' | 'desc' | ''
}

const listSortSlice = createSlice({
  name: 'listSort',
  initialState: {
    sortedBy: '',
    order: ''
  } as ListSortState,
  reducers: {
    setListSort(state, action: PayloadAction<ListSortState['sortedBy']>) {
      if (state.sortedBy === action.payload) {
        state.order = state.order !== 'desc' ? 'desc' : 'asc'
      } else {
        state.sortedBy = action.payload
        state.order = 'asc'
      }
    },
  },
})
export const listSortSelector = (state: {[listSortSlice.name]: ListSortState}) => state[listSortSlice.name]
export const listSort = listSortSlice.name
export const { setListSort } = listSortSlice.actions
export default listSortSlice.reducer
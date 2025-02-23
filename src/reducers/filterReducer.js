/* eslint-disable no-case-declarations */
import { createSlice } from '@reduxjs/toolkit'

const initialState = 'ALL'

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterChange(state, action) {
      console.log('action:', action)
      const filter = action.paylod
      console.log('state:', state)
      console.log('filter:', filter)
      return action.payload
    }
  }
})

export const { filterChange } = filterSlice.actions
export default filterSlice.reducer
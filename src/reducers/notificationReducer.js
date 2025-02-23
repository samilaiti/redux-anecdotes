import { createSlice } from '@reduxjs/toolkit'

const initialState = null

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    showNotification(state, action) {
      console.log('not state', state)
      console.log('not action', action)
      console.log('payload', action.payload)
      const notification = action.payload
      return notification
    },
    hideNotification(state, action) {
      console.log('not state', state)
      console.log('not action', action)
      const notification = action.payload
      return notification
    }
  }
})

export const { showNotification, hideNotification } = notificationSlice.actions
export default notificationSlice.reducer
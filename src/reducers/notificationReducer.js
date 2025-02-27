import { createSlice } from '@reduxjs/toolkit'

const initialState = null

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    hideNotification(state, action) {
      console.log('not state', state)
      console.log('not action', action)
      const notification = action.payload
      return notification
    },
    setNotification(state, action) {
      return action.payload
    }
  }
})

export const showNotification = (notification, time) => {
  return async dispatch => {
    dispatch(setNotification(notification))
    setTimeout(() => {
      dispatch(hideNotification(null))
    }, time * 1000)
  }
}

export const { hideNotification, setNotification } = notificationSlice.actions
export default notificationSlice.reducer
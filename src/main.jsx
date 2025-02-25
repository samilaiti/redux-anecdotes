import ReactDOM from 'react-dom/client'
// import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
// import { configureStore } from '@reduxjs/toolkit'
import App from './App'
import store from './store'

// import anecdoteReducer from './reducers/anecdoteReducer'
// import filterReducer from './reducers/filterReducer'

// const reducer = combineReducers({
//   anecdotes: anecdoteReducer,
//   filter: filterReducer
// })

// const store = createStore(reducer)
// const store = configureStore({
//   reducer: {
//     anecdotes: anecdoteReducer,
//     filter: filterReducer
//   }
// })

console.log(store.getState())

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
/* eslint-disable no-case-declarations */
import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    appendAnecdote(state, action) {
      state.push(action.payload)
      state.sort((a, b) => a.votes - b.votes)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = content => {
  console.log('content:', content)
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const vote = id => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    const anecdoteToChange = anecdotes.find(n => n.id === id)
    const changedAnecdote = { ...anecdoteToChange, votes: anecdoteToChange.votes + 1 }
    anecdoteService.giveVote(id, changedAnecdote)
      .then(updated => {
        const changedState =  anecdotes.map(anecdote => anecdote.id !== id ? anecdote : updated)
        const sorted = changedState.sort((a, b) => a.votes - b.votes)
        dispatch(setAnecdotes(sorted))    
      })
  }
}

export const { appendAnecdote, setAnecdotes } = anecdoteSlice.actions

export default anecdoteSlice.reducer
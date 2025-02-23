import { useSelector, useDispatch } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { hideNotification, showNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(({ filter, anecdotes }) => {
    if (filter === 'ALL') {
      return anecdotes
    }
    return anecdotes.filter(anecdote => 
      anecdote.content.toLowerCase().includes(filter.toLowerCase())
    )
  })

  const handleVote = (id) => {
    dispatch(vote(id))
    console.log('handle1', id)
    console.log('handle2', anecdotes)
    const anecdote = anecdotes.find(a => a.id === id)    
    const notification = `you voted '${anecdote.content}'`
    dispatch(showNotification(notification))
    setTimeout(() => {
      dispatch(hideNotification(null))
    }, 3000)
  }
  
  return (
    <div>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList


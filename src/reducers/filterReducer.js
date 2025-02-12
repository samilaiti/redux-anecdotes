/* eslint-disable no-case-declarations */

const filterReducer = (state = 'ALL', action) => {
  switch (action.type) {
    case 'SET_FILTER':
      const filter = action.paylod
      console.log('state:', state)
      console.log('filter', filter)
      return filter
    default:
      return state
  }
}

export const filterChange = filter => {
  return {
    type: 'SET_FILTER',
    paylod: filter
  }
}

export default filterReducer
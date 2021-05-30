//provider.js
import React, { useReducer } from 'react'
import PropTypes from 'prop-types'
import { BookReviewContext } from './'

const initialState = {
  searchBook: ''
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH_BOOK':
      return {
        searchBook: action.payload
      }
    default:
      throw new Error()
  }
}

export const ProviderContext = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <BookReviewContext.Provider value={[state, dispatch]}>
      {props.children}
    </BookReviewContext.Provider>
  )
}

ProviderContext.propTypes = {
  children: PropTypes.array
}
import React, { useEffect, useRef, useContext } from 'react'
import PropTypes from 'prop-types'
import { ListItemOutline } from '../style'
import { BookReviewContext } from '../../../context'

LoadMore.propTypes = {
  books: PropTypes.array,
  fetchMore: PropTypes.func
}

LoadMore.defaultProps = {
  books: [],
}

export default function LoadMore({ books, fetchMore }) {
  const [state] = useContext(BookReviewContext)
  const { searchBook } = state
  const loader = useRef(null)
  const options = {
    rootMargin: '0px 0px 10px 0px',
    threshold: 1.0
  }
  const handleObserver = (entries, observer) => {
    if (entries[0].isIntersecting) {
      fetchMore({
        variables: {
          offset: books.length,
          title: searchBook,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (searchBook) return { books: fetchMoreResult.books }
          if (!fetchMoreResult.books) return prev
          return Object.assign({}, prev, {
            books: [...prev.books, ...fetchMoreResult.books]
          })
        }
      })
      observer.unobserve(entries[0].target)
    }
  }
  const observer = new IntersectionObserver(handleObserver, options)


  useEffect(() => {
    if (loader.current) {
      observer.observe(loader.current)
    }
  }, [books])

  useEffect(() => {
    fetchMore({
      variables: {
        title: searchBook,
      },
      updateQuery: (_, { fetchMoreResult }) => {
        return {
          books: fetchMoreResult.books
        }
      }
    })
  }, [searchBook])

  return (
    <>
      {
        books.map(currentUser => (
          <ListItemOutline key={currentUser.title}>
            <h2>
              {currentUser.title}
            </h2>
            <p>
              作者：{currentUser.author}
            </p>
          </ListItemOutline>
        ))
      }
      <div ref={loader} />
    </>
  )
}
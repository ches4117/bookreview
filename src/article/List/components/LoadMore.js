import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { ListItemOutline } from '../style'

LoadMore.propTypes = {
  books: PropTypes.array,
  fetchMore: PropTypes.func
}

LoadMore.defaultProps = {
  books: [],
}

export default function LoadMore({ books, fetchMore }) {
  const loader = useRef(null)
  const options = {
    rootMargin: '0px 0px 10px 0px',
    threshold: 1.0
  }

  useEffect(() => {
    const handleObserver = (entries, observer) => {
      if (entries[0].isIntersecting) {
        fetchMore({
          variables: {
            offset: books.length
          },
          updateQuery: (prev, { fetchMoreResult }) => {
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
    if (loader.current) {
      observer.observe(loader.current)
    }

  }, [books])

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
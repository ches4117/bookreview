import React, { useEffect, useRef, useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { ListItemOutline } from '../style'
import { BookReviewContext } from '../../../context'
import Loading from '../../../common/Loading'

LoadMore.propTypes = {
  books: PropTypes.array,
  searchBooks: PropTypes.array,
  fetchMore: PropTypes.func
}

LoadMore.defaultProps = {
  books: [],
}

export default function LoadMore({ books, searchBooks, fetchMore }) {
  const [state] = useContext(BookReviewContext)
  const [searchLoading, setSearchLoading] = useState(false)
  const { searchBook } = state
  const loader = useRef(null)
  const options = {
    rootMargin: '0px 0px 10px 0px',
    threshold: 0
  }
  const handleObserver = (entries, observer) => {
    if (entries[0].isIntersecting) {
      fetchMore({
        variables: {
          offset: books.length,
          title: searchBook,
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


  useEffect(() => {
    if (loader.current && !searchBook) {
      observer.observe(loader.current)
    }
  }, [books])

  useEffect(() => {
    if (searchBook) {
      setSearchLoading(true)
      fetchMore({
        variables: {
          title: searchBook,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          setSearchLoading(false)
          return { searchBooks: fetchMoreResult.searchBooks }
        }
      })
      observer.disconnect()
    } else {
      observer.observe(loader.current)
    }
  }, [searchBook])

  return (
    <>
      {
        searchLoading ? <Loading /> : searchBook ? searchBooks.map(currentUser => (
          <ListItemOutline key={currentUser.title}>
            <h2>
              {currentUser.title}
            </h2>
            <p>
              作者：{currentUser.author}
            </p>
          </ListItemOutline>
        )) :
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
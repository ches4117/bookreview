import React, { useEffect, useRef } from 'react'
import { ListItemOutline } from './style'


// eslint-disable-next-line react/prop-types
export default function LoadMore({ books, fetchMore }) {
  const loader = useRef(null)
  const handleObserver = () => {
    fetchMore({
      variables: {
        // eslint-disable-next-line react/prop-types
        offset: books.length
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev
        return Object.assign({}, prev, {
          books: [...prev.books, ...fetchMoreResult.books]
        })
      }
    })
  }
  useEffect(() => {
    var options = {
      root: null,
      rootMargin: '20px',
      threshold: 1.0
    }

    const observer = new IntersectionObserver(handleObserver, options)
    if (loader.current) {
      observer.observe(loader.current)
    }

  }, [])
  return (
    <>
      {
        // eslint-disable-next-line react/prop-types
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
      <div ref={loader}>
        <h2>載入更多書本</h2>
      </div>
    </>
  )
}
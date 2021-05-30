import React from 'react'
import { Query } from 'react-apollo'
import { LibraryOutline } from './style'
import { getBooksQuery } from './utils/sql'
import LoadMore from './components/LoadMore'

function Library() {
  return (
    <LibraryOutline>
      {
        <Query query={getBooksQuery}>
          {({ loading, error, data, fetchMore }) => {
            if (loading) return <p>Loading...</p>
            if (error) return <p>Error :(</p>
            return <LoadMore books={data.books} fetchMore={fetchMore} />
          }}
        </Query>
      }
    </LibraryOutline>
  )
}

export default Library
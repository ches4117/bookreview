import React from 'react'
import { Query } from 'react-apollo'
import Loading from '../../common/Loading'
import { LibraryOutline } from './style'
import { getBooksQuery } from './utils/sql'
import LoadMore from './components/LoadMore'


function Library() {
  return (
    <LibraryOutline>
      {
        <Query query={getBooksQuery}>
          {({ loading, error, data, fetchMore }) => {
            if (loading) return <Loading />
            if (error) return <p>Error :(</p>
            return <LoadMore books={data.books} searchBooks={data.searchBooks} fetchMore={fetchMore} />
          }}
        </Query>
      }
    </LibraryOutline>
  )
}

export default Library
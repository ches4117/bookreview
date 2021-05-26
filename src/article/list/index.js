import React from 'react'
import { Query } from 'react-apollo'
import { ListOutline } from './style'
import { getBooksQuery } from './utils/sql'
import LoadMore from './components/LoadMore'

function List() {
  return (
    <ListOutline>
      <Query query={getBooksQuery}>
        {({ loading, error, data, fetchMore }) => {
          if (loading) return <p>Loading...</p>
          if (error) return <p>Error :(</p>
          return <LoadMore books={data.books} fetchMore={fetchMore} />
        }}
      </Query>
    </ListOutline>
  )
}

export default List
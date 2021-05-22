import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import { ListOutline, ListItemOutline } from './style'

const getUsersQuery = gql`
{
  books {
    title
    author
  }
}
`

function List() {
  return (
    <ListOutline>
      <Query query={getUsersQuery}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>
          if (error) return <p>Error :(</p>

          return (
            <>
              {
                [].concat(data.books).concat(data.books).map(currentUser => (
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
            </>
          )
        }}
      </Query>
    </ListOutline>
  )
}

export default List
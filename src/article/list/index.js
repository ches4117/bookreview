import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

const getUsersQuery = gql`
{
  books {
    title
    author
  }
}
`

const ListOutline = styled.div`
  height: 100%;
  min-height: 800px;
  background: #fff;
  justify-content: center;
  flex: 1;
`

function List() {
  return (
    <ListOutline>
      <Query query={getUsersQuery}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>
          if (error) return <p>Error :(</p>
          // 最重要的就是從 data 裡面取得資料
          const lists = data.books.map(currentUser => (
            <li key={currentUser.title}> {currentUser.author} </li>
          ))

          return (
            <div>
              <ul style={{ 'list-style-type': 'none' }}>{lists}</ul>
            </div>
          )
        }}
      </Query>
    </ListOutline>
  )
}

export default List
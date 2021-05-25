import { gql } from 'apollo-boost'

export const getBooksQuery = gql`

  query books($offset: Int) {
    books(limit: 10, offset: $offset) {
      id
      title
    }
  }

`
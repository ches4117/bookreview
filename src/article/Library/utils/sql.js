import { gql } from 'apollo-boost'

export const getBooksQuery = gql`
  query books($offset: Int, $title: String) {
    books(limit: 5, offset: $offset, title: $title) {
      id
      title
      author
    }
  }
`
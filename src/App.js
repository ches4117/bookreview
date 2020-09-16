import React, { Fragment } from 'react'
import styled from 'styled-components'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'
import Navigation from './navigation'
import Article from './article'
import Footer from './footer'

const client = new ApolloClient({
  uri: 'http://localhost:4000/'
})

const Body = styled.div`
  background: #F3F4F7;
  display: flex;
  margin: 0;
  padding: 0;
  flex-flow: row;
`

function App() {
  return (
    <ApolloProvider client={client}>
      <Navigation />
      <Article />
      <Footer />
    </ApolloProvider>
  )
}

export default App

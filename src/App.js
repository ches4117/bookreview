import React from 'react'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'
import Navigation from './navigation'
import Article from './article'
import Footer from './footer'

const client = new ApolloClient({
  uri: 'https://nxi7l.sse.codesandbox.io/'
})

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

import React from 'react'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'
import { BrowserRouter as Router } from 'react-router-dom'
import Navigation from './navigation'
import Article from './article'
import Footer from './footer'

const client = new ApolloClient({
  uri: 'https://uy9cx.sse.codesandbox.io/'
})

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <Navigation />
        <Article />
        <Footer />
      </ApolloProvider>
    </Router>
  )
}

export default App

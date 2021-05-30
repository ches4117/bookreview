import React from 'react'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'
import { BrowserRouter as Router } from 'react-router-dom'
import { ProviderContext } from './context/provider'
import Navigation from './navigation'
import Article from './article'
import Footer from './footer'

const client = new ApolloClient({
  uri: 'https://bnupk.sse.codesandbox.io/'
})

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <ProviderContext>
          <Navigation />
          <Article />
          <Footer />
        </ProviderContext>
      </ApolloProvider>
    </Router>
  )
}

export default App

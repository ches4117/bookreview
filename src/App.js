import React, { Fragment } from 'react'
import styled from 'styled-components'
import Navigation from './navigation'
import Article from './article'
import Footer from './footer'

const Body = styled.div`
  background: #F3F4F7;
  display: flex;
  margin: 0;
  padding: 0;
  flex-flow: row;
`

function App() {
  return (
    <Fragment>
      <Navigation />
      <Article />
      <Footer />
    </Fragment>
  )
}

export default App

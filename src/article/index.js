import React from 'react'
import styled from 'styled-components'
import List from './list'
import User from './user'

const Body = styled.body`
  width: 100vw;
  min-height: 800px;
  padding: 10px;
  background: #F3F4F7;
`

const Section = styled.section`
  width: 100%;
  max-width: 800px;
  margin:0 auto;
  flex-direction: row-reverse;
  -webkit-box-direction: reverse;
  display: flex;
`

function Article() {
  return (
    <Body>
      <Section>
        <User />
        <List />
      </Section>
    </Body>
  )
}

export default Article

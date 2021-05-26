import React from 'react'
import List from './list'
import User from './user'
import { Body, Section } from './style'

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

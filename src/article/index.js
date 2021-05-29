import React from 'react'
import {
  Switch,
  Route,
} from 'react-router-dom'
import List from './List'
import { Body, Section } from './style'

function Article() {
  return (
    <Body>
      <Section>
        <Switch>
          <Route exact path="/list">
            <List />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/library">
            <div />
          </Route>
        </Switch>
      </Section>
    </Body>
  )
}

export default Article

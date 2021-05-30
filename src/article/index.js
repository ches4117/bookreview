import React from 'react'
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import List from './List'
import Library from './Library'
import { Body, Section } from './style'

function Article() {
  return (
    <Body>
      <Section>
        <Switch>
          <Route exact path="/list">
            <List />
          </Route>
          <Route exact path="/library">
            <Library />
          </Route>
          <Route exact path="/topic">
            <div />
          </Route>
          <Route exact path="/" render={() => (<Redirect to="/library" />)} />
        </Switch>
      </Section>
    </Body>
  )
}

export default Article

import React from 'react'
import { Header, Nav, NavItem, SearchInput } from './style'

function Navigation() {
  return (
    <Header>
      <Nav>
        <NavItem to="/library">書庫</NavItem>
        <NavItem to="/list">書單</NavItem>
        <NavItem to="/topic">話題</NavItem>
        <SearchInput placeholder="hello" />
      </Nav>
    </Header>
  )
}

export default Navigation

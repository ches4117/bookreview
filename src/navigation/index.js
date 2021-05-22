import React from 'react'
import { Header, Nav, NavItem, SearchInput } from './style'

function Navigation() {
  return (
    <Header>
      <Nav>
        <NavItem>書庫</NavItem>
        <NavItem>書單</NavItem>
        <NavItem>話題</NavItem>
        <SearchInput placeholder="hello" />
      </Nav>
    </Header>
  )
}

export default Navigation

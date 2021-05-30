import React, { useContext } from 'react'
import { Header, Nav, NavItem, SearchInput } from './style'
import { BookReviewContext } from '../context'

function Navigation() {
  const [state, dispatch] = useContext(BookReviewContext)
  const { searchBook } = state
  const handleSearchChange = value => {
    dispatch({
      type: 'SEARCH_BOOK',
      payload: value
    })
  }
  return (
    <Header>
      <Nav>
        <NavItem to="/library">書庫</NavItem>
        <NavItem to="/list">書單</NavItem>
        <NavItem to="/topic">話題</NavItem>
        <SearchInput
          value={searchBook}
          placeholder="輸入想找的書籍名稱"
          onChange={e => handleSearchChange(e.target.value)}
        />
      </Nav>
    </Header>
  )
}

export default Navigation

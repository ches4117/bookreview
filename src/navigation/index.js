import React, { useContext } from 'react'
import { debounce } from 'lodash'
import { Header, Nav, NavItem, SearchInput } from './style'
import { BookReviewContext } from '../context'

function Navigation() {
  const [, dispatch] = useContext(BookReviewContext)

  const handleSearchChange = e => {
    delayInput(e.target.value)
  }

  const delayInput = debounce(e => dispatch({
    type: 'SEARCH_BOOK',
    payload: e
  }), 500)

  return (
    <Header>
      <Nav>
        <NavItem to="/library">書庫</NavItem>
        <NavItem to="/list">書單</NavItem>
        <NavItem to="/topic">話題</NavItem>
        <SearchInput
          placeholder="輸入想找的書籍名稱"
          onChange={handleSearchChange}
        />
      </Nav>
    </Header>
  )
}

export default Navigation

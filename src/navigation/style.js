import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Header = styled.header`
  width: 100vw;
  padding: 10px;
  background: #fff;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  flex: 1;
`

const Nav = styled.nav`
  width: 555px;
  display: flex;
  justify-content: space-between;
`

const NavItem = styled(Link)`
  text-decoration: none;
  color: #6C6C6C;
  :hover {
    color: #3C3C3C;
    cursor: pointer;
    border-top: 2px solid;
  }
  border: 2px solid transparent;
  transition: border-top 0.3s linear;
`

const SearchInput = styled.input`
  :focus {
    color: #272727;
    border-radius: 0;
  }
  color: #5B5B5B;
  padding: 6px 12px;
  width: 200px;
  border: 1px solid #ccc;
  border-radius: 4px;
`

export { Header, Nav, NavItem, SearchInput }
import styled from 'styled-components'

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

const NavItem = styled.a`
  :hover {
    color: blue;
    cursor: pointer;
    border-top: 2px solid;
  }
  border: 2px solid transparent;
  transition: border-top 0.3s linear;
`

const SearchInput = styled.input`
:focus {
  border-radius: 0;
}
  padding: 6px 12px;
  width: 200px;
  border: 1px solid #ccc;
  border-radius: 4px;
`

export { Header, Nav, NavItem, SearchInput }
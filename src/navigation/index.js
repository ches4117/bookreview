import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  width: 100vw;
  padding: 10px;
  background: #fff;
  font-size: 18px;
  display: flex;
  justify-content: center;
  flex: 1;
`;

const Nav = styled.nav`
  width: 555px;
  display: flex;
  justify-content: space-between;
`

const Input = styled.input`
  width: 200px
`

function Navigation() {
  return (
    <Header>
      <Nav>
        <a>書庫</a>
        <a>書單</a>
        <a>話題</a>
        <Input></Input>
      </Nav>
    </Header>
  );
}

export default Navigation;

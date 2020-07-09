import React from 'react';
import styled from 'styled-components';

const UserCard = styled.div`
  width: 250px;
  margin-left: 10px;
  height: 500px;
  background: #fff;
`

function User() {
  return (
    <UserCard>
      test
    </UserCard>
  );
}

export default User;
import React from "react";
import DashBoard from "./dashboard";
import styled from "styled-components";
import { UserNewTransaction } from "./new-transaction/new-transaction";

function UserPageNewTransaction() {
  return (
    <UserPageNewTransactionWrapper>
      <DashBoard userActionModule={<UserNewTransaction />} />
    </UserPageNewTransactionWrapper>
  );
}
export default UserPageNewTransaction;
const UserPageNewTransactionWrapper = styled.div`
  .Home-nav,
  .payment-nav {
    color: grey;
  }
`;

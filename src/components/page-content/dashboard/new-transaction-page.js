import React from "react";
import DashBoard from "./dashboard";
import styled from "styled-components";
import {UserNewTransaction, UserNewTransactionOverLay} from "./new-transaction/new-transaction";
import TransactionHistory from "./transaction-history/transaction-history";
function UserPageNewTransaction() {
  return (
    <UserPageNewTransactionWrapper>
      <DashBoard
        userActionModule={
          <UserNewTransactionOverLay>
            <UserNewTransaction text="New transaction" buttontext="Next" />
          </UserNewTransactionOverLay>
        }
        userAdsModule={<TransactionHistory />}
      />
    </UserPageNewTransactionWrapper>
  );
}
export default UserPageNewTransaction;
const UserPageNewTransactionWrapper = styled.div`
  .Home-nav, .payment-nav {
    color: grey;
  }
`;

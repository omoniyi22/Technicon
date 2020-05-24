import React from "react";
import styled from "styled-components";
// import UserProfile from "./user-profile/user-profile";
import { UserTransactionAndChat } from "./user-transaction-and-chat/user-transaction-and-chat";
import UserProfile from "./user-profile/user-profile";
import TransactionHistory from "./transaction-history/transaction-history";
import { UserNewTransaction } from "./new-transaction/new-transaction";
// import { UserTransactionAndChat } from "./user-transaction-and-chat/user-transaction-and-chat";

function UserPageNewTransaction() {
  return (
    <PageWrapper className="row w-100">
      <div className="section user-profile-section">
        <UserProfile />
      </div>
      <div className="section user-transaction-section">
        <UserNewTransaction />
      </div>
      <div className="section user-history-section">
        <TransactionHistory />
      </div>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  margin: auto;
  background-color: rgb(22, 22, 22, 0.04);
  .section {
    border: 1px solid lightgrey;
    box-shadow: 1px 1px 1px 1px lightgrey;
  }
  .user-profile-section {
    background-color: white;
    height: 26rem;
    width: 27%;
    margin-left: 7.5%;
  }
  .user-transaction-section {
    .new-transaction-header-text {
      //   border: 2px solid green;
      position: relative;
      top: 4.7%;
      width: 84%;
      margin: auto;
      font-size: 0.9rem;
      font-weight: bold;
    }
    height: inherit;
    // border: 2px solid gold;
    width: 37%;
    // margin: auto;
    // the .right-chat below is what pushes the chat with the blue border to the right.
    .right-chat {
      float: right;
      min-width: 10rem;
    }
  }
  .user-history-section {
    max-height: 27.7rem;
    background-color: white;
    border: none;
    box-shadow: none;
    width: 21%;
  }
`;

export default UserPageNewTransaction;

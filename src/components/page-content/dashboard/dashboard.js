import React from "react";
import styled from "styled-components";
import { UserTransactionAndChat } from "./user-transaction-and-chat/user-transaction-and-chat";
import UserProfile from "./user-profile/user-profile";
import TransactionHistory from "./transaction-history/transaction-history";

function DashBoard({ userActionModule }) {
  return (
    <PageWrapper className="row w-100">
      <div className="section user-profile-section">
        <UserProfile />
      </div>
      <div className="section user-transaction-section">{userActionModule}</div>
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
    height: 26rem;
    width: 27%;
    margin-left: 7.5%;
    background-color: white;
  }
  .user-transaction-section {
    .transaction-and-chat-section {
      background-color: white;
    }
    .new-transaction-header-text {
      width: 84%;
      margin: auto;
      position: relative;
      top: 4%;
      font-weight: bold;
    }
    height: inherit;
    width: 37%;
    /* the .right-chat below is what pushes the chat with the blue border to the right.*/
    .right-chat {
      float: right;
      margin-right: 0.7vw;
      min-width: 10rem;
    }
  }
  .user-history-section {
    max-height: 27.7rem;
    border: none;
    box-shadow: none;
    width: 21%;
  }
`;

export default DashBoard;

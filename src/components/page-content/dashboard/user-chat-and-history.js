import React from "react";
import styled from "styled-components";
import DashBoard from "./dashboard";
import { UserTransactionAndChat } from "./user-transaction-and-chat/user-transaction-and-chat";
function UserPageChatDashBoard() {
  return (
    <UserPageChatDashBoardWrapper>
      <DashBoard userActionModule={<UserTransactionAndChat />} />
    </UserPageChatDashBoardWrapper>
  );
}
export default UserPageChatDashBoard;

const UserPageChatDashBoardWrapper = styled.div`
  .Home-nav {
    background: rgb(240, 240, 240);
    color: #539dc2;
  }
  .payment-nav {
    color: grey;
  }
`;

import React from "react";
import DashBoard from "./dashboard";
import { UserTransactionAndChat } from "./user-transaction-and-chat/user-transaction-and-chat";
function UserPageChatDashBoard() {
  return <DashBoard userActionModule={<UserTransactionAndChat />} />;
}
export default UserPageChatDashBoard;

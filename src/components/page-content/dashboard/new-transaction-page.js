import React from "react";
import DashBoard from "./dashboard";
import { UserNewTransaction } from "./new-transaction/new-transaction";

function UserPageNewTransaction() {
  return <DashBoard userActionModule={<UserNewTransaction />} />;
}
export default UserPageNewTransaction;

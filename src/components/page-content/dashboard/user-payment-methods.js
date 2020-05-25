import React from "react";
import DashBoard from "./dashboard";
import { UserPayment } from "./payment-gateway.js/payment-gateway";
function UserPaymentGateWay() {
  return <DashBoard userActionModule={<UserPayment />} />;
}
export default UserPaymentGateWay;

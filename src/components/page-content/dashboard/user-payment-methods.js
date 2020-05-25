import React from "react";
import DashBoard from "./dashboard";
import styled from "styled-components";
import { UserPayment } from "./payment-gateway.js/payment-gateway";
function UserPaymentGateWay() {
  return (
    <UserPaymentGateWayWrapper>
      <DashBoard userActionModule={<UserPayment />} />
    </UserPaymentGateWayWrapper>
  );
}
export default UserPaymentGateWay;
const UserPaymentGateWayWrapper = styled.div`
  .payment-nav {
    background: rgb(240, 240, 240);
    color: #539dc2;
  }
  .Home-nav {
    color: grey;
  }
`;

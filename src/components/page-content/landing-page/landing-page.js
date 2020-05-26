import React from "react";
import styled from "styled-components";
import BackgroundImage from "../../../assets/technicon-background.jpg";
import {
  UserNewTransaction,
  UserNewTransactionOverLay
} from "../dashboard/new-transaction/new-transaction";

function LandingPage() {
  return (
    <LandingPageWrapper>
      <div className="row">
        <div className="col-5 new-transaction-from-homepage">
          <UserNewTransactionOverLay noPaddingTop>
            <UserNewTransaction text="" buttontext="Try for free" />
          </UserNewTransactionOverLay>
        </div>
        <div className="col-4 homepage-text"></div>
      </div>
    </LandingPageWrapper>
  );
}

const LandingPageWrapper = styled.div`
  background-color: lightgrey;
  height: 70rem;
  width: 100%;
  .row {
    object-fit: fill;
    width: 100%;
    margin: 0;
    height: 32rem;

    .new-transaction-from-homepage,
    .homepage-text {
      height: 32rem;
    }
  }
`;
export default LandingPage;

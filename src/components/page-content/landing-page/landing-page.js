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
        <div className="col-5 homepage-text">
          <p id="hire">Hire expert engineers to fix your gadgets.</p>
        </div>
      </div>
    </LandingPageWrapper>
  );
}

const LandingPageWrapper = styled.div`
  background-color: lightgrey;
  height: 70rem;
  width: 100%;
  .row {
    background-image: url(${BackgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    margin: 0;
    height: 39rem;
    .new-transaction-from-homepage,
    .homepage-text {
      height: 32rem;
    }
  }
  #hire {
    margin-top: 28rem;
    font-size: 2.5rem;
    color: white;
    font-weight: bolder;
    width: 85%;
  }
`;
export default LandingPage;

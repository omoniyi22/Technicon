import React from "react";
import styled from "styled-components";
import UserProfile from "./user-profile/user-profile";

function Page() {
  return (
    <PageWrapper className="row w-100">
      <div className="section user-profile-section">
        <UserProfile />
      </div>
      <div className="section user-transaction-section"></div>
      <div className="section user-history-section"></div>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  margin: auto;
  //   border: 1px solid red;
  .section {
    border: 1px solid lightgrey;
    box-shadow: 1px 1px 1px 1px lightgrey;
  }
  .user-profile-section {
    height: 26rem;
    width: 27%;
    margin-left: 7.5%;
  }
  .user-transaction-section {
    height: 38rem;
    width: 37%;
  }
  .user-history-section {
    height: 26rem;
    width: 21%;
  }
`;

export default Page;

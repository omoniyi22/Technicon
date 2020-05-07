import React from "react";
import styled from "styled-components";

function Page() {
  return (
    <PageWrapper className="row w-100">
      <div className=""></div>
      <div className=""></div>
      <div className=""></div>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  margin: auto;
  border: 1px solid red;
  div {
    border: 1px solid brown;
  }
  div:nth-child(1) {
    height: 26rem;
    width: 27%;
    margin-left: 7.5%;
  }
  div:nth-child(2) {
    height: 38rem;
    width: 37%;
  }
  div:nth-child(3) {
    height: 26rem;
    width: 21%;
  }
`;

export default Page;

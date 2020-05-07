import React from "react";
import styled from "styled-components";

export const UserTransactionAndChat = () => {
  return (
    <>
      <UserTransactionAndChatWrapper>
        <p className="header">Dashboard</p>
      </UserTransactionAndChatWrapper>
      <UserDeviceWrapper>
        <UserDevice />
      </UserDeviceWrapper>
      <UserChatNavWrapper>
        <UserChatNav />
      </UserChatNavWrapper>
    </>
  );
};

const UserChatNav = () => {
  return (
    <>
      <div className="transaction current">Transaction</div>
      <div className="invoice">Invoice</div>
    </>
  );
};
const UserChatNavWrapper = styled.div`
  height: 3.5rem;
  margin: auto;
  display: flex;
  //   border: 1px solid green;
  padding-left: 3%;
  .transaction,
  .invoice {
    text-align: center;
    border-bottom: 1.25px solid lightgrey;
    // margin: auto;
    font-weight: bold;
    padding-top: 1.2rem;
    cursor: pointer;
    &:hover {
      filter: brightness(90%);
      background: rgb(240, 240, 240);
    }
    transition: 0.3s ease-out;
  }
  .current {
    border-bottom: 3.3px solid #5dade2;
  }
  .transaction {
    width: 48.5%;
    // border: 1px solid gold;
  }
  .invoice {
    // border: 1px solid yellow;
    width: 48.5%;
  }
`;

const UserDevice = () => {
  return (
    <>
      <div className="icon-and-id">
        <div className="icon-container">
          <i class="fa fa-apple"></i>
        </div>
        <div className="icon-text">
          <div>#ID 0119</div>
          <div>Iphone 6X</div>
        </div>
      </div>
      <div className="time">04/04/2020</div>
    </>
  );
};
const UserDeviceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.5rem 1rem 1.5rem;
  height: 5rem;
  //   border: 1px solid red;
  background-color: #5dade2;
  .icon-and-id {
    // border: 1px solid green;
    width: 10rem;
    display: flex;
    justify-content: space-between;
    .icon-container {
      //   border: 1px solid;
      border-radius: 50%;
      height: 2.8rem;
      background-color: white;
      width: 2.8rem;
      padding: 0.35rem 0 0 0.5rem;
    }
    .icon-container i {
      font-size: 2rem;
    }
    .icon-text {
      margin: auto;
      color: white;
    }
    .icon-text div:nth-child(1) {
      font-weight: bold;
    }
  }
  .time {
    // border: 1px solid green;
    padding-top: 1%;
    color: white;
  }
`;

const UserTransactionAndChatWrapper = styled.div`
  //   border: 3px solid gold;
  .header {
    // border: 3px solid green;
    height: 3.2rem;
    padding: 0.85rem 0 0 1.5rem;
    color: grey;
    font-weight: bold;
    background: rgb(240, 240, 240);
  }
`;

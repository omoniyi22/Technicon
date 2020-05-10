import React from "react";
import styled from "styled-components";

export const UserTransactionAndChat = () => {
  return (
    <>
      <UserTransactionAndChatWrapper>
        <p className="header">Dashboard</p>
      </UserTransactionAndChatWrapper>
      <UserDeviceWrapper width9rem marginRight1_5rem blueBackground hideCount>
        <UserDevice
          deviceID="#ID 0119"
          deviceBrand="Iphone 6X"
          timeModule={
            <TimeWrapper className="time">
              <Time time="04/04/04" />
            </TimeWrapper>
          }
          hideCountNum="hide-count"
        />
      </UserDeviceWrapper>
      <UserChatNavWrapper>
        <UserChatNav />
      </UserChatNavWrapper>
      <br />
      <ChatWrapper>
        <Chat
          chattext="Thank you for reaching out. Your ID number is 1234. We will notify you once your gadget arrives."
          timedelivered={<p>10:30AM</p>}
        />
      </ChatWrapper>
      <ChatWrapper
        rightChat
        rightChatBorder
        backgroundWhite
        className="right-chat"
      >
        <Chat chattext="Confirm pickup." timedelivered={<p>10:30AM</p>} />
      </ChatWrapper>
      <br />
      <br />
      <br />
      <br />
      <br />
      <ChatWrapper>
        <Chat
          chattext="Hello James, your phone has arrived, we will inform you of the diagnosed faults and costs in a min. Please stay put."
          timedelivered=""
        />
      </ChatWrapper>
      <ChatWrapper>
        <Chat
          chattext="Hello James, your phone was diagnosed with borken screen and burnt motherboard. The cost of repair is as follows:"
          timedelivered=""
        />
      </ChatWrapper>
      <ChatWrapper>
        <Chat
          chattext="New Screen - N1700
      New Motherboard - N3000
      VAT - N300 ."
          chattext="New Screen - N1700
      New Motherboard - N3000
      VAT - N300 ."
          timedelivered={<p>10:30AM</p>}
        />
      </ChatWrapper>
    </>
  );
};
const Chat = ({ chattext, timedelivered, chatMessageModule }) => {
  return (
    <>
      <ChatMessageWrapper className="chat-message-wrapper">
        <ChatBody chat={chattext} />
      </ChatMessageWrapper>
      <TimeWrapper marginLeft smallFont colorGrey noPaddingTop className="time">
        <Time time={timedelivered} />
      </TimeWrapper>
    </>
  );
};
const ChatWrapper = styled.div`
  .chat-message-wrapper {
    max-height: 15rem;
    border-radius: ${prop =>
      prop.rightChat
        ? "1.5rem 1.5rem 0rem 1.5rem"
        : "1.5rem 1.5rem 1.5rem 0rem"};
    // background: rgb(240, 240, 240);
    background: ${prop =>
      prop.backgroundWhite ? "white" : "rgb(240, 240, 240)"};
    font-weight: bold;
    margin: 0.9% 0% 0.5% 3%;
    padding: 1rem;
    font-size: 0.85rem;
    color: rgb(160, 160, 160);
    max-width: 20.7rem;
    align-item: right;
    border: ${prop => (prop.rightChatBorder ? "1.5px solid #5dade2" : "none")};
  }
`;
const ChatMessageWrapper = styled.div``;

const ChatBody = ({ chat }) => {
  return <div>{chat}</div>;
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
  }
  .invoice {
    width: 48.5%;
  }
`;

export const UserDevice = ({
  deviceID,
  deviceBrand,
  timeModule,
  count,
  hideCountNum
}) => {
  return (
    <>
      <div className="icon-and-id">
        <div className="icon-container">
          <i class="fa fa-apple"></i>
        </div>
        <div className="icon-text">
          <div>{deviceID}</div>
          <div>{deviceBrand}</div>
        </div>
      </div>
      <div className="time-and-count">
        <div>{timeModule}</div>
        <div className={`count ${hideCountNum}`}>{count}</div>
      </div>
    </>
  );
};
export const Time = ({ time }) => {
  return <>{time}</>;
};
export const TimeWrapper = styled.div`
  padding-top: ${prop => (prop.noPaddingTop ? "0rem" : "15%")};
  color: ${prop =>
    prop.colorGrey
      ? "rgb(160, 160, 160);"
      : "white" && prop.colorBlue
      ? "#5dade2"
      : "white"};
  font-size: ${prop => (prop.smallFont ? "0.7rem" : "0.8rem")};
  margin-left: ${prop => (prop.marginLeft ? "3%" : "")};
  // border: 1px solid red;
  //now we target a paragraph than we are going to include in the rendered prop, so that margin is given if Time has p, which means that the returned chat will have a margin-bottom if it has time attached to it.
  p {
    //   border: 1px solid blue;
    margin-bottom: 1.7rem;
  }
`;
export const UserDeviceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem ${prop => (prop.marginRight1_5rem ? "1.5rem" : "0.3rem")} 1rem
    1.5rem;
  height: 5rem;
  border-top: 0.5px solid lightgrey;
  background-color: ${prop => (prop.blueBackground ? "#5dade2" : "white")};
  .time-and-count {
    // border: 1px solid yellow;
    .count {
      // border: 1px solid gold;
      margin-left: 0.3rem;
      margin-top: 0.25rem;
      width: 1.4rem;
      color: blue;
      font-weight: bold;
      height: 1.4rem;
      text-align: center;
      padding-top: 0.23rem;
      background-color: #6495ED;
      opacity: 0.5;
      border-radius: 50%;
      // display: ${prop => (prop.hideCount ? "none" : "block")}; 
    }
    .hide-count{
      display: none;
    }
  }
  .icon-and-id {
    // border: 1px solid green;
    width: ${prop => (prop.width9rem ? "9rem" : "inherit")};
    display: flex;
    justify-content: space-between;
    .icon-container {
      // border: 1px solid red;
      border-radius: 50%;
      height: 2.8rem;
      background-color: white;
      width: 2.8rem;
      padding: 0.35rem 0 0 0.5rem;
    }
    .icon-container i {
      font-size: 2rem;
      color: black;
    }
    .icon-text {
      margin: auto;
      margin-left: ${prop => (prop.marginLeft ? "0.8rem" : "")};
      font-size: 0.9rem;
      // border: 1px solid yellow;
    }
    .icon-text div:nth-child(1) {
      font-weight: bold;
      color: ${prop => (prop.colorBlack ? "black" : "white")};
    }
    .icon-text div:nth-child(2) {
      font-weight: normal;
      padding-top: 0.2rem;
      color: ${prop => (prop.colorGrey ? "grey" : "white")};
    }
    
  }
`;

export const UserTransactionAndChatWrapper = styled.div`
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

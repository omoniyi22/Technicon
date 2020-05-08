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
      <br/>
      <Chat chattext="Thank you for reaching out. Your ID number is 1234. We will notify you once your gadget arrives." timedelivered={<p>10:30AM</p>} />
      <Chat chattext="Hello James, your phone has arrived, we will inform you of the diagnosed faults and costs in a min. Please stay put." timedelivered="" />
      <Chat chattext="Hello James, your phone was diagnosed with borken screen and burnt motherboard. The cost of repair is as follows:" timedelivered="" />
      <Chat chattext="New Screen - N1700
      New Motherboard - N3000
      VAT - N300 ." timedelivered={<p>10:30AM</p>} />
    </>
  );
};
const Chat = ({chattext, timedelivered})=>{
    return(
        <>
         <ChatWrapper>
            <ChatMessageWrapper>
                <ChatBody chat={chattext} />
            </ChatMessageWrapper>
            <TimeWrapper marginLeft smallFont colorGrey noPaddingTop className="time">
                <Time time={timedelivered} />
            </TimeWrapper>
         </ChatWrapper>
        </>
    )
}
const ChatWrapper =styled.div`
`;
const ChatBody = ({ chat }) => {
  return <div>{chat}</div>;
};
const ChatMessageWrapper = styled.div`
  max-height: 15rem;
  border-radius: 1.5rem 1.5rem 1.5rem 0rem;
  background: rgb(240, 240, 240);
  font-weight: bold;
  margin: 0.9% 0% 0.5% 3%;
  padding: 1rem;
  font-size: 0.85rem;
  color: rgb(160, 160, 160);
  max-width: 70%;
//   border: 1px solid purple;
`;

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
      <TimeWrapper className="time">
        <Time time="04/04/2020" />
      </TimeWrapper>
    </>
  );
};
const Time = ({ time }) => {
  return <>{time}</>;
};
const TimeWrapper = styled.div`
  padding-top: ${prop=> prop.noPaddingTop? "0rem":"1%"};
  color: ${prop=>(prop.colorGrey?"rgb(160, 160, 160);":"white")};
  font-size: ${prop=>prop.smallFont?"0.7rem": ""};
  margin-left: ${prop=>prop.marginLeft?"3%": ""};
//   border: 1px solid red;
//now we target a paragraph than we are going to include in the rendered prop, so that margin is given if Time has p, which means that the returned chat will have a margin-bottom if it has time attached to it.
  p{
    //   border: 1px solid blue;
      margin-bottom: 1.7rem;
    }
`;
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

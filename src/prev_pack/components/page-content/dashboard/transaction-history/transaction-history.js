import React from "react";
import styled from "styled-components";
import {
  UserDevice,
  UserDeviceWrapper,
  Time,
  TimeWrapper
} from "../user-transaction-and-chat/user-transaction-and-chat";
const TransactionHistory = () => {
  return (
    <TransactionHistoryWrapper>
      <AdsWrapper>Ads Here!</AdsWrapper>
      <br />
      <TransactionHistoryRecordWrapper>
        <TransactionWrapper>
          <UserDeviceWrapper
            marginLeft
            colorBlack
            colorGrey
            blueColoredTime
            className=""
          >
            <UserDevice
              deviceID="#ID 0119"
              deviceBrand="Samsung Notebook"
              timeModule={
                <TimeWrapper className="time" colorBlue>
                  <Time time="16:13" />
                </TimeWrapper>
              }
              count="1"
            />
          </UserDeviceWrapper>
        </TransactionWrapper>
        <TransactionWrapper>
          <UserDeviceWrapper
            marginLeft
            colorBlack
            colorGrey
            blueColoredTime
            className=""
          >
            <UserDevice
              deviceID="#ID 0119"
              deviceBrand="Macbook Pro"
              timeModule={
                <TimeWrapper className="time" colorBlue>
                  <Time time="03/03/2021" />
                </TimeWrapper>
              }
              hideCountNum="hide-count"
            />
          </UserDeviceWrapper>
        </TransactionWrapper>
        <TransactionWrapper>
          <UserDeviceWrapper
            marginLeft
            colorBlack
            colorGrey
            blueColoredTime
            className="current"
          >
            <UserDevice
              deviceID="#ID 0119"
              deviceBrand="Iphone 6x"
              timeModule={
                <TimeWrapper className="time" colorBlue>
                  <Time time="04/04/2020" />
                </TimeWrapper>
              }
              hideCountNum="hide-count"
            />
          </UserDeviceWrapper>
        </TransactionWrapper>
      </TransactionHistoryRecordWrapper>
    </TransactionHistoryWrapper>
  );
};
const TransactionHistoryRecordWrapper = styled.div`
  // border: 1px solid purple;
  height: inherit;
  background-color: lightgrey;
`;
const AdsWrapper = styled.div`
  border: 1px solid lightgrey;
  text-align: center;
  padding-top: 24%;
  font-size: 3rem;
  color: black;
  height: 11.5rem;
  width: 100%;
  background-color: lightgrey;
  border-radius: 12px;
`;
const TransactionWrapper = styled.div`
  border: none;
  box-shadow: 1px 1px 1px 1px lightgrey;
  cursor: pointer;
  &:hover {
    filter: brightness(90%);
    background: rgb(240, 240, 240);
  }
  transition: 0.3s ease-out;
`;
const TransactionHistoryWrapper = styled.div`
  .current {
    background: rgb(240, 240, 240);
    color: #539dc2;
  }
`;

export default TransactionHistory;

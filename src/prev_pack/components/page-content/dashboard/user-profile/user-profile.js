import React from "react";
import styled from "styled-components";
import { Avatar, AvatarContainer } from "../../../navbar/navbar";
import { Button } from "../../button/button";
import { BrowserRouter as Router, Link } from "react-router-dom";
const UserProfile = () => {
  return (
    <UserProfileWrapper>
      <AvatarContainer
        userSectionSize
        blackColor
        marginTopP
        large
        marginTopImg
        shorterWidth
      >
        <Avatar Username="Yusuf yusuf" />
      </AvatarContainer>
      <LocationWrapper marginTop>
        <i className="fa fa-map-marker"></i>
        <span> B9, ZikHall, UniIbadan</span>
      </LocationWrapper>
      <Button />
      <Link to="/dashboard">
        <ProfileNavWrapper hoverEffect marginTop className="Home-nav">
          <ProfileNav iconName="fa fa-home" text="Dashboard" />
        </ProfileNavWrapper>
      </Link>
      <Link to="/payment-gateway">
        <ProfileNavWrapper hoverEffect className="payment-nav">
          <ProfileNav iconName="fa fa-credit-card" text="Payment" />
        </ProfileNavWrapper>
      </Link>
      <Link to="/new-transaction">
        <NewTransactionWrapper>
          <NewTransaction />
        </NewTransactionWrapper>
      </Link>
    </UserProfileWrapper>
  );
};

export const ProfileNav = ({ iconName, text }) => {
  return (
    <>
      <i className={`${iconName}`}></i>
      <span className="nav-text">{text}</span>
    </>
  );
};

const NewTransaction = () => {
  return (
    <>
      <span>Start a new transaction</span>
      <i className="fa fa-plus-circle"></i>
    </>
  );
};
const NewTransactionWrapper = styled.div`
  cursor: pointer;
  height: 4.5rem;
  background-color: #5dade2;
  color: white;
  font-size: 1.3rem;
  width: 100%;
  padding-left: 10%;
  &:hover {
    filter: brightness(90%);
  }
  transition: 0.3s ease-out;
  span {
    margin: 0rem 2rem 0rem 0rem;
    font-size: 1.3rem;
    padding-top: -1rem;
    position: relative;
    top: -0.7rem;
  }
  i {
    font-size: 3rem;
    padding-top: 0.7rem;
  }
`;

export const ProfileNavWrapper = styled.div`
  height: ${prop => (prop.shorterHeight ? "3.5rem" : " 4.5rem")};
  margin-top: ${prop => (prop.marginTop ? "2rem" : "0rem")};
  width: ${prop => (prop.shorterWidth ? "60%" : "100%")};

  padding-left: ${prop => (prop.forpayment ? "0%" : "10%")};
  padding-top: 1.6rem;
  font-size: 1.3rem;

  i {
    margin: 0rem 2rem 0 0;
  }
  span {
  }
  cursor: ${prop => (prop.noCursorPointer ? "" : "pointer")};
  &:hover {
    filter: ${prop => (prop.hoverEffect ? "brightness(90%)" : "0%")};
    background: ${prop => (prop.hoverEffect ? "rgb(240, 240, 240)" : "0%")};
  }
  transition: 0.3s ease-out;
  .nav-text {
    font-weight: bolder;
    font-size: ${prop => (prop.forpayment ? "0.9rem" : "inherit")};
    position: relative;
    top: ${prop => (prop.forpayment ? "-0.6vw" : "")};
  }
  border-bottom: ${prop => (prop.forpayment ? "1px solid lightgrey" : "none;")};
  .fa-money,
  .payment-card,
  .payment-plus {
    position: relative;
    top: -0.5vw;
  }
  border-bottom: ${prop => (prop.noBorderBottom ? "none" : "")};
  span {
    color: ${prop => (prop.blackColor ? "black" : "")};
  }
`;

const LocationWrapper = styled.div`
  margin-top: ${prop => (prop.marginTop ? "2rem" : "0rem")};
  height: 2.2rem;
  padding-left: 27%;
  width: inherit;
  padding-top: 0.5rem;
  i,
  span {
    color: skyblue;
  }
  span {
    text-align: center;
    font-size: 0.9rem;
    width: 100%;
  }
`;

const UserProfileWrapper = styled.div`
  box-shadow: 1px 0px 2px 3px lightgrey;
  .current {
    background: rgb(240, 240, 240);
    color: #539dc2;
  }
`;

export default UserProfile;

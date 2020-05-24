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
      <ProfileNavWrapper marginTop className="current">
        <ProfileNav iconName="fa fa-home" text="Dashboard" />
      </ProfileNavWrapper>
      <ProfileNavWrapper>
        <ProfileNav iconName="fa fa-credit-card" text="Payment" />
      </ProfileNavWrapper>
      <Link to="/new-transaction">
        <NewTransactionWrapper>
          <NewTransaction />
        </NewTransactionWrapper>
      </Link>
    </UserProfileWrapper>
  );
};
{
  /* <i className="far fa-credit-card"></i> */
}

const ProfileNav = ({ iconName, text }) => {
  return (
    <>
      <i className={`${iconName}`}></i>
      <span>{text}</span>
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
  //   background-color: #539dc2;
  background-color: #5dade2;
  color: white;
  font-size: 1.3rem;
  //   border: 1px solid green;
  width: 100%;
  padding-left: 10%;
  &:hover {
    filter: brightness(90%);
  }
  transition: 0.3s ease-out;
  span {
    margin: 0rem 2rem 0rem 0rem;
    font-size: 1.3rem;
    // border: 1px solid green;
    padding-top: -1rem;
    position: relative;
    top: -0.7rem;
  }
  i {
    font-size: 3rem;
    padding-top: 0.7rem;
  }
`;

const ProfileNavWrapper = styled.div`
  height: 4.5rem;
  margin-top: ${prop => (prop.marginTop ? "2rem" : "0rem")};
  width: 100%;
  //   border: 1px solid lightgrey;
  padding-left: 10%;
  padding-top: 1.6rem;
  font-size: 1.3rem;
  //   box-shadow: 1px 1px 1px 1px lightgrey;
  i {
    margin: 0rem 2rem 0 0;
  }
  span {
    // border: 1px solid pink;
  }
  cursor: pointer;
  &:hover {
    filter: brightness(90%);
    background: rgb(240, 240, 240);
  }
  transition: 0.3s ease-out;
`;

const LocationWrapper = styled.div`
  //   border: 1px solid purple;
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
    // border: 1px solid purple;
  }
`;

const UserProfileWrapper = styled.div`
  //   border: 1px solid lightgrey;
  box-shadow: 1px 0px 2px 3px lightgrey;
  //   height: 40rem;
  .current {
    background: rgb(240, 240, 240);
    color: #539dc2;
  }
`;

export default UserProfile;

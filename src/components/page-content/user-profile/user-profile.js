import React from "react";
import styled from "styled-components";
import { Avatar, AvatarContainer } from "../../navbar/navbar";
import { Button } from "../button/button";

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
        <i class="fa fa-map-marker"></i>
        <span> B9, ZikHall, UniIbadan</span>
      </LocationWrapper>
      <Button />
      <ProfileNavWrapper marginTop className="current">
        <ProfileNav iconName="fa fa-home" text="Dashboard" />
      </ProfileNavWrapper>
      <ProfileNavWrapper>
        <ProfileNav iconName="fa fa-credit-card" text="Payment" />
      </ProfileNavWrapper>
    </UserProfileWrapper>
  );
};
{
  /* <i class="far fa-credit-card"></i> */
}

const ProfileNav = ({ iconName, text }) => {
  return (
    <>
      <i class={`${iconName}`}></i>
      <span>{text}</span>
    </>
  );
};

const ProfileNavWrapper = styled.div`
  height: 4rem;
  margin-top: ${prop => (prop.marginTop ? "2rem" : "0rem")};
  width: 100%;
  //   border: 1px solid lightgrey;
  padding-left: 10%;
  padding-top: 1.3rem;
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
  //   border: 1px solid gold;
  .current {
    background: rgb(240, 240, 240);
    color: #539dc2;
  }
`;

export default UserProfile;

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
    </UserProfileWrapper>
  );
};

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
`;

export default UserProfile;

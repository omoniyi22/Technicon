import React from "react";
import styled from "styled-components";
import Icon from "../icon/icon";
import avatar from "../../../src/assets/suited-profile.jpg";
import { BrowserRouter as Router, Link } from "react-router-dom";
import images from "../../assets/images";

export function NavBar() {
  return (
    <>
      <NavBarWrapper className="row">
        <div className="col-1 logo offset-1">
          <Link to="/"></Link>
        </div>
        <div className=" col-1 offset-4 users-nav">
          <NavItem iconClassName="fa-users" text="Share" />
        </div>
        <div className="col-1">
          <NavItem iconClassName="fa-clipboard" text="Legal" />
        </div>
        <div className="col-1">
          <Link to="/about">
            <NavItem iconClassName="fa-exclamation-circle" text="About" />
          </Link>
        </div>
        <div className="col-1 notification">
          <NavItem iconClassName="fa-bell" text="Notifications" />
        </div>
        <div className="col-1">
          <NavItem iconClassName="fa-sign-out" text="Logout" />
        </div>
        <div className=" col-1 me-nav">
          <Link to="/dashboard">
            <AvatarContainer
              marginTop
              lineHeight
              centerText
              marginLeft
              fullWidth
            >
              <Avatar Username="Me" />
            </AvatarContainer>
          </Link>
        </div>
      </NavBarWrapper>
    </>
  );
}
const NavBarWrapper = styled.div`
  height: 5.5rem;
  width: 100%;
  margin: auto;
  background-color: #02364d;
  .logo {
    color: white;
    text-align: center;
    margin: auto;
    background-image: url(${images.logo});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    height: 44px;
    width: 74px;
  }
  @media (max-width: 1136px) {
    .me-nav {
      margin-right: 5rem;
    }
    .col-1 {
      margin-left: 1rem;
    }
    .fa-users,
    .fa-clipboard,
    .fa-exclamation-circle {
      position: relative;
      left: -0.2rem;
    }
  }
  .fa-bell {
    position: relative;
    left: 0.4rem;
  }
  @media (max-width: 990px) {
    .fa-users {
      position: relative;
      left: -0.4rem;
    }
  }
  @media (max-width: 850px) {
    .me-nav {
      margin-top: 1.2%;
    }
    .notification {
      position: relative;
      left: -1.1rem;
    }
    .fa-bell {
      position: relative;
      left: 1rem;
    }
  }
  @media (max-width: 790px) {
    .me-nav {
      margin-right: 3rem;
    }
    .col-1 {
      margin-left: 1.5rem;
    }
    .fa-users {
      position: relative;
      left: -0.2rem;
    }
  }
  @media (max-width: 552px) {
    .me-nav {
      margin-right: 1rem;
    }
    .col-1 {
      margin-left: 1.5rem;
    }
  }
`;

const NavItem = ({ iconClassName, text }) => {
  return (
    <NavItemWrapper>
      <Icon iconName={`${iconClassName}`} />
      <p>{text}</p>
    </NavItemWrapper>
  );
};
const NavItemWrapper = styled.div`
  height: 4rem;
  color: white;
  display: block;
  margin-top: 0.75rem;
  cursor: pointer;
  line-height: 1.115rem;
  p {
    text-align: center;
    font-weight: bold;
  }
  &:hover {
    filter: brightness(90%);
  }
  @media (max-width: 1000px) {
    p {
      font-size: 0.8rem;
    }
  }
  @media (max-width: 790px) {
    p {
      font-size: 0.7rem;
    }
  }
`;
export const Avatar = ({ Username }) => {
  return (
    <>
      <img src={avatar} alt="" />
      <p>{Username}</p>
    </>
  );
};

export const AvatarContainer = styled.div`
  height: ${(prop) => (prop.userSectionSize ? "6rem" : "3.5rem")};
  color: white;
  width: ${(prop) => (prop.shorterWidth ? "29%" : "100%")};
  margin: auto;
  display: block;
  margin-top: ${(prop) => (prop.marginTop ? "1.1rem" : "0rem")};
  line-height: ${(prop) => (prop.lineHeight ? "1.115rem" : "1rem")};
  // border: 1px solid green;
  img {
    cursor: pointer;
    max-width: 60%;
    max-height: 60%;
    border-radius: 50%;
    margin-left: ${(prop) => (prop.marginLeft ? "27%" : "24%")};
    margin-top: ${(prop) => (prop.marginTopImg ? "2rem" : "0rem")};
    // border: 1px solid red;
    @media (max-width: 850px) {
      margin-left: ${(prop) => (prop.marginLeft ? "17%" : "24%")};
    }
    &:hover {
      filter: brightness(90%);
    }
  }
  p {
    text-align: ${(prop) => (prop.centerText ? "center" : "left")};
    color: ${(prop) => (prop.blackColor ? "black" : "white")};
    font-weight: bold;
    // border: 1px solid red;
    height: 1.1rem;
    width: ${(prop) => (prop.fullWidth ? "100%" : "200%")};
    margin-top: ${(prop) => (prop.marginTopP ? "1.1rem" : "0rem")};
    font-size: ${(prop) => (prop.large ? "1.15rem" : "normal")};
  }
`;

import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom'
import Icon from "../icon/icon";
import avatar from "./../../assets/suited-profile.jpg";
import about from "./../../assets/svg/about.svg";
import legal from "./../../assets/svg/legal.svg";
import login from "./../../assets/svg/login.svg";
import share from "./../../assets/svg/share.svg";
import logo from "./../../assets/svg/real-logo.svg";
import { BrowserRouter as Router } from "react-router-dom";
import images from "../../assets/images";

export function NavBar() {
  return (
    <>
      <NavBarWrapper className="row">
        <div className=" col-1 logo  border">
          <div to="/">
           
          </div>
        </div>
        <div className=" col-1 offset-4 ">
          <NavItem iconName={share} text="Share" navIconClassName="" />
        </div>
        <div className="col-1">
          {/* <NavItem iconName={legal} text="Legal" navIconClassName="" /> */}
        </div>
        <div className="col-1">
          <div to="/#">
            <NavItem iconName={about} text="About" navIconClassName="" />
          </div>
        </div>
        <div className="col-1 notification">
          {/* <NavItem
            iconName={login}
            text="Notifications"
            navIconClassName="notification-img"
          /> */}
        </div>
        <div className="col-1">
          {/* <NavItem iconName={login} text="Logout" navIconClassName="" /> */}
        </div>
        <div className=" col-1 me-nav">
          {/* <div to="/dashboard">
            <AvatarContainer
              marginTop
              lineHeight
              centerText
              marginLeft
              fullWidth
            >
              <Avatar Username="Me" />
            </AvatarContainer>
          </div> */}
        </div>
      </NavBarWrapper>
    </>
  );
}
const NavBarWrapper = styled.div`
  font-family: inherit;
  .logo-container {
    width: 5rem;
    border: solid 2px white;
  }
  .logo-container img {
    max-width: 5rem;
  }
  height: 4rem;
  width: 100%;
  margin: auto;
  background: #02364d;
  .logo {
    color: white;
    text-align: center;
    margin: auto;
    background-image: url(${images.logo});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    height:37px;
    width: 74px;
  }
  @media (max-width: 1160px) {
    .notification-img {
      position: relative;

      left: 1.2rem;
    }
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
      left: -1.2rem;
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
  @media (max-width: 705px) {
    display: none;
  }
`;

const NavItem = ({ iconName, text, navIconClassName }) => {
  return (
    <NavItemWrapper>
      <div className="nav-img-container">
        <img src={iconName} alt="" className={navIconClassName} />
      </div>
      <p>{text}</p>
    </NavItemWrapper>
  );
};
const NavItemWrapper = styled.div`
  .nav-img-container {
    width: 30%;
    height: 40%;
    margin: auto;
    
  }
  .nav-img-container img {
    width: 100%;
    height: 100%;
  }

  height: 4rem;
  color: white;
  display: block;
  margin-top: 0.75rem;
  cursor: pointer;
  line-height: 1.115rem;
  width: 100%;
  p {
    text-align: center;
    font-weight: bold;
    position: relative;
    top: 0.4rem;
    color: #bdbdbd;
  }
  &:hover {
    filter: brightness(200%);
  }
  @media (max-width: 1000px) {
    p {
      font-size: 0.8rem;
    }
  }
  @media (max-width: 990px) {
    .nav-img-container {
      width: 50%;
      height: 40%;
      margin: auto;
      margin-top: 1.2rem;
    }
  }
  @media (max-width: 790px) {
    p {
      font-size: 0.7rem;
    }
    .nav-img-container {
      width: 55%;
      height: 40%;
      margin: auto;
      margin-top: 1.2rem;
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
  color: #bdbdbd;
  width: ${(prop) => (prop.shorterWidth ? "29%" : "100%")};
  margin: auto;
  display: block;
  margin-top: ${(prop) => (prop.marginTop ? "1.1rem" : "0rem")};
  line-height: ${(prop) => (prop.lineHeight ? "1.115rem" : "1rem")};

  img {
    cursor: pointer;
    max-width: 60%;
    max-height: 60%;
    border-radius: 50%;
    margin-left: ${(prop) => (prop.marginLeft ? "27%" : "24%")};
    margin-top: ${(prop) => (prop.marginTopImg ? "2rem" : "0rem")};

    @media (max-width: 850px) {
      margin-left: ${(prop) => (prop.marginLeft ? "17%" : "24%")};
    }
    &:hover {
      filter: brightness(90%);
    }
  }
  p {
    text-align: ${(prop) => (prop.centerText ? "center" : "left")};
    color: ${(prop) => (prop.blackColor ? "black" : "#BDBDBD")};
    font-weight: bold;

    height: 1.1rem;
    width: ${(prop) => (prop.fullWidth ? "100%" : "200%")};
    margin-top: ${(prop) => (prop.marginTopP ? "1.1rem" : "0rem")};
    font-size: ${(prop) => (prop.large ? "1.15rem" : "normal")};
  }
`;

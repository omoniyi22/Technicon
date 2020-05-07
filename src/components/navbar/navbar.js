import React from "react";
import styled from "styled-components";
import Icon from "../icon/icon";
import avatar from "../../../src/assets/suited-profile.jpg";

function NavBar() {
  return (
    <>
      <NavBarWrapper className="row">
        <div className=" element col-1 offset-5">
          <NavItem iconClassName="fa-users" text="Share" />
        </div>
        <div className="col-1">
          <NavItem iconClassName="fa-clipboard" text="Legal" />
        </div>
        <div className="col-1">
          <NavItem iconClassName="fa-exclamation-circle" text="About" />
        </div>
        <div className="col-1">
          <NavItem iconClassName="fa-bell" text="Notifications" />
        </div>
        <div className="col-1">
          <NavItem iconClassName="fa-sign-out" text="Logout" />
        </div>
        <div className="col-1">
          {/* <NavItem iconClassName="fa-users" text="Me" /> */}
          <Avatar />
        </div>
      </NavBarWrapper>
    </>
  );
}
const NavBarWrapper = styled.div`
  height: 5.5rem;
  width: 100%;
  margin: auto;
  background-color: #35586c;
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
  line-height: 1.115rem;
  p {
    text-align: center;
    font-weight: bold;
  }
`;
const Avatar = () => {
  return (
    <AvatarContainer>
      <img src={avatar} alt="" />
      <p>Me</p>
    </AvatarContainer>
  );
};

const AvatarContainer = styled.div`
  height: 4rem;
  color: white;
  display: block;
  margin-top: 0.75rem;
  line-height: 1.115rem;
  // border: 1px solid green;
  img {
    max-width: 60%;
    max-height: 60%;
    border-radius: 50%;
    margin-left: 27%;
  }
  p {
    text-align: center;
    font-weight: bold;
  }
`;

export default NavBar;

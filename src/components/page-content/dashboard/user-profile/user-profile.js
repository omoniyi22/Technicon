import React from "react";
import styled from "styled-components";
import { Avatar, AvatarContainer } from "../../../navbar/navbar";
import { Button } from "../../button/button";
import { BrowserRouter as Router, Link } from "react-router-dom";
const UserProfile = () =>{
  return (
    <div>      
        <i className="fa fa-map-marker"></i>
        <span> B9, ZikHall, UniIbadan</span>
      
      <Button />
      <Link to="/dashboard">
          <ProfileNav iconName="fa fa-home" text="Dashboard" />
      </Link>
      <Link to="/payment-gateway">
          <ProfileNav iconName="fa fa-credit-card" text="Payment" />
      </Link>
      <Link to="/new-transaction">
        
          <NewTransaction />
        
      </Link>
    </div>
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


export default UserProfile;

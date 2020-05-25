import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { ProfileNavWrapper, ProfileNav } from "../user-profile/user-profile";
import { BrowserRouter as Router, Link } from "react-router-dom";

export const UserPayment = () => {
  return (
    <>
      <p className="new-transaction-header-text">Dashboard</p>
      <UserNewTransactionWrapper>
        <p id="payment-method-text">Payment methods</p>
        <div className="payment-options">
          <br />
          <br />
          <div className="payment-method-option">
            <ProfileNavWrapper shorterHeight forpayment noCursorPointer>
              <ProfileNav iconName="fa fa-money" text="Cash" />
            </ProfileNavWrapper>
            <div class="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="option1"
                checked
              />
            </div>
          </div>
          <div className="payment-method-option">
            <ProfileNavWrapper shorterHeight forpayment noCursorPointer>
              <ProfileNav
                iconName="fa fa-credit-card payment-card"
                text="****1245"
              />
            </ProfileNavWrapper>
            <div class="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios2"
                value="option2"
                checked
              />
            </div>
          </div>
          <ProfileNavWrapper
            shorterHeight
            forpayment
            noBorderBottom
            noCursorPointer
          >
            <ProfileNav
              iconName="fa fa-plus-circle payment-plus"
              text="Add payment card"
            />
          </ProfileNavWrapper>
          <div className="bridge-line"></div>
          <p className="payment-method-text-2">Promo</p>
          <div className="discount-card">
            <div className="discount-text">
              <div className="text">-20% discount</div>
              <p> valid for 360 days, maximum value N400 Expires 12 Dec 2020</p>
            </div>
            <div className="discount-gift-icon">
              <i class="fa fa-gift"></i>
            </div>
          </div>
          <br />
          <Link to="/referral">
            <ProfileNavWrapper
              shorterHeight
              forpayment
              noBorderBottom
              blackColor
              noCursorPointer
              shorterWidth
            >
              <ProfileNav
                iconName="fa fa-gift payment-card"
                text="Enter referral code"
              />
            </ProfileNavWrapper>
          </Link>
        </div>
      </UserNewTransactionWrapper>
    </>
  );
};

const UserNewTransactionWrapper = styled.div`
  background-color: white;
  border: none;
  width: 82%;
  margin: auto;
  margin-top: 2.5vw;
  min-height: 37rem;
  .bridge-line {
    height: 2px;
    width: 119%;
    margin-left: -9.5%;
    border: 4px solid rgba(22, 22, 22, 0.05);
  }
  .payment-method-option {
    display: flex;
    input {
    }
    .form-check-input {
      position: relative;
      top: 1rem;
      cursor: pointer;
    }
  }
  #payment-method-text {
    width: 84%;
    height: 3rem;
    border-bottom: 1px solid lightgrey;
    position: relative;
    top: 2.5vw;
  }
  #payment-method-text,
  .payment-method-text-2 {
    margin: auto;
    font-size: 0.85rem;
    font-weight: bold;
  }
  .payment-method-text-2 {
    width: 100%;
    height: 1rem;
    margin: 2.5vw 0 0.3vw 0;
  }
  .discount-card {
    border-radius: 1rem;
    height: 10rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 2rem;
    color: white;
    background-color: #5dade2;
    .discount-text {
      width: 55%;
      .text {
        font-size: 1.1rem;
        font-weight: bolder;
        margin-bottom: 0.8rem;
      }
      p {
        width: 100%;

        word-wrap: break-word;
        font-size: 0.8rem;
        font-weight: normal;
        line-height: 1.1rem;
      }
    }
    .discount-gift-icon {
      font-size: 4.2rem;
      margin-right: 0.4rem;
      margin-top: 0.8rem;
    }
  }
`;
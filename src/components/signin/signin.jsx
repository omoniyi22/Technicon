import React from "react";
import styled from "styled-components";
import {
  SubmitButton,
  SubmitButtonWrapper
} from "../page-content/dashboard/new-transaction/new-transaction";
// import logo from "./logo";
import { BrowserRouter as Router, Link } from "react-router-dom";
export default function SignIn() {
  return (
    <SignUpWrapper>
      <div>
        <form>
          <div className="create-account-container">
            <div className="company-logo-container">
              {/* <img src={logo} alt="company-logo" /> */}
            </div>
            <div className="create-account-text">Sign In</div>
            <br />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="email address"
            />
          </div>
          <div className="form-group password-form">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder=""
            />
          </div>
          <div className="sigin-option">
            <Link to="/signin">
              <span id="sign-in-text">Forgot Password</span>
            </Link>
          </div>
          <SubmitButtonWrapper marginTop>
            <SubmitButton buttontext="Sign up" />
          </SubmitButtonWrapper>
        </form>
      </div>
    </SignUpWrapper>
  );
}
const SignUpWrapper = styled.div`
.company-logo-container{
  border: 2px solid grey;
  height: 7vw;
  width: 11vw;
  margin: auto;
  margin-top: 3vw;
  margin-bottom: 3vw;
}
.company-logo-container img{
  max-width: 100%;
  max-height: 100%;
}
.sigin-option{
  text-align: center;
  margin-top: 0.75rem;
}
#got-an-account-text{
  text-color: light: grey;
  font-size: 1rem;
}
#sign-in-text{
  font-weight: bold;
  color: #539dc2;
}

  width: 30vw;
  min-height: 36rem;
  border: 2px solid lightgrey;
  margin-bottom: 10rem;
  .create-account-text {
    font-size: 1.7rem;
    color: black;
    font-weight: bold;
    margin-bottom: 2vw;
    width: 100%;
    text-align: center;
  }
  .in-seconds-text {
    font-size: 1rem;
    font-weight: bold;
  }
  form {
    width: 84%;
    border: 2px solid none;
    min-height: 34.5rem;
    margin: auto;
  }
  .form-control {
    height: 3.5rem;
    padding-left: 1.5rem;
    color: grey;
    font-size: 1.2rem;
  }
`;

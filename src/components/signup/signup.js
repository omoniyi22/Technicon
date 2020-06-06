import React from "react";
import styled from "styled-components";
import {
  SubmitButton,
  SubmitButtonWrapper
} from "../page-content/dashboard/new-transaction/new-transaction";
import { BrowserRouter as Router, Link } from "react-router-dom";
export default function SignUp() {
  return (
    <SignUpWrapper>
      <div>
        <form>
          <div className="create-account-container">
            <span className="create-account-text">Create an account</span>
            <br />
            <span className="in-seconds-text">in 30 seconds or less</span>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Username"
            />
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
          <div className="form-group password-form">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="confirm password"
            />
          </div>
          <SubmitButtonWrapper marginTop>
            <SubmitButton buttontext="Sign up" />
          </SubmitButtonWrapper>
          <div className="sigin-option">
            <span id="got-an-account-text">Got an account?</span>
            <Link to="/signin">
              <span id="sign-in-text"> Sign in</span>
            </Link>
          </div>
        </form>
      </div>
    </SignUpWrapper>
  );
}
const SignUpWrapper = styled.div`
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
  .create-account-container {
    width: 100%;
    height: 4.2rem;
    text-align: center;
    line-height: 1.5rem;
    margin-top: 4rem;
  }
  .create-account-text {
    font-size: 1.7rem;
    color: black;
    font-weight: bold;
  }
  .in-seconds-text {
    font-size: 1rem;
    font-weight: bold;
  }
  .create-account-text {
  }
  form {
    width: 84%;

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

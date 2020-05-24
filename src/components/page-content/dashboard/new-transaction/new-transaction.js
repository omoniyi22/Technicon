import React from "react";
import styled from "styled-components";

const CustomRadioBtn = ({ text }) => {
  return (
    <>
      <div class="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios1"
          value="option1"
          checked
        />
        <label className="form-check-label radio-text" htmlFor="exampleRadios1">
          {text}
        </label>
      </div>
    </>
  );
};

const CustomInput = ({ title, formElementModule }) => {
  return (
    <CustomInputWrapper>
      <label htmlFor="exampleInputEmail1" className="complaint-text">
        {title}
      </label>
      {formElementModule}
    </CustomInputWrapper>
  );
};

const CustomInputWrapper = styled.div`
  margin-top: 0.2rem;
`;

export const UserNewTransaction = () => {
  return (
    <>
      <p className="new-transaction-header-text">New transaction</p>
      <UserNewTransactionWrapper>
        <form>
          <div className="form-group">
            <CustomInput
              title="COMPLAINT"
              formElementModule={
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="what is wrong with your device?"
                ></input>
              }
            />

            <br />
            <div className="input-with-select">
              <input
                className="form-control form-control-lg "
                type="text"
                placeholder="Phone number"
              />
              <select class="form-control form-control-lg">
                <option>Mobile Phone</option>
                <option>Phablet</option>
                <option>Tablet</option>
                <option>Mini pad</option>
              </select>
            </div>
            <CustomInput
              title="EMAIL ADDRESS"
              formElementModule={
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Email Address"
                ></input>
              }
            />
            <CustomInput
              title="Brand"
              formElementModule={
                <select class="form-control form-control-lg">
                  <option>Nokia</option>
                  <option>Samsung</option>
                  <option>iPhone</option>
                  <option>Tecno</option>
                </select>
              }
            />
            <br />
            <br />
            <CustomRadioBtn text="I need a dispatch rider" />
            <br />
            <CustomRadioBtn text="I will bring my gadget to a technicon office myself" />
            <br />
            <br />
            <br />
            <button type="button" className="btn btn-primary btn-lg btn-block">
              Next
            </button>
          </div>
        </form>
      </UserNewTransactionWrapper>
    </>
  );
};

const UserNewTransactionWrapper = styled.div`
  background-color: white;
  border: none;
  width: 84%;
  margin: auto;
  margin-top: 2.5vw;
  min-height: 40rem;
  form {
    padding: 2vw;
    .complaint-text {
      width: 84%;
      font-size: 0.8rem;
      font-weight: 600;
      margin: auto;
      margin-top: 1.2vw;
      margin-bottom: 0.4vw;
      margin-left: 0.4vw;
    }
    input::placeholder {
      font-size: 0.9rem;
      padding-left: 0.6vw;
    }
    input {
      font-size: 0.9rem;
      height: 3rem;
    }
    .input-with-select {
      display: flex;
    }

    select {
      min-height: 3rem;
      font-size: 15px;
      option {
        // border: 1px solid red;
      }
    }
    .radio-text {
      //   border: 1px solid blue;
      padding: 0.3vw 0 0 0.7vw;
    }
    .btn-block {
      //   border: 1px solid red;
      border-radius: 2rem;
      height: 3.5rem;
      line-height: 100%;
    }
  }
`;

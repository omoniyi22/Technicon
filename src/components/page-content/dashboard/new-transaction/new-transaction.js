import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export const CustomRadioBtn = ({ text, id, labelId }) => {
  return (
    <>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="exampleRadios"
          id={id}
          value="option1"
          defaultChecked
        />
        <label className="form-check-label radio-text" htmlFor={labelId}>
          {text}
        </label>
      </div>
    </>
  );
};

CustomRadioBtn.propTypes = {
  text: PropTypes.string.isRequired
};

export const CustomInput = ({ title, formElementModule }) => {
  return (
    <CustomInputWrapper>
      <label htmlFor="exampleInputEmail1" className="complaint-text">
        {title}
      </label>
      {formElementModule}
    </CustomInputWrapper>
  );
};

CustomInput.propTypes = {
  title: PropTypes.string.isRequired,
  formElementModule: PropTypes.any.isRequired
};

export const CustomInputWrapper = styled.div`
  margin-top: 0.2rem;
`;

export const UserNewTransaction = ({ text, buttontext }) => {
  return (
    <>
      <p className="new-transaction-header-text">{text}</p>
      <UserNewTransactionWrapper className="User-transaction-wrapper">
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
                className="form-control form-control-lg phone-number-details"
                type="text"
                placeholder="Phone number"
              />
              <select className="form-control form-control-lg phone-brand-details">
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
                <select className="form-control form-control-lg">
                  <option>Nokia</option>
                  <option>Samsung</option>
                  <option>iPhone</option>
                  <option>Tecno</option>
                </select>
              }
            />
            <br />
            <CustomRadioBtn
              id="exampleRadios1"
              labelId="exampleRadios1"
              text="I need a dispatch rider"
            />
            <br />
            <CustomRadioBtn
              labelId="exampleRadios2"
              id="exampleRadios2"
              text="I will bring my gadget to a technicon office myself"
            />
            <br />
            <br />
            <br />
            <button type="button" className="btn btn-primary btn-lg btn-block">
              {buttontext}
            </button>
          </div>
        </form>
      </UserNewTransactionWrapper>
    </>
  );
};
export const UserNewTransactionOverLay = styled.div`
  padding-top: ${prop => (prop.noPaddingTop ? "0vw" : "1.8vw")};
  .new-transaction-header-text {
    width: 82%;
    margin: auto;
    font-weight: bold;
  }
  .User-transaction-wrapper {
  }
`;

export const UserNewTransactionWrapper = styled.div`
  background-color: white;
  border: none;
  width: 82%;
  margin: auto;
  margin-top: 0.5vw;
  min-height: 35rem;
  form {
    .form-check {
      height: 1rem;
    }
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
    .form-check-input {
      cursor: pointer;
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
    .form-check {
      display: inline-block;
      position: relative;
      padding: 0 6px;
      margin: 10px 0 0;
    }

    .form-check input[type="radio"] {
      display: none;
    }

    .form-check label {
      color: #666;
      font-weight: normal;
    }

    .form-check label:before {
      content: " ";
      display: inline-block;
      position: relative;
      top: 5px;
      margin: 0 5px 0 0;
      width: 20px;
      height: 20px;
      border-radius: 11px;
      border: 2px solid #33a1c9;
      background-color: transparent;
      cursor: pointer;
    }

    .form-check input[type="radio"]:checked + label:after {
      border-radius: 11px;
      cursor: pointer;
      width: 12px;
      height: 12px;
      position: absolute;
      top: 9px;
      left: 10px;
      content: " ";
      display: block;
      background: #33a1c9;
    }
    select {
      min-height: 3rem;
      font-size: 15px;
      option {
      }
    }
    .radio-text {
      font-size: 0.8rem;
      font-weight: bold;
    }
    .btn-block {
      border-radius: 2rem;
      background-color: #33a1c9;
      border: none;
      height: 3.5rem;
      line-height: 100%;
      transition: 0.2s ease-in;
    }
    .btn-block:hover {
      filter: brightness(90%);
    }
    .phone-number-details {
      border-radius: 5px 0rem 0rem 5px;
    }
    .phone-brand-details {
      border-radius: 0px 5px 5px 0px;
      font-size: 0.9rem;
    }
  }
`;

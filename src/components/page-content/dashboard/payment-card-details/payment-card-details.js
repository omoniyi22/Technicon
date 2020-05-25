import React from "react";
import styled from "styled-components";

const CustomFormElement = ({ title, iconName, placeholder }) => {
  return (
    <>
      <form>
        <div className="form-group">
          <label for="exampleFormControlInput1">{title}</label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder={placeholder}
          />
          <i className={` ${iconName} icon`}></i>
        </div>
      </form>
    </>
  );
};
const CustomFormElementWrapper = styled.div`
  width: 80%;
  margin: auto;
  input {
    font-size: 0.9rem;
    font-weight: bold;
    height: 2.5rem;
    background-color: ${prop =>
      prop.greyInputBackground ? "rgba(22,22,22,0.05)" : ""};
    border: ${prop => (prop.greyInputBackground ? "none" : "")};
  }
  label {
    margin: 0% 0 2% 0;
    color: grey;
    font-weight: 600;
    font-size: 0.9rem;
  }
  .icon {
    // border: 1px solid red;
    position: relative;
    top: -1.8rem;
    left: ${prop => (prop.calenderIcon ? "80%" : "85%")};
  }
`;

function PaymentCardDetails() {
  return (
    <PaymentCardDetailsWrapper>
      <div className="card-details-container">
        <CustomFormElementWrapper>
          <CustomFormElement
            title="Cardholder name"
            iconName=""
            placeholder=""
          />
        </CustomFormElementWrapper>
        <CustomFormElementWrapper greyInputBackground>
          <CustomFormElement
            title="Card details"
            iconName="fa fa-credit-card"
            placeholder=""
          />
        </CustomFormElementWrapper>
        <div className="card-security-details">
          <CustomFormElementWrapper
            greyInputBackground
            expireDateWidth
            id="expire-date"
            calenderIcon
          >
            <CustomFormElement
              title="Card details"
              placeholder="MM/YY"
              iconName="fa fa-calendar"
            />
          </CustomFormElementWrapper>
          <CustomFormElementWrapper greyInputBackground CVVWidth id="cvv">
            <CustomFormElement title="CVV" iconName="" placeholder="" />
          </CustomFormElementWrapper>
        </div>
        <div className="card-details-submit-btn">Save</div>
        <div className="security-text-container">
          <div>
            <i class="fa fa-shield"></i>
          </div>
          <div className="security-confirmation-text">100% Security</div>
        </div>
      </div>
    </PaymentCardDetailsWrapper>
  );
}

export default PaymentCardDetails;
const PaymentCardDetailsWrapper = styled.div`
  background: white;
  height: 25rem;
  .card-security-details {
    display: flex;
    width: 80%;
    margin: auto;
    #expire-date {
      width: 50%;
    }
    #cvv {
      width: 40%;
      margin-top: 0rem;
    }
  }
  .card-details-submit-btn {
    font-weight: bold;
    font-size: 1.3rem;
    color: #6495ed;
    text-align: center;
    cursor: pointer;
    margin-bottom: 1.5rem;
  }
  .security-text-container {
    display: flex;
    justify-content: space-between;
    width: 65%;
    margin: auto;
    font-size: 1.3rem;
    text-transform: capitalize;
    font-weight bold;
  }
`;

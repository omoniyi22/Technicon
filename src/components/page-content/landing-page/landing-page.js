import React from "react";
import styled from "styled-components";
import BackgroundImage from "../../../assets/technicon-background.jpg";
import {
  UserNewTransaction,
  UserNewTransactionOverLay
} from "../dashboard/new-transaction/new-transaction";

const Headers = ({ heading, bar, subheading }) => {
  return (
    <>
      <div id="what-we-do-container">
        <h5 className="what-we-do">{heading}</h5>
      </div>
      {bar}
      <div id="special-service-container">
        <div className="special-service">{subheading}</div>
      </div>
    </>
  );
};

function LandingPage() {
  return (
    <LandingPageWrapper>
      <div className="row">
        <div className="col-5 new-transaction-from-homepage">
          <UserNewTransactionOverLay noPaddingTop>
            <UserNewTransaction text="" buttontext="Try for free" />
          </UserNewTransactionOverLay>
        </div>
        <div className="col-5 homepage-text">
          <p id="hire">Hire expert engineers to fix your gadgets.</p>
        </div>
      </div>
      <div>
        <Headers
          heading="What we do"
          subheading="Our repair services specialize in..."
          bar={
            <div id="bar-container">
              <div className="bar"></div>
            </div>
          }
        />
        <div className="services-wrapper technicon-service">
          <div className="services">
            <div className="brand">
              <div className="brand-image"></div>
              <div className="brand-text">
                All brands of laptops, and
                <span className="colored-text"> operating systems</span>
              </div>
            </div>
            <div className="andriod">
              <div className="andriod-image"></div>
              <div className="andriod-text">
                Android and IOS
                <span className="colored-text">
                  {" "}
                  mobile phones and accessories
                </span>
              </div>
            </div>
            <div className="Hardware">
              <div className="Hardware-image"></div>
              <div className="Hardware-text">
                Hardware and software of
                <span className="colored-text"> tablets and accessories</span>
              </div>
            </div>
          </div>
        </div>
        <Headers
          heading="Use Technicon in three steps..."
          bar=""
          subheading={
            <div>
              Our unbeateable services has placed us a leaders in <br /> the
              mobile engineering space
            </div>
          }
        />
        <div className="services-wrapper techicon-steps-wrapper">
          <div className="services">
            <div className="pickup">
              <div className="steps-image"></div>
              <div className="steps-header"></div>
              <div className="steps-paragraph"></div>
            </div>
            <div className="realtime">
              <div className="steps-image"></div>
              <div className="steps-header"></div>
              <div className="steps-paragraph"></div>
            </div>
            <div className="experts">
              <div className="steps-image"></div>
              <div className="steps-header"></div>
              <div className="steps-paragraph"></div>
            </div>
          </div>
        </div>
      </div>
    </LandingPageWrapper>
  );
}

const LandingPageWrapper = styled.div`
  background-color: black;
  height: 100rem;
  width: 100%;
  .row {
    background-image: url(${BackgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    margin: 0;
    height: 39rem;
    .new-transaction-from-homepage,
    .homepage-text {
      height: 32rem;
    }
  }
  #hire {
    margin-top: 28rem;
    font-size: 2.5rem;
    color: white;
    font-weight: bolder;
    width: 85%;
  }
  #what-we-do-container {
    width: 100%;
    height: inherit;
    margin-bottom: 0.5rem;
  }
  .what-we-do {
    color: white;
    font-size: 1.5rem;
    font-weight: bolder;
    width: 100%;
    margin: auto;
    margin-top: 3rem;
    text-align: center;
  }
  #bar-container {
    height: inherit;
    width: 100%;
  }
  .bar {
    width: 8%;
    height: 0.5rem;
    background-color: #38b0de;
    margin: auto;
  }
  #special-service-container {
    height: inherit;
    width: 100%;
  }
  .special-service {
    font-size: 1.2rem;
    padding-top: 2rem;
    margin: auto;
    color: #38b0de;
    text-align: center;
  }
  .services-wrapper {
    width: 100%;
    margin-top: 1.7rem;
  }
  .technicon-service {
    margin-bottom: 12vw;
  }
  .services {
    margin: auto;
    height: inherit;
    display: flex;

    width: 90%;
    justify-content: space-between;
  }
  .brand,
  .andriod,
  .Hardware {
    width: 30%;
    height: 6.5rem;
    border-radius: 0.5rem;
    background-color: lightgrey;
    margin: auto;
    display: flex;
    justify-content: space-between;
    background-color: white;
  }
  .brand,
  .Hardware {
    margin-top: 3rem;
  }
  .brand-image,
  .andriod-image,
  .Hardware-image {
    width: 4.1vw;
    height: 4.1vw;
    margin: auto;
    border-radius: 50%;
    background-color: lightgrey;
  }
  .brand-text,
  .andriod-text,
  .Hardware-text {
    width: 65%;
    margin: auto;
    font-weight: bolder;
    font-size: 0.9rem;
    line-height: 1.3rem;
  }
  .colored-text {
    color: #38b0de;
  }
  .techicon-steps-wrapper {
    padding-bottom: 2.5rem;
    background-color: black;
  }
  .pickup,
  .realtime,
  .experts {
    width: 27%;
    height: 17rem;
    border-radius: 0.5rem;
    background-color: lightgrey;
    margin: auto;
    background-color: white;
  }
  .pickup,
  .experts {
    margin-top: 6rem;
  }
`;
export default LandingPage;

import React from "react";
import styled from "styled-components";
import BackgroundImage from "../../../assets/fine-bg.jpg";
import {
  UserNewTransaction,
  UserNewTransactionOverLay
} from "../dashboard/new-transaction/new-transaction";
import SignUp from "../../signup/signup";
import SignIn from "../../signin/signin";
import ContactForm from "../contact_form/contact_form";
// import ContactForm from "../../contact_form/contact_form";

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
const HeadersWrapper = styled.span`
  #what-we-do-container {
    width: 100%;
    height: inherit;
    margin-bottom: 0.5rem;
  }
  .what-we-do {
    font-size: 1.5rem;
    font-weight: bolder;
    width: 100%;
    margin: auto;
    margin-top: 3rem;
    text-align: center;
    color: ${prop => (prop.blue ? "#38b0de" : "white")};
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
    color: ${prop => (prop.blue ? "#38b0de" : "white")};
    text-align: center;
  }
`;

// modal
const ModalTest = ({ show, children }) => {
  const showHideClassName = show
    ? " modal-test display-block"
    : "modal-test display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        {/* <button onClick={handleClose}>close</button> */}
      </section>
      <style jsx>{`
        .modal-test {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.6);
          z-index: 10;
        }
        .display-block {
          display: block;
        }
        .display-none {
          display: none;
        }
        .modal-main {
          position: fixed;
          width: 80%;
          height: auto;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-radius: 12px;
          // border: 1px solid red;
        }
      `}</style>
    </div>
  );
};

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    };
  }
  // modal
  showModal = () => {
    this.setState({ show: true });
  };
  hideModal = () => {
    this.setState({ show: false });
  };
  render() {
    return (
      <LandingPageWrapper>
        <div className="row">
          {/* <div className="col-5 new-transaction-from-homepage">
            <UserNewTransactionOverLay noPaddingTop>
              <UserNewTransaction text="" buttontext="Try for free" />
            </UserNewTransactionOverLay>
          </div> */}
          <div className="col-8 homepage-text">
            <p id="hire">Hire expert engineers to fix your gadgets.</p>
          </div>
        </div>
        <div>
          <br />
          <HeadersWrapper blue>
            <Headers
              heading="What we do"
              subheading="Our repair services specialize in..."
              bar={
                <div id="bar-container">
                  <div className="bar"></div>
                </div>
              }
            />
          </HeadersWrapper>
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
          <HeadersWrapper>
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
          </HeadersWrapper>
          <div className="services-wrapper techicon-steps-wrapper">
            <div className="services">
              <div className="pickup">
                <div className="steps-image"></div>
                <div className="steps-header">Pickup and delivery</div>
                <div className="steps-paragraph">
                  We pick up your device and deliver before/after or you may
                  visit a technicon office near you
                </div>
              </div>
              <div className="realtime">
                <div className="steps-image"></div>
                <div className="steps-header">Realtime updates</div>
                <div className="steps-paragraph">
                  Realtime updates on the status of your device as it is being
                  repaired
                </div>
              </div>
              <div className="experts">
                <div className="steps-image"></div>
                <div className="steps-header">Expert engineers</div>
                <div className="steps-paragraph">
                  hire the most trusted techincian to fix your mobile phone and
                  desktop
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <SignUp />
        <SignIn /> */}
        <br />
        <br />
        <ModalTest show={this.state.show}>
          <div className="coming-soon-container">
            <h1>We're Coming Soon</h1>
            <div className="action">
              <input
                className="action-btn subscribe subscribe-input"
                placeholder="email"
                type="text"
              />
              <div className="action-btn readmore">Subscribe</div>
            </div>
          </div>
        </ModalTest>
      </LandingPageWrapper>
    );
  }
}

const LandingPageWrapper = styled.div`
  .subscribe,
  .readmore {
    font-size: 2vw;
    color: white;
    text-align: center;
    padding-top: 3%;
    transition: 0.2s ease-in-out;
  }
  .subscribe:hover {
    border: none;
  }
  .readmore:hover {
    background-color: inherit;
    border: 0.5px solid white;
  }
  .subscribe:hover {
    background-color: #539dc2;
  }
  .coming-soon-container {
    min-height: 10vw;
    width: 100%;
  }
  .coming-soon-container h1 {
    font-size: 7vw;
    text-align: center;
    color: white;
  }
  .action {
    width: 40%;
    display: flex;
    justify-content: space-between;
    margin: auto;
  }
  .action-btn {
    border-radius: 8px;
    width: 48%;
    border: 0.5px solid white;
    height: 4vw;
    cursor: pointer;
    color: white;
  }
  .readmore {
    background-color: #539dc2;
    border: none;
  }
  .campaign-form-container {
    width: 100%;
    border-radius: 22px;
    margin: auto;
    margin-top: 0vw;
  }
  .subscribe-input {
    font-size: 1.5rem;
    padding-top: 0rem;
    background-color: lightgrey;
  }
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
      margin: auto;
      margin-top: 5rem;
    }
  }
  #hire {
    font-size: 2rem;
    color: white;
    font-weight: bolder;
    width: 100%;
    margin: auto;
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
    flex-wrap: wrap;
    width: 90%;
    justify-content: space-between;
  }
  .brand,
  .andriod,
  .Hardware {
    width: 20rem;
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
    width: 20rem;
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
  .steps-image {
    height: 55%;
    width: 70%;
    margin: auto;
    background-color: lightgrey;
    margin-top: 3%;
    margin-bottom: 2%;
  }
  .steps-header {
    text-align: center;
    width: 100%;
    font-weight: normal;
    font-size: 1.7rem;
    color: #38b0de;
    margin-bottom: 3%;
  }
  .steps-paragraph {
    width: 88%;
    margin: auto;
    font-size: 0.9rem;
    font-weight: bold;
    color: grey;
    text-align: center;
  }
  @media (max-width: 1071px) {
    .brand,
    .Hardware {
      margin-top: 0rem;
    }
    .brand,
    .andriod,
    .Hardware {
      margin-bottom: 2rem;
    }
    .brand-image,
    .andriod-image,
    .Hardware-image {
      width: 3.5rem;
      height: 3.5rem;
      margin: auto;
      border-radius: 50%;
      background-color: lightgrey;
    }
    .row {
      background-image: url(${BackgroundImage});
      background-repeat: no-repeat;
      background-size: cover;
      width: 100%;
      margin: 0;
      height: 30rem;
      .new-transaction-from-homepage,
      .homepage-text {
        height: 32rem;
        margin: auto;
      }
    }
    .pickup,
    .experts {
      margin-top: 0rem;
    }
    .pickup,
    .realtime,
    .experts {
      margin-bottom: 2rem;
    }
  }
  @media (max-width: 767px) {
    .coming-soon-container {
      min-height: 10vw;
      width: 100%;
    }
    .coming-soon-container h1 {
      font-size: 8vw;
      text-align: center;
      color: white;
      margin-bottom: 2rem;
    }
    .action {
      width: 70%;
      display: flex;
      justify-content: space-between;
      margin: auto;
    }
    .action-btn {
      border-radius: 8px;
      width: 48%;
      border: 0.5px solid white;
      height: 8vw;
      cursor: pointer;
      color: white;
      padding-top: 1.5rem;
    }
    .subscribe-input {
      font-size: 2rem;
      padding-top: 0rem;
    }
  }
`;
export default LandingPage;

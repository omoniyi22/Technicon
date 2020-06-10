import React from "react";
import styled from "styled-components";
import BackgroundImage from "../../../assets/fine-bg.jpg";
import {
  UserNewTransaction,
  UserNewTransactionOverLay,
} from "../dashboard/new-transaction/new-transaction";
import SignUp from "../../signup/signup";
import SignIn from "../../signin/signin";
import ContactForm from "../contact_form/contact_form";
import laptopImg from "../../../assets/svg/laptop-img.svg";
import phoneImg from "../../../assets/svg/phone-img.svg";
import tabletImg from "../../../assets/svg/tablet-img.svg";
import deliveryImg from "../../../assets/svg/delivery-img.svg";
import updatesImg from "../../../assets/svg/updates-img.svg";
import engineersImg from "../../../assets/svg/engineers-img.svg";
import designLeft from "../../../assets/svg/design-left.svg";
import designRight from "../../../assets/svg/design-right.svg";
import designLeft2 from "../../../assets/svg/design-left2.svg";
import designRight2 from "../../../assets/svg/design-right2.svg";
import images from "../../../assets/images";
import Landing from "../../landingPage";
import CustomButton, { InputWithButton } from "../../buttons/customButton";
import { getBlogPosts } from "../../../services/services";

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
    margin-top: 20px;
  }
  .what-we-do {
    font-size: 1.5rem;
    font-weight: bolder;
    width: 100%;
    margin: auto;
    margin-top: 0rem;
    text-align: center;
    color: ${(prop) => (prop.blue ? "#38b0de" : "white")};
    padding-top: ${(props) => (props.muchPaddingTop ? "6rem" : "0")};
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
    padding-bottom: 1rem;
  }
  .special-service {
    font-size: 1.2rem;
    padding-top: 2rem;
    margin: auto;
    color: ${(prop) => (prop.blue ? "#38b0de" : "white")};
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
        }
      `}</style>
    </div>
  );
};

const ComingSoon = () => {
  return (
    <ComingContainer>
      <Caption>We are launching soon</Caption>
      <IntroContainer>
        <Message>Stay safe so you could be part</Message>
        <Message>of our journey!</Message>
      </IntroContainer>

      <BigContainer>
        <Message big>Be the first to know</Message>
        <Message big>When we launch!</Message>
      </BigContainer>

      <InputContainer>
        <InputWithButton />
      </InputContainer>
    </ComingContainer>
  );
};

const InputContainer = styled.div`
  // border: 1px solid red;
  width: 280px;
  margin: 1.2rem 0;
`;

const BigContainer = styled.div`
  // border: 1px solid red;
`;

const ComingContainer = styled.div`
  // border: 1px solid orange;
  margin: 1.4rem auto;
  @media screen and (min-width: 1024px) {
    margin: 1.4rem auto;
    margin-left: 10%;
    margin-top: 10%;
  }
`;

const Message = styled.p`
  font-size: ${(props) => (props.big ? "2.6rem" : "1.4rem")};
  font-weight: ${(props) => (props.big ? "bold" : "600")};
  letter-spacing: 0.3px;
  color: #fff;

  @media screen and (max-width: 780px) {
    font-size: ${(props) => (props.big ? "1.4rem" : "1rem")};
    font-weight: ${(props) => (props.big ? "bold" : "600")};
    text-align: center;
  }
  @media screen and (max-width: 360px) {
    font-size: ${(props) => (props.big ? "1.3rem" : "1rem")};
    font-weight: ${(props) => (props.big ? "bold" : "600")};
    text-align: center;
  }
`;

const IntroContainer = styled.div`
  // border: 1px solid red;
  margin: 1.4rem 0;
`;

const Caption = styled.p`
  color: #fafafa;
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: normal;
  @media screen and (max-width: 360px) {
    text-align: center;
    font-size: 1.6rem;
  }
`;

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }
  // modal
  showModal = () => {
    this.setState({ show: true });
  };
  hideModal = () => {
    this.setState({ show: false });
  };

  componentDidMount() {
    console.log(process.env.BACKEND_URL);
    getBlogPosts()
      .then((result) => {
        console.log(result.data);
      })

      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <LandingPageWrapper>
        <div className="row">
          {/* do not remove the commented div below */}
          {/* <div className="col-5 new-transaction-from-homepage">
            <UserNewTransactionOverLay noPaddingTop>
              <UserNewTransaction text="" buttontext="Try for free" />
            </UserNewTransactionOverLay>
          </div> */}

          <ComingSoon />

          <div className="col-8 homepage-text">
            {/* <p id="hire">Hire expert engineers to fix your gadgets.</p> */}
          </div>
        </div>
        <div>
          {/* <div className="designs-container">
            <div className="design-left">
              <img src={designLeft} alt="" />
            </div>
            <div className="design-right">
              <img src={designRight} alt="" />
            </div>
          </div> */}

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
                <div className="brand-image">
                  <img src={laptopImg} />
                </div>
                <div className="brand-text">
                  All brands of laptops, and
                  <span className="colored-text"> operating systems</span>
                </div>
              </div>
              <div className="andriod">
                <div className="andriod-image">
                  {" "}
                  <img src={phoneImg} />
                </div>
                <div className="andriod-text">
                  Android and IOS
                  <span className="colored-text">
                    {" "}
                    mobile phones and accessories
                  </span>
                </div>
              </div>
              <div className="Hardware">
                <div className="Hardware-image">
                  {" "}
                  <img src={tabletImg} />
                </div>
                <div className="Hardware-text">
                  Hardware and software of
                  <span className="colored-text"> tablets and accessories</span>
                </div>
              </div>
            </div>
          </div>
          <div className="use-technicon">
            <div className="designs-container">
              <div className="design-left">
                <img src={designLeft2} alt="" />
              </div>
              <div className="design-right">
                <img src={designRight2} alt="" />
              </div>
            </div>
            <HeadersWrapper>
              <Headers
                heading="Use Technicon in three steps..."
                bar=""
                subheading={
                  <div>
                    Our unbeateable services has placed us a leaders in <br />{" "}
                    the mobile engineering space
                  </div>
                }
              />
            </HeadersWrapper>
          </div>
          <div className="services-wrapper techicon-steps-wrapper">
            <div className="services">
              <div className="pickup">
                <div className="steps-image">
                  <img src={deliveryImg} alt="" />
                </div>
                <div className="steps-header">Pickup and delivery</div>
                <div className="steps-paragraph">
                  We pick up your device and deliver before/after or you may
                  visit a technicon office near you
                </div>
              </div>
              <div className="realtime">
                <div className="steps-image">
                  {" "}
                  <img src={updatesImg} alt="" />
                </div>
                <div className="steps-header">Realtime updates</div>
                <div className="steps-paragraph">
                  Realtime updates on the status of your device as it is being
                  repaired
                </div>
              </div>
              <div className="experts">
                <div className="steps-image">
                  {" "}
                  <img src={engineersImg} alt="" />
                </div>
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
        <ModalTest show={this.state.show}>
          <div className="coming-soon-container">
            <h1>We're Coming Soon</h1>
            <div className="action">
              <input
                className="action-btn subscribe subscribe-input"
                placeholder="enter email"
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
  font-family: inherit;
  .designs-container {
    height: 6rem;
    display: flex;
    width: 90%;
    justify-content: space-between;
    margin: auto;
    position: relative;
    top: 5rem;
  }
  .design-left,
  .design-right {
    width: 11.5%;
    height: 100%;
  }
  .design-left img,
  .design-right img {
    width: 100%;
    height: 100%;
  }
  .subscribe,
  .readmore {
    font-size: 2vw;
    color: white;
    text-align: center;
    padding-top: 1.2%;
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
    width: 60%;
    display: flex;
    justify-content: space-between;
    margin: auto;
    margin-top: 1.5rem;
  }
  .action-btn {
    border-radius: 8px;
    width: 60%;
    border: 0.5px solid white;
    height: 4vw;
    cursor: pointer;
    color: white;
  }
  .readmore {
    background-color: #539dc2;
    border: none;
    width: 28%;
  }
  .campaign-form-container {
    width: 100%;
    border-radius: 22px;
    margin: auto;
    margin-top: 0vw;
  }
  .subscribe-input {
    font-size: 2vw;
    padding-top: 0rem;
    padding-top: -1rem;
    background-color: lightgrey;
  }
  // background-color: black;
  height: 100rem;
  width: 100%;
  .row {
    background-image: url(${images.landingSvg});
    box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.4);
    background-color: #000;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
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
    margin-top: 0rem;
  }
  .technicon-service {
    margin-bottom: 5vw;
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
    background-color: #2d9cdb;
    margin: auto;
    display: flex;
    justify-content: space-between;
    background-color: #f2f2f2;
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
    background-color: #2d9cdb;

    display: flex;
  }
  .brand-image img,
  .andriod-image img,
  .Hardware-image img {
    margin: auto;
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
    background: rgba(45, 156, 219, 0.5);
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
    padding-bottom: 2rem;
  }
  .pickup,
  .experts {
    margin-top: 6rem;
  }
  .steps-image {
    height: 55%;
    width: 70%;
    margin: auto;
    background-color: white;
    margin-top: 3%;
    margin-bottom: 2%;

    display: flex;
  }
  .steps-image img {
    width: 100%;
    height: 100%;
  }
  .steps-header {
    text-align: center;
    width: 100%;
    font-weight: normal;
    font-size: 1.7rem;
    color: #0179ad;
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
      background-color: #2d9cdb;
      display: flex;
    }
    .brand-image img,
    .andriod-image img,
    .Hardware-image img {
    }
    .row {
      background-image: url(${images.landingSvg});
      background-repeat: no-repeat;
      background-size: cover;
      width: 100%;
      margin: 0;
      height: 25rem;
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
      margin-bottom: 0.5rem;
    }
    .action {
      width: 100%;
      display: block;
      justify-content: space-between;
      margin: auto;
    }
    .action-btn {
      margin: auto;
      margin-top: 1rem;
      height: 2.5rem;
      font-size: 3vw;
    }
    .subscribe-input {
      margin-left: 20%;
      margin-top: 0rem;
      height: 2.5rem;
    }
  }
  @media (max-width: 705px) {
    position: relative;
    top: 4.7rem;
  }
  .use-technicon {
    background: rgba(45, 156, 219, 0.5);
  }
  @media (max-width: 560px) {
    .action-btn {
      margin: auto;
      margin-top: 1rem;
      height: 2.5rem;
      font-size: 3vw;
    }
    .readmore {
      padding-top: 2%;
    }
    .subscribe-input {
      margin-left: 20%;
      margin-top: 0rem;
      height: 2.5rem;
    }
  }
  @media (max-width: 560px) {
    .readmore {
      padding-top: 3%;
    }
  }
  @media (max-width: 380px) {
    .readmore {
      padding-top: 5%;
    }
  }
`;
export default LandingPage;

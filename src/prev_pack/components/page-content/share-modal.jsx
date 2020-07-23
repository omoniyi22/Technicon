import React, { useRef, useState } from "react";
import cancelIcon from "./svg/cancel-icon.svg";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { HorizontalLine } from "./horizontal-line";
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon,
  LinkedinShareButton,
  LinkedinIcon
} from "react-share";
//Dont repeat yourself
const shareUrl = "https://fandksavings.com";
const data = [
  {
    key: 1,
    icon: (
      <FacebookShareButton url={shareUrl} quote="share on Facebook">
        <FacebookIcon size={51.5} round={true} />
      </FacebookShareButton>
    ),
    text: "Facebook"
  },
  {
    key: 2,
    icon: (
      <TwitterShareButton url={shareUrl}>
        <TwitterIcon size={51.5} round={true} />
      </TwitterShareButton>
    ),
    text: "Twitter"
  },
  {
    key: 3,
    icon: (
      <WhatsappShareButton url={shareUrl}>
        <WhatsappIcon size={51.5} round={true} />
      </WhatsappShareButton>
    ),
    text: "WhatsApp"
  },
  {
    key: 4,
    icon: (
      <EmailShareButton url={shareUrl}>
        <EmailIcon size={51.5} round={true} />
      </EmailShareButton>
    ),
    text: "Mail"
  },
  {
    key: 5,
    icon: (
      <LinkedinShareButton url={shareUrl}>
        <LinkedinIcon size={51.5} round={true} />
      </LinkedinShareButton>
    ),
    text: "LinkedIn"
  }
];
export default function Share({
  onClick,
  inputValue,
  inputOnChange,
  copyButtonModule,
  copiedTextModule
}) {
  return (
    <div className="signup-container">
      <div className="anchor-and-cancel-container">
        <div className="anchor"></div>
        <div className="cancel" onClick={onClick} title="Abort this process">
          <img src={cancelIcon} />
        </div>
      </div>
      <div>
        <h1>Help by sharing</h1>
      </div>
      <div>
        <p>Fundraiser shared on social networks raise up to 3X more</p>
      </div>
      <HorizontalLine medium />
      <br />
      <div className="share-methods-container">
        {data.map(sharemethod => {
          return (
            <div className="share-method" key={sharemethod.key}>
              <div className="share-icon grow">
                <div className="img">{sharemethod.icon}</div>
              </div>
              <div className="share-text">{sharemethod.text}</div>
            </div>
          );
        })}
      </div>
      <div className="share-input">
        <div>
          <input
            type="name"
            name="fullname"
            className={` myforminput `}
            value={inputValue}
            onChange={inputOnChange}
          />
        </div>
        <div className="button-container">{copyButtonModule}</div>
      </div>
      {copiedTextModule}
      <style jsx>{`
      .share-input{
          display: flex;
          height: 4rem;
          justify-content: space-between;
          width: 80%;
          margin: auto;
      }
      .button-container{
        width: 10vw;
      }
      .btn-primary{
        max-width: 100%;
        height: 3.6rem;
        font-size: 1.4rem;
        font-weight: bolder;
      }
      .share-methods-container{
          width: 80%;
          margin: auto;
          min-height: 16rem;
          display: flex;
          justify-content: space-evenly;
          flex-wrap:wrap;
        }
        .share-method{
            border: 1px solid red;
          width: 10vw;
          height: 8vw;
      }
      .share-method:focus{
          outline-style: none;
      }
      .share-icon{
        width: 4vw;
        height: 4vw;
        margin: auto;
        cursor: pointer;
      }
      .share-icon:focus {
        outline-style: none;
      }
      .share-text{
        font-family: Muli;
        font-style: normal;
        font-weight: 500;
        font-size: 1.7vw;
        line-height: 33px;
        letter-spacing: 0.01em;
        color: #767575;
        margin: auto;
        text-align: center;
        border: 1px solid green;
    }
    @media(max-width: 1028px){
        .share-text{
            font-size: 1.4vw;
            margin-top: 2vw;
        }
        .share-method{
            border: 1px solid red;
          width: 10vw;
          height: 10vw;
      }
      .share-icon .img{
        width: 4vw;
        height: 4vw;
        margin-left: -20%;
        cursor: pointer;
        border: 1px solid yellow;
      }
    }
      .share-icon .img{
          max-width: 100%;
          max-height: 100%;
      }
          .signup-container {

          }
          .anchor-and-cancel-container{
            height: 4vw;
            padding-top: 1rem;
            width: 52%;
            margin-left: auto;
            display: flex;
            margin-right: 2vw;
            justify-content: space-between;
          }
          .anchor{
            width: 6vw;
            height: 1vw;
            background: #D9D5D5;
            border-radius: 20px;
          }
          .cancel{
            width: 2vw;
            height: 2vw;
          }
          .cancel img{
            max-width: 100%;
            max-height: 100%;
            cursor: pointer;
            margin: auto;
          }
          .signup-container h1 {
            width: 80%;
            font-family: Muli;
            font-style: normal;
            font-weight: bolder;
            font-size: 3vw;
            line-height: 80px;
            color: #00085b;
            margin: auto;
            text-align: center;
          }
          .signup-container p {
            width: 55%;
            font-family: Muli;
            font-style: normal;
            font-size: 1.5vw;
            line-height: 30px;
            color: #a7a7a7;
            margin: auto;
            text-align: center;
            margin-bottom: 2rem;
            border: 1px solid purple;
          }
          .btn {
            width: 60rem;
          }
          .label-text {
            font-size: 0.9rem;
            color: #0d2b76;
            position: relative;
            left: -0.5vw;
            bottom: -0.5rem;
        }
        .myforminput {
            width: 20vw;
            margin-top: 0rem;
            font-size: 15px;
            padding-left: 1rem;
            height: 60px;
            background: #f0f0f0;
            border-radius: 5px;
            border: none;
          }
          #myforminput {
            position: relative;
            top: -0.4vw;
          }
          .password {
            width: 120%;
            margin-top: 0.5rem;
            font-size: 1.3rem;
            padding-left: 1rem;
            height: 46px;
            background: #f0f0f0;
            border-radius: 5px 0 0 5px;
            border: none;
          }
          .password:focus {
            outline-style: none;
          }
          input:focus {
            outline-style: none;
          }
          .create-account {
            height: 30%;
            width: 100%;
          }

          .icon {
            color: #576d97;
            top: 0.4vw;
            position: relative;
            left: -0.5vw;
            // padding-left: -2rem;
          }
          .create-account .create-text {
            // border: 2px solid grey;
            display: block;
            width: 90%;
            height: 38px;
            // margin-left: 12%;
            padding-left: 12%;
            margin-bottom: 5%;
            font-family: inherit;
            font-style: normal;
            font-weight: bold;
            font-size: 39px;
            line-height: 102.7%;
            letter-spacing: 0.02em;
            color: #2336ff;
          }

          .info-section {
            width: 49.5%;
            margin-left: 4%;
          }
          .info-logo {
            width: 100%;
          }
          .form {
            width: 80%;
            margin: auto;
          }
          .signup-container {
            margin: 0;
            height: 38rem;
            background: #fafafa;
            border-radius: 22px;
          }
          .form-group {
            margin-bottom: 1.2rem;
            font-family: inherit;
            font-size: 16px;
            font-weight: bold;
          }
          label span {
            padding-left: 0.5rem;
          }
          .logo {
            padding-top: 68px;
            width: 100%;
          }
          .logo-container {
            width: 4.6%;
            margin: auto;
          }

          .footer {
            text-align: center;
            font-family: inherit;
            font-style: normal;
            font-weight: normal;
            font-size: 13px;
            line-height: 16px;
            letter-spacing: 0.02em;
            color: black;
          }
          .footer a {
            text-decoration: none;
          }    
          @media (min-width: 993px) and (max-width: 1199px) {
            .start-now {
              font-size: 100%;
            }
            .create-account {
              height: 40%;
              // border: 2px solid red;
              width: 100%;
            }
            .create-account .create-text {
              // border: 2px solid grey;
              display: block;
              width: 90%;
              height: 38px;
              // margin-left: 12%;
              padding-left: 12%;
              // margin-bottom: 7%;
              font-family: inherit;
              font-style: normal;
              font-weight: bold;
              font-size: 30px;
              line-height: 102.7%;
              letter-spacing: 0.02em;
              color: #2336ff;
            }
          }
          @media (max-width: 1175px) {
            .label-text {
              top: -0.2vw;
            }
          }
          @media (min-width: 992px) and (max-width: 1199.98px) {
            .create-account .create-text {
              margin-bottom: 5%;
            }
          }
          @media (min-width: 768px) and (max-width: 991.98px) {
            .signup-container {
              width: 100%;
              height: 27rem;
              padding-top: 0rem;
            }
            .share-text{
                display: none;
            }
            .share-method{
                height: 4rem;
            }
            .share-methods-container{
                width: 80%;
                margin: auto;
                min-height: 8rem;
                display: flex;
                justify-content: space-evenly;
                flex-wrap:wrap;
                border: 1px solid green;
              }
              .signup-container p{
                  margin-bottom: 0rem;
                  line-height: 1.2rem;
              }
            .form-group {
              margin-bottom: 1.2rem;
              font-family: inherit;
              font-size: 13px;
              font-weight: bold;
            }

            .info-section {
              width: 90%;
              margin-top: 1rem;
              margin-bottom: 8rem;
            }
            .create-account .create-text {
              margin-bottom: 0rem;
              margin-top: 01rem;

              font-size: 26px;
            }

            .start-now-journey {
              font-size: 80%;
            }
            .start-now {
              font-size: 80%;
            }

            .show-hide {
              height: inherit;
            }
          }
          @media (max-width: 950px) {
            .logo-container {
              width: 6.9%;
            }
          }

          // Small devices (landscape phones, 576px and up)
          @media (min-width: 576px) and (max-width: 767.98px) {
            .info-section {
              width: 90%;
              margin: auto;
              margin-bottom: 10rem;
              height: 2rem;
            }
            .info-logo {
              display: none;
            }
            .label-text {
              top: -0.4vw;
            }
            .create-account .create-text {
              // border: 2px solid grey;
              display: block;
              width: 100%;
              height: 58px;
              // margin-left: 12%;
              padding-left: 18vw;
              margin-bottom: 0%;
              font-family: inherit;
              font-style: normal;
              font-weight: bold;
              font-size: 30px;
              line-height: 102.7%;
              letter-spacing: 0.02em;
              color: #2336ff;
            }
            .start-now,
            .start-now-journey {
              padding-left: 18.5vw;
              text-align: left;
            }
            .start-now-journey {
              font-size: 95%;
            }
            .start-now {
              font-size: 95%;
            }
            .show-hide {
              height: inherit;
            }
            .signup-container {
                width: 100%;
                height: 27rem;
                padding-top: 0rem;
              }
              .share-text{
                display: none;
            }
            .share-method{
                height: 4rem;
            }
            .share-methods-container{
                width: 80%;
                margin: auto;
                min-height: 8rem;
                display: flex;
                justify-content: space-evenly;
                flex-wrap:wrap;
                border: 1px solid green;
              }
              .signup-container p{
                  margin-bottom: 0rem;
                  line-height: 1.2rem;
              }
              .btn-primary{
                max-width: 100%;
                height: 3.6rem;
                font-size: 1.1rem;
                font-weight: normal;
              }
          }
          @media (max-width: 650px) {
            .logo-container {
              width: 11%;
            }
          }
          @media (max-width: 575.98px) {
            .password {
              width: 120%;
            }
            .share-method{
                height: 4rem;
            }
            .share-methods-container{
                width: 80%;
                margin: auto;
                min-height: 8rem;
                display: flex;
                justify-content: space-evenly;
                flex-wrap:wrap;
                border: 1px solid green;
              }
              .share-icon{
                  margin-left:0rem;
              }
              .signup-container p{
                  margin-bottom: 0rem;
                  line-height: 1rem;
                  font-size: 1rem;
                  width: 90%;
              }
            .share-text{
                display: none;
            }
            .signup-container {
                width: 100%;
                height: 27rem;
                padding-top: 0rem;
              }
            .form-group {
              margin-bottom: 1.2rem;
              font-family: inherit;
              font-size: 13px;
              font-weight: bold;
              // padding: 1rem;
            }
            .info-section {
              width: 90%;
              margin: auto;
              margin-bottom: 6rem;
              height: 40rem;
            }
            .form {
              width: 85%;
              margin: auto;
              background: white;
              border-radius: 15px;
            }
            .start-now-journey {
              padding-left: 33%;
            }
            .create-account .create-text {
              // border: 2px solid grey;
              display: block;
              width: 90%;
              height: 58px;
              // margin-left: 12%;
              padding-left: 20%;
              margin-bottom: 0%;
              font-family: inherit;
              font-style: normal;
              font-weight: bold;
              font-size: 30px;
              line-height: 102.7%;
              letter-spacing: 0.02em;
              color: #2336ff;
            }
          }
          @media (max-width: 539px) {
            .label-text {
              top: -0.6vw;
            }
            .share-method{
                border: 1px solid red;
              width: 11vw;
              height: 10vw;
              margin-left: 0rem;
          }
          }
          @media (max-width: 470px) {
            .label-text {
              top: -1.1vw;
            }
          }
          }
        
        `}</style>
    </div>
  );
}

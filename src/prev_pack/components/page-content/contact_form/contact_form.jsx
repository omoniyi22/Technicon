import React from "react";
import styled from "styled-components";
import axios from "axios";
import {
  SubmitButton,
  SubmitButtonWrapper
} from "../dashboard/new-transaction/new-transaction";

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: ""
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:3000/send",
      data: this.state
    }).then(response => {
      if (response.data.status === "success") {
        alert("Message Sent.");
        this.resetForm();
        console.log(response.data);
      } else if (response.data.status === "Not Found") {
        alert("Message failed to send.");
      }
    });
    // grabbing input
    const form = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    };
    console.log(form);
  }
  resetForm() {
    this.setState({ name: "", email: "", message: "" });
  }

  render() {
    return (
      <SignUpWrapper>
        <div>
          <form
            id="contact-form"
            onSubmit={this.handleSubmit.bind(this)}
            method="POST"
          >
            <div className="create-account-container">
              <div className="create-account-text">Coming Soon!!!!</div>
              <div className="in-seconds-text">Get notified</div>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Username"
                id="name"
                value={this.state.name}
                onChange={this.onNameChange.bind(this)}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                value={this.state.email}
                onChange={this.onEmailChange.bind(this)}
              />
            </div>
            <div className="form-group password-form">
              <label htmlFor="message">Message (optional)</label>
              <textarea
                className="form-control"
                rows="5"
                id="message"
                value={this.state.message}
                onChange={this.onMessageChange.bind(this)}
              />
            </div>
            <SubmitButtonWrapper marginTop>
              <SubmitButton type="submit" buttontext="Get Notified" />
            </SubmitButtonWrapper>
          </form>
        </div>
      </SignUpWrapper>
    );
  }
  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }
}
const SignUpWrapper = styled.div`
background-color: white;
margin: auto;
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
    height: 6.2rem;
    text-align: center;
    line-height: 1.5rem;
    margin-top: 4rem;
  }
  .create-account-text {
    font-size: 1.7rem;
    color: black;
    font-weight: bold;
    margin-bottom: 1vw;
  }
  .in-seconds-text {
    font-size: 1rem;
    font-weight: bold;
    margin-buttom: 3vw;
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
  position: relative;
  top: 5rem;
`;

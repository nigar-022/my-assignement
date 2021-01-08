import React, { Component } from "react";
import ButtonView from "../../ButtonView";
import InputTextView from "../../InputTextView";
import LogoView from "../../LogoView";
import TextView from "../../TextView";
import "./index.css";
import { Link } from "react-router";

const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

class Login extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      password: "",
      isFormSubmitted: false,
      userNameError: "",
      passwordError: "",
    };

    this.validateField = this.validateField.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.validateFirstName = this.validateUserName.bind(this);
  }
  // handleChange = (event) => {
  //   const { name, value } = event.target;
  //   console.log(event.target.value);
  //   this.setState({
  //     [name]: value,
  //   });

  //   return;
  // };

  handleClick = () => {
    console.log("clicked");
  };

  handleChange = (event) => {
    this.setState({
      userName: event.target.value,
      password: event.target.value,
    });

    console.log(event.target.value);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let formFields = ["userName", "password"];
    let isValid = true;
    formFields.forEach((field) => {
      isValid = this.validateField(field) && isValid;
      console.log(isValid);
    });

    if (isValid) this.setState({ isFormSubmitted: true });
    else this.setState({ isFormSubmitted: false });

    return this.state.isFormSubmitted;
  };

  validateField(name) {
    let isValid = false;

    if (name === "userName") isValid = this.validateUserName();
    else if (name === "password") isValid = this.validatePassword();

    return isValid;
  }

  validateUserName() {
    let userNameError = "";
    const value = this.state.userName;
    if (value.trim() === "") userNameError = "User Name is required";

    this.setState({
      userNameError,
    });
    return userNameError === "";
  }

  validatePassword() {
    let passwordError = "";
    const value = this.state.password;
    if (value.trim === "") passwordError = "Password is required";
    else if (!passwordValidator.test(value))
      passwordError =
        "Password must contain at least 8 characters, 1 number, 1 upper and 1 lowercase!";

    this.setState({
      passwordError,
    });
    return passwordError === "";
  }

  render() {
    const { userName } = this.state;
    return (
      <div className="form-data">
        {this.state.isFormSubmitted ? (
          <div className="details">
            <h3>Thanks for signing {userName} !</h3>
          </div>
        ) : (
          <div style={{ textAlign: "center" }}>
            <form onSubmit={this.handleSubmit}>
              <LogoView text="Instagram" title="Insta Logo" />

              <InputTextView
                placeholder="Enter Username"
                name="userName"
                value={this.state.userName}
                inputbcolor="grey"
                type="text"
                autoComplete="on"
                onChange={this.handleChange}
              />
              <br />
              {this.state.userNameError && (
                <div className="errorMsg">{this.state.userNameError}</div>
              )}
              <InputTextView
                placeholder="Enter Password"
                name="password"
                value={this.state.password}
                inputbcolor="grey"
                type="password"
                autoComplete="off"
                onChange={this.handleChange}
              />
              <br />
              {this.state.passwordError && (
                <div className="errorMsg">{this.state.passwordError}</div>
              )}

              <ButtonView
                size="md"
                color="blue"
                textcolor="white"
                Link
                to={"/feeds"}
                onClick={this.handleClick}
              />
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default Login;

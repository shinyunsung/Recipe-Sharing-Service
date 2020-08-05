import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";
import styled from "styled-components";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      provider: "",
    };
  }
  // Google Login
  responseGoogle = (res) => {
    console.log(res);
  };

  // Login Fail
  responseFail = (err) => {
    console.error(err);
  };

  render() {
    return (
      <Container>
        <GoogleLogin
          clientId={process.env.REACT_APP_Google}
          buttonText="Google"
          onSuccess={this.responseGoogle}
          onFailure={this.responseFail}
        />
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: flex-end;
`;

export default Login;

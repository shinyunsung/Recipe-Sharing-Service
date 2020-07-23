import React from "react";
import { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Logo from "../../asets/Logo.png";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    const Body = styled.div`
      width: 100%;
      height: 60px;

      background: #ffffff;
      border: 1px solid #e5e5e5;
      box-sizing: border-box;
    `;
    const Wrapper = styled.div`
      margin: 0 auto;
      width: 940px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    `;

    return (
      <Body>
        <Wrapper>
          <Link to="">
            <img src={Logo} alt="logo"></img>
          </Link>
        </Wrapper>
      </Body>
    );
  }
}

export default Header;

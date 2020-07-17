import React from "react";
import { Component } from "react";
import styled from "styled-components";
import Search from "../../asets/search.png";

class SerchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    const Input = styled.input`
      padding-left: 20px;
      width: 420px;
      height: 40px;
      background: #ffffff;
      border: 1px solid #ff6600;
      box-sizing: border-box;
      outline: none;
    `;

    const Button = styled.button`
      width: 40px;
      height: 40px;
      background: #ff6600;
      border: none;
      cursor: pointer;
    `;

    const Div = styled.div`
      margin: 50px 0;
      display: flex;
      justify-content: center;
      align-items: center;
    `;
    return (
      <Div>
        <Input type="text" placeholder="나는 배고프다 고로 검색한다." />
        <Button>
          <img src={Search} alt="search" />
        </Button>
      </Div>
    );
  }
}

export default SerchBar;

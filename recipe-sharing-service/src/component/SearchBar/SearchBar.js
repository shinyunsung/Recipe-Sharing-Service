import React from "react";
import { Component } from "react";
import styled from "styled-components";
import Search from "../../asets/search.png";
import { Link } from "react-router-dom";

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
      border: 1px solid ${(props) => props.theme.mainColor};
      box-sizing: border-box;
      outline: none;
    `;

    const Button = styled.button`
      width: 40px;
      height: 40px;
      background: ${(props) => props.theme.mainColor};
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
          <Link to={`/SearchRecipe`}>
            <img src={Search} alt="search" />
          </Link>
        </Button>
      </Div>
    );
  }
}

export default SerchBar;

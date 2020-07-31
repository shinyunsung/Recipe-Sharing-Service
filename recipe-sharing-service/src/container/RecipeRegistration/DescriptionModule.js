import React from "react";
import { Component } from "react";
import styled from "styled-components";

import InputImage from "./InputImage";

class DescriptionModule extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const Input = styled.input.attrs({
      type: "text",
    })`
      width: ${(props) => props.width || "380px"};
      height: ${(props) => props.height || "20px"};
      padding: 10px;
      margin: 10px 0;
      border: 1px solid #c4c4c4;
      resize: none;
      ::placeholder {
        color: #c4c4c4;
      }
    `;

    const DescriptionModule = styled.div`
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      // flex-wrap: wrap;
    `;
    return (
      <DescriptionModule>
        <InputImage name="SubImg" width="220px"></InputImage>

        {/* Input Description */}
        <Input
          id="DescriptionModule"
          onChange={this.handleChange}
          as="textarea"
          width="520px"
          height="200px"
        ></Input>
      </DescriptionModule>
    );
  }
}

export default DescriptionModule;

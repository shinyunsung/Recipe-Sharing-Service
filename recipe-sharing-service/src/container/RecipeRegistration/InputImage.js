import React from "react";
import { Component } from "react";
import styled from "styled-components";
import Camera from "../../asets/mdi_camera_alt.png";

class InputImgage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      File: "",
      previewURL: "",
    };
  }

  handleFileOnChange = (event) => {
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        previewURL: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };

  render() {
    const InputImg = styled.div`
      width: ${(props) => props.width || "300px"};
      height: ${(props) => props.width || "300px"};
      background-image: url(${this.state.previewURL || Camera});
      background-size: ${(props) => props.width || "300px"}
        ${(props) => props.width || "300px"};
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    `;

    const InputImgBtn = styled.input.attrs({
      type: "file",
      id: "inputImgBtn",
      accept: "image/jpg,impge/png,image/jpeg,image/gif",
    })`
      bottom: 0;
      display: none;
    `;

    const InputImgLabel = styled.label.attrs({
      htmlFor: "inputImgBtn",
    })`
      width: 100px;
      height: 20px;
      background: #bdbdbd;
      font-size: 12px;
      line-height: 14px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
      cursor: pointer;
      margin-top: 80px;

      display: felx;
      justify-content: center;
      align-items: center;
    `;

    return (
      <div>
        <InputImg width={this.props.width}>
          <InputImgLabel>
            <InputImgBtn onChange={this.handleFileOnChange}></InputImgBtn>
            사진등록하기
          </InputImgLabel>
        </InputImg>
      </div>
    );
  }
}

export default InputImgage;

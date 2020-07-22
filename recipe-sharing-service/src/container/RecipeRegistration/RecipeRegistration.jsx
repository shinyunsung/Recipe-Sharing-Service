import React from "react";
import { Component } from "react";
import styled from "styled-components";

import "./RecipeRegistration.css";
import Header from "../../component/Header/Header";

import Camera from "../../asets/mdi_camera_alt.png";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PopularityRecipe: [],
    };
  }
  render() {
    const Wrapper = styled.div`
      margin: 0 auto;
      padding: 80px;
      width: 780px;
      background-color: white;
    `;

    const Section = styled.div`
      margin-bottom: 100px;
      display: flex;
      justify-content: center;
    `;
    const HalfSegmentation = styled.div`
      display: -webkit-box;
      justify-content: flex-end;
      width: 390px;
    `;
    const DividingLine = styled.div`
      border-bottom: 1px solid #c4c4c4;
      margin-bottom: 40px;
    `;

    const Subtitle = styled.div`
      font-size: 16px;
      line-height: 18px;
    `;

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

    const InputImg = styled.div`
      width: ${(props) => props.width || "300px"};
      height: ${(props) => props.width || "300px"};
      background: #e5e5e5;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    `;

    const InputImgBtn = styled.input.attrs({
      type: "file",
      id: "inputImgBtn",
    })`
      display: none;
    `;

    const InputImgLabel = styled.label.attrs({
      for: "inputImgBtn",
    })`
      width: 100px;
      height: 20px;
      background: #bdbdbd;
      font-size: 12px;
      line-height: 14px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      cursor: pointer;

      display: felx;
      justify-content: center;
      align-items: center;
    `;

    const DescriptionModule = styled.div`
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      // flex-wrap: wrap;
    `;

    const Button = styled.button`
      width: 140px;
      height: 60px;

      background: #bdbdbd;
      font-weight: 800;
      font-size: 18px;
      line-height: 20px;
      letter-spacing: 0.2em;
      border: none;
      &:hover {
        background: #ff6600;
        color: white;
        cursor: pointer;
      }
    `;
    return (
      <div>
        <Header></Header>
        <Wrapper>
          <h2>레시피 등록</h2>
          <DividingLine></DividingLine>

          {/* ===== Top section ===== */}
          <Section>
            {/* Input Title */}
            <HalfSegmentation>
              <label>
                <Subtitle>레시피 제목</Subtitle>
                <Input placeholder="레시피 제목을 입력하세요. " />
              </label>
              <label>
                <Subtitle>식재료 태그</Subtitle>
                <Input placeholder="식재료 태그를 입력하세요. " />
              </label>
            </HalfSegmentation>

            {/* Input Img */}
            <HalfSegmentation>
              <InputImg>
                <img src={Camera} alt="등록 아이콘" />
                <InputImgLabel>
                  사진등록하기
                  <InputImgBtn></InputImgBtn>
                </InputImgLabel>
              </InputImg>
            </HalfSegmentation>
          </Section>

          {/* ===== Body section ===== */}
          <Section>
            <DescriptionModule>
              {/* Input Img */}
              <InputImg width="220px">
                <img src={Camera} alt="등록 아이콘" />
                <InputImgLabel>
                  사진등록하기
                  <InputImgBtn></InputImgBtn>
                </InputImgLabel>
              </InputImg>

              {/* Input Description */}
              <Input as="textarea" width="520px" height="200px"></Input>
            </DescriptionModule>
          </Section>

          {/* ===== Completion section ===== */}
          <Section>
            <div
              style={{
                width: "50%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Button>추가</Button>
              <Button>등록</Button>
            </div>
          </Section>
        </Wrapper>
      </div>
    );
  }
}

export default App;
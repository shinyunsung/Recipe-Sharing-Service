import React from "react";
import { Component } from "react";
import styled from "styled-components";
import axios from "axios";

import "./RecipeRegistration.css";
import Header from "../../component/Header/Header";
import InputImage from "./InputImage";

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

// const InputImg = styled.div`
//   width: ${(props) => props.width || "300px"};
//   height: ${(props) => props.width || "300px"};
//   // background: #e5e5e5;
//   background-image: url(${Camera});
//   background-size: ${(props) => props.width || "300px"}
//     ${(props) => props.width || "300px"};
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
// `;

// const InputImgBtn = styled.input.attrs({
//   type: "file",
//   id: "inputImgBtn",
// })`
//   bottom: 0;
//   display: none;
// `;

// const InputImgLabel = styled.label.attrs({
//   htmlFor: "inputImgBtn",
// })`
//   width: 100px;
//   height: 20px;
//   background: #bdbdbd;
//   font-size: 12px;
//   line-height: 14px;
//   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
//   cursor: pointer;
//   margin-top: 80px;

//   display: felx;
//   justify-content: center;
//   align-items: center;
// `;

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

const HashtagArea = styled.div.attrs({
  id: "HashtagArea",
})`
  display: inline-block;
  width: 100%;
  height: 140px;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PopularityRecipe: [],
      hashtag: [],

      DescriptionModule: "",
      RecipeTitle: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    this._getList();
  }

  _getList() {
    const apiUrl = ""; //url 입력
    axios
      .post(apiUrl, null, {
        params: {
          RecipeTitle: this.state.RecipeTitle,
          hashtag: this.state.hashtag,
        },
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.setState({
        hashtag: this.state.hashtag.concat(e.target.value),
      });
      e.target.value = "";
    } else {
    }
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  render() {
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
                <Input
                  id="RecipeTitle"
                  placeholder="레시피 제목을 입력하세요. "
                  onChange={this.handleChange}
                />
              </label>
              <label>
                <Subtitle>식재료 태그</Subtitle>
                <Input
                  placeholder="식재료 태그를 입력 후 Enter를 누르세요. "
                  onKeyPress={this.handleKeyPress}
                  name="imgFile"
                  id="imgFile"
                />
              </label>
              <HashtagArea>
                <HashtagList Hashtag={this.state.hashtag}></HashtagList>
              </HashtagArea>
            </HalfSegmentation>

            {/* Input Img */}
            <HalfSegmentation>
              {/*
              <InputImg>
                //<img src={Camera} alt="등록 아이콘" />
                <InputImgLabel>
                  사진등록하기
                  <InputImage></InputImage>
                </InputImgLabel>
              </InputImg>
              */}
              <InputImage name="MainImg" width="300px"></InputImage>
            </HalfSegmentation>
          </Section>

          {/* ===== Body section ===== */}
          <Section>
            <DescriptionModule>
              {/* Input Img */}
              {/* <InputImg width="220px">
                {/* <img src={Camera} alt="등록 아이콘" />
                <InputImgLabel>
                  사진등록하기
                  <InputImgBtn></InputImgBtn>
                </InputImgLabel>
              </InputImg> */}

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

class HashtagList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return this.props.Hashtag.map((contact, index) => {
      return (
        <div
          style={{
            display: "inline-flex",
          }}
          key={index}
        >
          <ItemInfo Hashtag={this.props.Hashtag[index]} />
        </div>
      );
    });
  }
}

class ItemInfo extends React.Component {
  render() {
    const Hashtag = styled.div`
      margin: 5px;
      padding: 5px 15px;
      background: #ffffff;
      border: 1px solid #ff6600;
      box-sizing: border-box;
      border-radius: 50px;
      display: inline-block;

      font-size: 14px;
      text-align: center;

      color: #888888;
    `;
    return (
      <div>
        <Hashtag>#{this.props.Hashtag}</Hashtag>
      </div>
    );
  }
}

export default App;

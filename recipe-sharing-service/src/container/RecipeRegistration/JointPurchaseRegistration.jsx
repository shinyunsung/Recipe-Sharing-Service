import React from "react";
import { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

import "./RecipeRegistration.css";
import Header from "../../component/Header/Header";
import InputImage from "./InputImage";
import DescriptionModule from "./DescriptionModule";

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
      adress: "",
    };
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

  RegisterClick() {
    alert("등록되었습니다!");
  }

  inputModuleClick() {}

  render() {
    return (
      <div>
        <Header></Header>
        <Wrapper>
          <h2>공동구매 등록</h2>
          <DividingLine></DividingLine>

          {/* ===== Top section ===== */}
          <Section>
            {/* Input Title */}
            <HalfSegmentation>
              <label>
                <Subtitle>식재료 등록</Subtitle>
                <Input
                  id="RecipeTitle"
                  placeholder="레시피 제목을 입력하세요. "
                  onChange={this.handleChange}
                />
              </label>
              <label>
                <Subtitle>주소</Subtitle>
                <Input
                  id="adress"
                  placeholder="주소를 입력하세요. "
                  onChange={this.handleChange}
                />
              </label>
              <label>
                <Subtitle>식재료 설명 태그</Subtitle>
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
              <InputImage name="MainImg" width="300px"></InputImage>
            </HalfSegmentation>
          </Section>

          {/* ===== Body section ===== */}
          <Section>
            <DescriptionModule></DescriptionModule>
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
              <Button onClick={this.inputModuleClick}>추가</Button>
              <Link to="/">
                <Button onClick={this.RegisterClick}>등록</Button>
              </Link>
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
          <ItemInfo Hashtag={this.props.Hashtag[index]} index={this.index} />
        </div>
      );
    });
  }
}

class ItemInfo extends React.Component {
  triggerDelete() {
    if (window.confirm("이 태그를 삭제하겠습니까?")) {
    }
  }

  render() {
    const Hashtag = styled.div`
      margin: 5px;
      padding: 5px 15px;
      background: #ffffff;
      border: 1px solid #ff6600;
      box-sizing: border-box;
      border-radius: 50px;
      display: inline-block;
      cursor: pointer;

      font-size: 14px;
      text-align: center;
      color: #888888;

      -ms-user-select: none;
      -moz-user-select: -moz-none;
      -khtml-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    `;
    return (
      <div>
        <Hashtag onClick={this.triggerDelete}>#{this.props.Hashtag}</Hashtag>
      </div>
    );
  }
}

export default App;

import React from "react";
import { Component } from "react";
import styled from "styled-components";
import axios from "axios";
// import { Link } from "react-router-dom";
import "./ViewRecipe.css";
import Header from "../../component/Header/Header";
import Like from "../../asets/mdi_thumb_up.png";

class main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DetailRecipe: "",
    };
  }
  componentDidMount() {
    this._getList();
  }

  _getList() {
    const apiUrl = "dummy/DetailRecipe.json";
    axios
      .get(apiUrl)
      .then((data) => {
        this.setState({
          DetailRecipe: data.data.DetailRecipe,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const Wrapper = styled.div`
      margin: 0 auto;
      width: 940px;
      // height: 100vh;
    `;

    const MainImg = styled.img.attrs({
      src:
        "https://recipe1.ezmember.co.kr/cache/recipe/2017/11/21/0a09214720ddf173d39103262f06ebf11.jpg",
      alt: "메인 이미지",
    })`
      margin-top: 40px;
      width: 400px;
      height: 400px;
    `;

    const Section = styled.div`
      margin-bottom: 20px;
      padding: 20px;
      background-color: white;
      box-sizing: border-box;
    `;

    const MainBlock = styled.div`
      display: inline-block;
      box-sizing: border-box;
      padding: 0px 40px;
      margin: 20px 0;
      width: 50%;
      text-aligh: justify;
    `;
    return (
      <div>
        <Header></Header>
        <Wrapper>
          <Section className="block">
            <div className="center-Alignment">
              <MainImg></MainImg>
              <h3 className="Main-Title">{this.state.DetailRecipe.name}</h3>
            </div>

            <div>
              <MainBlock>
                <img src={Like} alt="좋아요"></img>
                좋아요
              </MainBlock>

              <MainBlock style={{ textAlign: "right" }}>
                <img src={Like} alt="좋아요"></img>
                1명
              </MainBlock>
            </div>
          </Section>

          <Section>
            <h4 style={{ textAlign: "left", padding: "10px 20px " }}>[재료]</h4>
            <ListView List={this.state.DetailRecipe.tag}></ListView>
          </Section>

          <Section>
            <h4 style={{ textAlign: "left", padding: "10px 20px " }}>[재료]</h4>
            <ListView List={this.state.DetailRecipe.tag}></ListView>
          </Section>
        </Wrapper>
      </div>
    );
  }
}

class ListView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    if (!this.props.List) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <ItmeList List={this.props.List} />
      </div>
    );
  }
}

class ItmeList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return this.props.List.map((contact, index) => {
      return <ItemInfo List={contact} key={index} />;
    });
  }
}

class ItemInfo extends React.Component {
  render() {
    console.log(this.props.List);
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
    return <Hashtag>#{this.props.List}</Hashtag>;
  }
}
export default main;

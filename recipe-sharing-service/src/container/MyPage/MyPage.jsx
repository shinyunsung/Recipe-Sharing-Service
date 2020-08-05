import React from "react";
import { Component } from "react";
import Header from "../../component/Header/Header";
// import Like from "../../asets/mdi_thumb_up.png";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import ItemList from "./ItmeList";

class MyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MyPage: [],
    };
  }

  componentDidMount() {
    this._getList();
  }

  _getList() {
    const apiUrl = "dummy/MyPage.json";
    axios
      .get(apiUrl)
      .then((data) => {
        this.setState({
          MyPage: data.data.SearchResultsList,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    console.log(this.state.MyPage);
    const Wrapper = styled.div`
      margin: 0 auto;
      padding: 80px 50px;
      height: 100%;
      width: 940px;
      background-color: white;
    `;
    const TiTle = styled.div`
      font-size: 26px;
      font-weight: 800;
      padding-bottom: 6px;
      border-bottom: solid 1px #fab514;
    `;

    return (
      <div className="container">
        <Header></Header>
        <Wrapper>
          <div>
            <TiTle>내가 작성한 게시물</TiTle>
            <ItemList List={this.state.MyPage[0]}></ItemList>

            <TiTle>좋아요 표시한 게시물</TiTle>
            <ItemList List={this.state.MyPage[0]}></ItemList>
          </div>
        </Wrapper>
      </div>
    );
  }
}

export default MyPage;

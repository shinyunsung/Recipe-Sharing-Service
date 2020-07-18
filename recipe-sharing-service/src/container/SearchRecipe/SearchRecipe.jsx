import React from "react";
import { Component } from "react";
import styled from "styled-components";

import SearchBar from "../../component/SearchBar/SearchBar";
import ListView from "../../component/ListView/ListView";
import Header from "../../component/Header/Header";

class main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      List: {
        ListName: [
          {
            name: "검색 결과",
            Recipe: [
              { Name: "1.고기 먹고 싶다.", Like: "100" },
              { Name: "2.고기가 먹고 싶다.", Like: "200" },
              { Name: "3.고기를 먹고 싶다.", Like: "300" },
              { Name: "4.고기는 먹고 싶다.", Like: "400" },
              { Name: "4.고기는 먹고 싶다.", Like: "400" },
              { Name: "4.고기는 먹고 싶다.", Like: "400" },
              { Name: "4.고기는 먹고 싶다.", Like: "400" },
              { Name: "4.고기는 먹고 싶다.", Like: "400" },
              { Name: "4.고기는 먹고 싶다.", Like: "400" },
              { Name: "4.고기는 먹고 싶다.", Like: "400" },
              { Name: "4.고기는 먹고 싶다.", Like: "400" },
              { Name: "4.고기는 먹고 싶다.", Like: "400" },
              { Name: "4.고기는 먹고 싶다.", Like: "400" },
              { Name: "4.고기는 먹고 싶다.", Like: "400" },
              { Name: "4.고기는 먹고 싶다.", Like: "400" },
            ],
          },
        ],
      },
    };
  }
  render() {
    const Wrapper = styled.div`
      margin: 0 auto;
      width: 940px;
    `;

    return (
      <div>
        <Header></Header>
        <Wrapper>
          <SearchBar></SearchBar>
          <ListView List={this.state.List.ListName[0]}></ListView>
        </Wrapper>
      </div>
    );
  }
}

export default main;

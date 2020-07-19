import React from "react";
import { Component } from "react";
import styled from "styled-components";
import axios from "axios";

import SearchBar from "../../component/SearchBar/SearchBar";
import ListView from "../../component/ListView/ListView";
import Header from "../../component/Header/Header";

class main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SearchResultsList: [],
    };
  }

  componentDidMount() {
    this._getList();
  }

  _getList() {
    const apiUrl = "dummy/SearchResultsList.json";
    axios
      .get(apiUrl)
      .then((data) => {
        this.setState({
          SearchResultsList: data.data.SearchResultsList,
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
    `;

    return (
      <div>
        <Header></Header>
        <Wrapper>
          <SearchBar></SearchBar>
          <ListView List={this.state.SearchResultsList[0]}></ListView>
        </Wrapper>
      </div>
    );
  }
}

export default main;

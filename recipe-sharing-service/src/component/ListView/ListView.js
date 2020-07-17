import React from "react";
import { Component } from "react";
import styled from "styled-components";

import Like from "../../asets/mdi_thumb_up.png";
class ListView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        style={{
          display: "inline",
          width: "940px",
          wordBreak: "break-all",
        }}
      >
        <h2>{this.props.List.name}</h2>
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
    return this.props.List.Recipe.map((contact, i) => {
      return (
        <div
          style={{
            marginRight: "13px",
            marginBottom: "80px",
            display: "inline-flex",
          }}
        >
          <ItemInfo Like={contact.Like} Name={contact.Name} />
        </div>
      );
    });
  }
}

class ItemInfo extends React.Component {
  render() {
    const Item = styled.div`
      width: 220px;
      height: 300px;
      border: 1px #bdbdbd solid;
    `;

    const Picture = styled.div`
      padding: 5px;
      width: 210px;
      height: 210px;
      overflow: hidden;
    `;

    const Name = styled.p`
      margin: 0;
      padding: 10px;
      font-weight: bold;
      font-size: 14px;
    `;

    const NumberOfLike = styled.strong`
      padding: 0 5px;
      font-style: normal;
      font-size: 14px;
    `;

    return (
      <Item>
        <Picture>
          <img img src="http://placehold.it/210x210" alt="고기사진" />
        </Picture>
        <Name>{this.props.Name}</Name>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <img src={Like} alt="굳" />
          <NumberOfLike>좋아요 {this.props.Like}</NumberOfLike>
        </div>
      </Item>
    );
  }
}
export default ListView;
import React from "react";
import { Component } from "react";
import styled from "styled-components";

class MethodList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props.List);
    console.log("성공");
    return (
      <div
        style={{
          display: "inline",
          width: "940px",
          wordBreak: "break-all",
        }}
      >
        <ListView List={this.props.List} />
      </div>
    );
  }
}

class ListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return this.props.List.map((contact, i) => {
      return (
        <div>
          <ItemInfo List={this.props.List[i]} />
        </div>
      );
    });
  }
}

ListView.defaultProps = {
  List: [],
};

class ItemInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const Item = styled.div`
      display: flex;
      padding: 40px 0;
      width: 940px;
      height: 180px;

      border-top: 1px #f2f2f2 solid;
      border-bottom: 1px #f2f2f2 solid;
    `;

    const Picture = styled.img`
      margin-right: 20px;
      width: 220px;
      height: 180px;
      border-radius: 10px;
    `;

    const FirstLine = styled.div`
      display: inline-flex;
      align-items: center;
      height: 20px;
    `;

    const Personnel = styled.span`
      font-size: 14px;
      line-height: 16px;
    `;
    return (
      <Item>
        <Picture src={this.props.List.Image} alt="." />
        <div style={{ width: "700px" }}>
          <FirstLine>
            <Personnel>{this.props.List.text}</Personnel>
          </FirstLine>
        </div>
      </Item>
    );
  }
}

export default MethodList;

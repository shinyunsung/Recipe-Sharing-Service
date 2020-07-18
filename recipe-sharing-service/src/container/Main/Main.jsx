import React from "react";
import { Component } from "react";
import styled from "styled-components";

import MainImg from "../../asets/MainImg.png";
import recipe_registration from "../../asets/recipe_registration.png";
import Material_Registration from "../../asets/Material_Registration.png";

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
            name: "금주의 레시피",
            Recipe: [
              { Name: "1.고기 먹고 싶다.", Like: "100" },
              { Name: "2.고기가 먹고 싶다.", Like: "200" },
              { Name: "3.고기를 먹고 싶다.", Like: "300" },
              { Name: "4.고기는 먹고 싶다.", Like: "400" },
            ],
          },
          {
            name: "공동구매 레시피",
            Recipe: [
              { Name: "1.고기 먹고 싶다.", Like: "100" },
              { Name: "2.고기가 먹고 싶다.", Like: "200" },
              { Name: "3.고기를 먹고 싶다.", Like: "300" },
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
      // height: 100vh;
    `;

    const BackgroundImg = styled.div`
      width: 940px;
      height: 550px;
      display: inline-flex;
      justify-content: center;
      align-items: center;

      background-image: url(${MainImg});
    `;
    const ImgText = styled.div`
      padding: 5px 10px;
      background-color: rgba(0, 0, 0, 0.5);
      width: 480px;
      height: 200px;

      display: flex;
      justify-content: center;
      align-items: center;

      color: white;
      font-size: 22px;
      font-weight: bold;
      text-align: center;
    `;

    const RegisterButton = styled.div`
      display: inline-flex;
      justify-content: center;
      align-items: center;

      margin-bottom: 80px;
      width: 440px;
      height: 220px;
      border: 2px solid #c4c4c4;
      box-sizing: border-box;

      &: hover {
        border: 2px solid #ff6600;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        cursor: pointer;
      }
    `;

    return (
      <div>
        <Header></Header>
        <Wrapper>
          <>
            <BackgroundImg>
              <ImgText>
                <p>
                  나의 레시피 그리고 우리의 레시피
                  <br></br>
                  자취생의 식탁
                </p>
              </ImgText>
            </BackgroundImg>
          </>
          <SearchBar></SearchBar>
          <ListView List={this.state.List.ListName[0]}></ListView>
          <ListView List={this.state.List.ListName[1]}></ListView>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <RegisterButton>
              <img src={recipe_registration} alt="레시피 등록" />
            </RegisterButton>
            <RegisterButton>
              <img src={Material_Registration} alt="식재료 등록" />
            </RegisterButton>
          </div>
        </Wrapper>
      </div>
    );
  }
}

export default main;

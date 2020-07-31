import React from "react";
import { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

import MainImg from "../../asets/MainImg.png";
import recipe_registration from "../../asets/recipe_registration.png";
import Material_Registration from "../../asets/Material_Registration.png";

import SearchBar from "../../component/SearchBar/SearchBar";
import ListView from "../../component/ListView/ListView";
import Header from "../../component/Header/Header";
import "./Main.css";

class main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PopularityRecipe: [],
    };
  }
  componentDidMount() {
    this._getList();
  }

  _getList() {
    const apiUrl = "dummy/PopularityRecipe.json";
    axios
      .get(apiUrl)
      .then((data) => {
        this.setState({
          PopularityRecipe: data.data.PopularityRecipe,
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
      <div style={{ backgroundColor: "white" }}>
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
          <ListView List={this.state.PopularityRecipe[0]}></ListView>
          <Link to="/MoreRecipe">
            <h4 style={{ marginTop: "-50px", textAlign: "right" }}>더보기</h4>
          </Link>

          <ListView List={this.state.PopularityRecipe[1]}></ListView>
          <Link to="/MoreJointPurchase">
            <h4 style={{ marginTop: "-50px", textAlign: "right" }}>더보기</h4>
          </Link>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Link to="/RecipeRegistration">
              <RegisterButton>
                <img src={recipe_registration} alt="레시피 등록" />
              </RegisterButton>
            </Link>
            <Link to="/JointPurchaseRegistration">
              <RegisterButton>
                <img src={Material_Registration} alt="식재료 등록" />
              </RegisterButton>
            </Link>
          </div>
        </Wrapper>
      </div>
    );
  }
}

export default main;

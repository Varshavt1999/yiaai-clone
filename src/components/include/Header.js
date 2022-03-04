import React, { useState } from "react";
import "../../App.css";
import styled from "styled-components";
// import back from "../../assets/images/"
import JoinModal from "../include/modal/JoinModal";

function Header({ joinClick, setJoinClick }) {
  // const [joinClick, setJoinClick] = useState(false)
  return (
    <>
      <JoinModal joinClick={joinClick} setJoinClick={setJoinClick} />
      <Main>
        <SubContainer>
          <HeaderContainer className="wrapper">
            <LeftLogo href="#">
              <Logo
                src={require("../../assets/images/logo.svg").default}
                alt="Logo"
              />
            </LeftLogo>
            <RightBox>
              <Button
                onClick={() => {
                  setJoinClick((joinClick) => !joinClick);
                }}
                >
                Join Now
              </Button>
              
            </RightBox>
          </HeaderContainer>
        </SubContainer>
      </Main>
    </>
  );
}

const Main = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 2;
`;
const SubContainer = styled.div`
  position: relative;
  overflow: hidden;
`;
const HeaderContainer = styled.div`
  height: 100px;
  padding: 10px 5%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  /* background-color:rgba(f, f, f, 0.5); */
  /* opacity: 0.5; */
  width: 100%;
  box-shadow: rgb(0 0 0 / 3%) 0px 16px 24px;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(8px);
`;

const LeftLogo = styled.a`
  width: 120px;
  display: inline-block;
`;
const Logo = styled.img`
  display: block;
  width: 100%;
`;
const RightBox = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  margin-right: 20px;
  cursor: pointer;
  outline: none;
  border: none;
  background-image: linear-gradient(
    to right,
    #5ab757,
    #31b375,
    #00ad8d,
    #05a59d,
    #359ca4
  );
  padding: 18px 30px;
  border-radius: 5px;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;

export default Header;

import React from 'react'
import Bg from "../../../assets/images/06-welcome-popup/bg.svg"
import styled from "styled-components"
import {Link} from "react-router-dom"

function WelcomePopUp({click,setClick}) {
  return (
      <BackContainer style={{transform: click && "scale(1,1)"}}>
    {/* <Container > */}
        <MiddleBox>
            <TopBox>
                <LeftBox>
                    {/* <MainImg> */}
                        <Img src={require("../../../assets/images/06-welcome-popup/2students.svg").default} alt="students"/>
                    {/* </MainImg> */}
                </LeftBox>
                <RightBox>
                    <Heading>Welcome</Heading>
                    <SubText>
                        <TextImg src={require("../../../assets/images/06-welcome-popup/You got a free trial.svg").default} alt="text"/>
                    </SubText>
                    <Button to="/main-video/">
                        <ButtonImg src={require("../../../assets/images/06-welcome-popup/button.svg").default} alt="button"/>
                    </Button>
                </RightBox>
            </TopBox>
            <BottomBox>
                <LineImg src={require("../../../assets/images/06-welcome-popup/line.svg").default} alt="line"/>
            </BottomBox>
        </MiddleBox>
    {/* </Container> */}
    </BackContainer>
  )
}

const BackContainer=styled.div`
    position:fixed;
    transition: 0.3s;
    transform: scale(0,0);
    width:100%;
    height: 100vh;
    z-index: 1000;
    left: 0;
    top: 0;
    background: rgba(f,f,f,0.6);
    backdrop-filter: blur(2px);

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10% 0;
`;
// const Container = styled.div`
    /* backdrop-filter: blur(2px); */
    
    /* height: 100vh; */
    /* position: fixed; */
    /* width: 100%; */
// `;
const MiddleBox = styled.div`
    width: 45%;
    /* margin: 0 auto; */
    background-image: url(${Bg});
    background-size: cover;
    
`;
const TopBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`;
const LeftBox = styled.div`
    width: 45%;
`;
const Img = styled.img`
    display: block;
    width: 100%;
`;
const RightBox = styled.div`
    width: 45%;
    text-align: center;
`;
const Heading = styled.h3`
    color: #08BD80;
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 20px;
`;
const SubText = styled.div`
    width: 90%;
    margin: 0 auto;
`;
const TextImg = styled.img`
    display: block;
    width: 100%;
`;
const Button = styled(Link)`
    width: 90%;
    display: block;
    margin: 0 auto;
`;
const ButtonImg = styled.img`
    display: block;
    width: 100%;
`;
const BottomBox = styled.div`
    width: 100%;
`;
const LineImg = styled.img`
    display: block;
    width: 100%;
`;
export default WelcomePopUp
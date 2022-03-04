import React from 'react'
import styled from 'styled-components'
import background from "../../assets/images/01-Landingpage/background.svg"

function LandingSpotlight() {
  return (
    <Container>
        <BgContainer>
            <SponserBox>
                <ImageMedia src={require("../../assets/images/01-Landingpage/640.svg").default} alt="media"/>
            </SponserBox>
            <SubText>
                <Text>Presents</Text>
            </SubText>
            <Presents>
                <ImageTefun src={require("../../assets/images/01-Landingpage/tefun.svg").default} alt="media"/>
            </Presents>
            {/* <About>Technology fundamental program</About> */}
            <WhiteTextBox>
                <TextBox>
                    <Img src={require("../../assets/images/01-Landingpage/keralathile.svg").default} alt="text-img"/>
                </TextBox>
                <TextBox>
                    <Img src={require("../../assets/images/01-Landingpage/20lack.svg").default} alt="text-img"/>
                </TextBox>
                <TextBox>
                    <Img src={require("../../assets/images/01-Landingpage/vidyarthikalk.svg").default} alt="text-img"/>
                </TextBox>
                <TextBox>
                    <Img src={require("../../assets/images/01-Landingpage/soujanyamayi.svg").default} alt="text-img"/>
                </TextBox>
                <TextBox>
                    <Img src={require("../../assets/images/01-Landingpage/technology.svg").default} alt="text-img"/>
                </TextBox>
                <TextBox>
                    <Img src={require("../../assets/images/01-Landingpage/sadyathakl.svg").default} alt="text-img"/>
                </TextBox>
                <TextBox>
                    <Img src={require("../../assets/images/01-Landingpage/ariyam.svg").default} alt="text-img"/>
                </TextBox>
            </WhiteTextBox>
            <StartLearnButton>
                <LearnText>Start Learning </LearnText>
                <Arrow>
                    <ArrowImg src={require("../../assets/images/01-Landingpage/Icon feather-arrow-right.svg").default} alt="arrow"/>
                </Arrow>
            </StartLearnButton>
        </BgContainer>
    </Container>
  )
}

const Container = styled.div`
    padding: 8% 5% 20px;
`;
const BgContainer = styled.div`
    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat; 
    background-color: #000;
    border-radius: 5px;
    padding: 3% 0 2%;
`;
const SponserBox = styled.div`
   width: 28%;
   margin :0 auto 10px ;
`;
const Presents = styled.div`
   width: 15%;
   height: 100px;
   margin :0 auto 10px ;
`;
const ImageMedia = styled.img`
    width: 100%;
    display: block;
`;
const ImageTefun = styled.img`
    width: 100%;
    display: block;
`;
const SubText = styled.div`
    /* position: relative; */
`;
const Text = styled.p`
    /* &:before,
    &:after {
    background-color: #000;
    content: "";
    display: inline-block;
    height: 1px;
    position: absolute;
    vertical-align: middle;
    width: 50%;
    }
    &:before{
        left: 0;
        margin-left: 10px;
    }
    &:after{
        right: 0;
        margin-right: 10px;
    } */
    text-align: center;
    color: #fff;
    margin-bottom: 20px;
    font-size: 14px;
`;
// const TefunImg = styled.img`
//     width: 100%;
//     display: block;
// `;
// const About = styled.p`
//      text-align: center;
//     color: #fff;
//     margin-bottom: 20px;
//     font-size: 14px;
// `;
const WhiteTextBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 68%;
    margin: 0 auto;
`;
const TextBox = styled.span`
    width: 22%;
    &:first-child{
        margin-left:15%;
    }
    &:nth-child(3){
        margin-right:15%;
    }
`;
const Img = styled.img`
    width: 100%;
    display: block;
`;
const StartLearnButton = styled.button`
    cursor: pointer;
    outline: none;
    border: none;
    background-image: linear-gradient(to right, #2f9aac, #00a5a6, #00ae93, #27b576, #61b950);
    padding: 16px 30px;
    border-radius: 5px;
    width: 18%;
    margin: 0 auto 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
`;
const LearnText = styled.div`
    font-size: 16px;
    color: #fff;
    font-weight: bold;
`;
const Arrow = styled.div`
    width: 10px;
`;
const ArrowImg = styled.img`
    width: 100%;
    display: block;
`;
export default LandingSpotlight



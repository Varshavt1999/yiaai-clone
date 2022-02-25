import React from 'react'
import styled from 'styled-components'

function LandingSpotlight() {
  return (
    <Container>
        <BgContainer>
            <SponserBox>
                <Image src={require("../../../assets/images/01-Landingpage/tefun.svg").default} alt="tefun"/>
            </SponserBox>
            <SubText>
                <Text>Presents</Text>
            </SubText>
            <Tefun> 
                <TefunImg src={require("../../../assets/images/01-Landingpage/tefun.svg").default} alt="tefun"/>
            </Tefun>
            <About>Technology fundamental program</About>
            <WhiteTextBox>
                <TextBox>
                    <Img1 src={require("../../../assets/images/01-Landingpage/keralathile.svg").default} alt="text-img"/>
                </TextBox>
                <TextBox>
                    <Img1 src={require("../../../assets/images/01-Landingpage/20lack.svg").default} alt="text-img"/>
                </TextBox>
                <TextBox>
                    <Img1 src={require("../../../assets/images/01-Landingpage/vidyarthikalk.svg").default} alt="text-img"/>
                </TextBox>
                <TextBox>
                    <Img1 src={require("../../../assets/images/01-Landingpage/soujanyamayi.svg").default} alt="text-img"/>
                </TextBox>
                <TextBox>
                    <Img1 src={require("../../../assets/images/01-Landingpage/technology.svg").default} alt="text-img"/>
                </TextBox>
                <TextBox>
                    <Img1 src={require("../../../assets/images/01-Landingpage/sadyathakl.svg").default} alt="text-img"/>
                </TextBox>
                <TextBox>
                    <Img1 src={require("../../../assets/images/01-Landingpage/ariyam.svg").default} alt="text-img"/>
                </TextBox>
            </WhiteTextBox>
        </BgContainer>
    </Container>
  )
}

const Container = styled.div`
    padding: 25px;
`;
const BgContainer = styled.div`
    background-color: #000;
    border-radius: 5px;
    padding-top: 7%;
`;
const SponserBox = styled.div`
   width: 20%;
   height: 100px;
   background-color: #fff;
   margin :0 auto 20px ;
`;
const Image = styled.img`
    
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
    font-size: 16px;
`;
const Tefun = styled.div`
    width:1%;
    margin: 0 auto ;
`;
const TefunImg = styled.img`
    width: 100%;
    display: block;
`;
const About = styled.p`
    
`;
const WhiteTextBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const TextBox = styled.span`
    width: 10%;
`;
const Img1 = styled.img`
    width: 100%;
    display: block;
`;

export default LandingSpotlight



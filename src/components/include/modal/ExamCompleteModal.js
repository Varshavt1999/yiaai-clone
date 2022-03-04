import React from 'react'
import styled from "styled-components"
import MainBg from "../../../assets/images/09-exam-complete/Group 23101.svg"


function ExamCompleteModal() {
  return (
    <Container>
        <BgContainer> 
            <TefunLogoBox>
                <TefunLogo src={require("../../../assets/images/09-exam-complete/Tefun-logo.svg").default} alt="logo"/>
            </TefunLogoBox>
            <InnerBg>
                <InnerBgImg src={require("../../../assets/images/09-exam-complete/innerbg.svg").default} alt="innerBg"/>
            </InnerBg>
            <BottomText>Congratulations!</BottomText>
            <Description>You Have Compleated Your Examination.We will provide Your Certificate soon</Description>
            <DashBoardBtn>Go To Dashboard</DashBoardBtn>
        </BgContainer>
    </Container>
  )
}

const Container = styled.div`
    padding: 30px 0;
`;
const BgContainer = styled.div`
    /* background-image: url(${MainBg});
    background-repeat: no-repeat;
    background-size: cover; */
    width: 90%;
    margin: 0 auto;
    border-radius: 8px;
    overflow: hidden;
    padding: 30px 20px 20px;
    background-color: #e8f8f2;
`;
const TefunLogoBox = styled.div`
    width: 150px;
`;
const TefunLogo = styled.img`
    display: block;
    width: 100%;
`;
const InnerBg = styled.div`
    width: 500px;
    margin: 0 auto;
`;
const InnerBgImg = styled.img`
    width: 100%;
    margin: 0 auto;
`;
const BottomText = styled.h4`
    margin-bottom: 15px;
    font-size: 20px;
    color: #0FA76F;
    text-align: center;
    font-weight: 500;
`;
const Description = styled.p`
    text-align: center;
    font-size: 12px;
    color: #707070;
    width: 30%;
    margin: 0 auto 30px;
`;
const DashBoardBtn = styled.div`
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 8px;
    color: #fff;
    background-color: #0FA76F;
    width: 200px;
    margin: 0 auto;
    font-size: 12px;
    text-align: center;
`;

export default ExamCompleteModal
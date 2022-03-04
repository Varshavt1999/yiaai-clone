import React from 'react'
import styled from "styled-components"

function ExamLockModal() {
  return (
    <Container>
        <InnerBg>
            <InnerBgImg src={require("../../../assets/images/15-exam-lock/middleimg.svg").default} alt="Middle"/>
        </InnerBg>
        <BottomText>Your Examination Is Locked</BottomText>
        <Description>Please Complete Your Lessons As Soon As Possible to Unlock Your Examination</Description>
        <DashBoardBtn>Go To Lessons</DashBoardBtn>
    </Container>
  )
}

const Container = styled.div`
    padding: 60px 30px 0;
    border-radius: 8px;
`;
const InnerBg = styled.div`
    width: 300px;
    margin: 0 auto 30px;
`;
const InnerBgImg = styled.img`
    width: 100%;
    margin: 0 auto;
`;
const BottomText = styled.h4`
    margin-bottom: 15px;
    font-size: 18px;
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
    padding: 10px 15px;
    cursor: pointer;
    border-radius: 6px;
    color: #fff;
    background-color: #0FA76F;
    width: 180px;
    margin: 0 auto;
    font-size: 14px;
    text-align: center;
`;

export default ExamLockModal
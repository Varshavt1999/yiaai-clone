import React from 'react'
import styled from 'styled-components';

function CourseCompletePopUp() {
  return (
    <MainContainer>
        <MiddleBox>
            <ContentBox>
                <LeFtBox>
                    <LeftImg src={require("../../../assets/images/08-course-complete-popup/Group 44833.svg").default} alt="Happy-Students"/>
                </LeFtBox>
                <Title>Hurray!</Title>
                <Description>You Have Succesfully Compleated Tefun Course...We will Notify Your examination date soon</Description>
                <DashBoardBtn>Go To Dashboard</DashBoardBtn>
            </ContentBox>
            <BottomLine>
                <BottomLineImg src={require("../../../assets/images/08-course-complete-popup/Group 44636.svg").default} alt="bottom-line"/>
            </BottomLine>
        </MiddleBox>
    </MainContainer>
  )
}

const MainContainer = styled.div`
    background-color: rgba(f,f,f,0.5);
    backdrop-filter: blur(8px);
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;
const MiddleBox = styled.div`
    width: 50%;
    margin: 0 auto;
`;
const ContentBox = styled.div`
    width: 100%;
    background-color: #ebf6f2;
    border-radius: 10px;
    position: relative;
    padding: 12% 30px 12% 45%;
    text-align: center;
`;
const LeFtBox = styled.div`
    width: 55%;
    position: absolute;
    left: -56px;
    top: 0;
    bottom: 0;
    margin: auto 0;
`;
const LeftImg = styled.img`
    display: block;
    width: 100%;
`;
// const RightBox = styled.div`
    
// `;
const Title = styled.h3`
    font-size: 22px;
    color: #15BF81;
    font-weight: 600;
    margin-bottom: 15px;
`;
const Description = styled.p`
    font-size: 13px;
    color: #15232ED8;
    font-weight: 500;
    margin-bottom: 30px;
`;
const DashBoardBtn = styled.div`
    padding: 10px 20px;
    width: 150px;
    background-color: #15BF81;
    color: #fff;
    font-size: 14px;
    font-weight: #fff;
    border-radius: 8px;
    margin: 0 auto;
    cursor: pointer;
`;
const BottomLine = styled.div`
    width: 100%;
`;
const BottomLineImg = styled.img`
    width: 100%;
    display: block;
`;

export default CourseCompletePopUp
import React from 'react'
import TimerModal from '../include/modal/TimerModal'
import OtherHeader from '../include/OtherHeader'
import styled  from 'styled-components'
import {Link} from "react-router-dom"

function ExamPage() {
  return (
    <div>
        <OtherHeader/>
        <Container>
            <TimerModal/>
            <MainBox>
                <MainTitle>The School Survey questions for Teachers in an in-depth survey that a school deploy to its teaching stuff to gather data about they perception about the school  </MainTitle>
                <BottomBox>
                    <LeftContainer>
                        <SymbolBox>
                            <TopSymbol>
                                <Round></Round>
                                <StartText>Start</StartText>
                            </TopSymbol>
                                <StartNo>01</StartNo>
                                <EndNo>02</EndNo>
                        </SymbolBox>
                    </LeftContainer>
                    <RightContainer>
                        <Box>
                            <QuestionLetter>A</QuestionLetter>
                            <Question>Another Answer Can Be Placed Here</Question>
                        </Box>
                        <Box>
                            <QuestionLetter>B</QuestionLetter>
                            <Question>Another Answer Can Be Placed Here</Question>
                        </Box>
                        <Box>
                            <QuestionLetter>C</QuestionLetter>
                            <Question>Another Answer Can Be Placed Here</Question>
                        </Box>
                        <Box>
                            <QuestionLetter>D</QuestionLetter>
                            <Question>Another Answer Can Be Placed Here</Question>
                        </Box>
                    </RightContainer>
                </BottomBox>
                <BottomButtonBox>
                    <NextButton to="/main-video/">Next</NextButton>
                </BottomButtonBox>
            </MainBox>
        </Container>
        

    </div>
    
  )
}

const Container = styled.div`
    padding: 8% 20px 20px;
`;

const MainBox = styled.div`
    padding: 5% 0 5% 0;
    width: 50%;
    margin: 0 auto;
`;
const MainTitle = styled.h3`
    font-size: 14px;
    margin-bottom: 20px;
    font-weight: 100;
    color: #15232ED8;
`;
const BottomBox = styled.div`
    position: relative;
    margin-bottom: 20px;
`;
const LeftContainer = styled.div`
    position: absolute;
    top: 34px;
    left: -33%;
    width: 20%;
`;
const SymbolBox = styled.div`
    border-left: 2px dashed #49a76f;
    position:relative;
    height: 120px;
`;
const TopSymbol = styled.div`
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    position: absolute;
    top: -9px;
    left: -6px;
    z-index: 3;
`;

const Round = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #BFBFBF;
    margin-right: 10px;
   
`;

const StartText = styled.h4`
    font-size: 14px;
    color:#BFBFBF;
    font-weight: 500;
    
`;
const StartNo = styled.div`
    color: 	#0FA76F;
    background-color: #fff;
    position: absolute;
    top: 50px;
    left: -10px;
    font-size: 18px;
`;
const EndNo = styled.div`
    color: 	#A9A9A9;
    position: absolute;
    bottom: -10px;
    left: -9px;
    font-size: 14px;
    background-color: #fff;
`;
const RightContainer = styled.div`
    width: 100%;
`;
const Box = styled.div`
    padding: 8px;
    background-color: #E8EAF1;
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    border: 1px solid #D5D5D5;
    border-radius: 4px;
    margin-bottom: 10px;
    &:hover{
        border: 2px solid #1A987C;
    }
`;
const QuestionLetter = styled.span`
    padding: 5px 10px;
    border: 1px solid #dcdcdc;
    background-color: #FFFFFF;
    margin-right: 10px;
`;
const Question = styled.p`
    font-size: 12px;
    color: #545454;
    font-weight:500;
`;
const BottomButtonBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;
const NextButton = styled(Link)`
    padding: 15px 20px;
    cursor: pointer;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    background-color: #1A987C;
    width: 20%;
    text-align: center;
    border-radius: 6px;
`;

export default ExamPage
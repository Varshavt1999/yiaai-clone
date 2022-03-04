import React from 'react'
import styled from "styled-components"
import TimerModal from '../include/modal/TimerModal';

function ExamStartSpotlight() {
    
    

  return (
    <Container>
        <TimerModal/>
        <MainBox>
            <MainTitle><ColorText>Examination</ColorText> Instructions</MainTitle>
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
                        <DotBox>
                            <DotImg src={require("../../assets/images/11-exam-start-page/dot.svg").default}  alt="dot"/>
                        </DotBox>
                        <TextBox>ഇനി സ്കൂൾ വിദ്യാർത്ഥികൾക്ക് ടെക്ക്നോളജിയെ തൊട്ടറിയുവാനും</TextBox>
                    </Box>
                    <Box>
                        <DotBox>
                            <DotImg src={require("../../assets/images/11-exam-start-page/dot.svg").default}  alt="dot"/>
                        </DotBox>
                        <TextBox>ഇനി സ്കൂൾ വിദ്യാർത്ഥികൾക്ക് ടെക്ക്നോളജിയെ തൊട്ടറിയുവാനും</TextBox>
                    </Box>
                    <Box>
                        <DotBox>
                            <DotImg src={require("../../assets/images/11-exam-start-page/dot.svg").default}  alt="dot"/>
                        </DotBox>
                        <TextBox>ഇനി സ്കൂൾ വിദ്യാർത്ഥികൾക്ക് ടെക്ക്നോളജിയെ തൊട്ടറിയുവാനും</TextBox>
                    </Box>
                    <Box>
                        <DotBox>
                            <DotImg src={require("../../assets/images/11-exam-start-page/dot.svg").default}  alt="dot"/>
                        </DotBox>
                        <TextBox>ഇനി സ്കൂൾ വിദ്യാർത്ഥികൾക്ക് ടെക്ക്നോളജിയെ തൊട്ടറിയുവാനും</TextBox>
                    </Box>
                    <Box>
                        <DotBox>
                            <DotImg src={require("../../assets/images/11-exam-start-page/dot.svg").default}  alt="dot"/>
                        </DotBox>
                        <TextBox>ഇനി സ്കൂൾ വിദ്യാർത്ഥികൾക്ക് ടെക്ക്നോളജിയെ തൊട്ടറിയുവാനും</TextBox>
                    </Box>
                </RightContainer>
            </BottomBox>
            <StartButton>
                <StartBtnText>
                    Start Exam Now 
                </StartBtnText>
                <RightArrow>
                    <ArrowImg src={require("../../assets/images/11-exam-start-page/Icon feather-arrow-right.svg").default}  alt="arrow"/>
                </RightArrow></StartButton>
        </MainBox>
    </Container>
  )
}

const Container = styled.div`
    padding: 8% 20px 20px;
`;

const MainBox = styled.div`
    padding: 5% 0 5% 0;
    width: 35%;
    margin: 0 auto;
`;
const MainTitle = styled.h3`
    font-size: 22px;
    margin-bottom: 20px;
`;
const ColorText = styled.span`
    color: #5bb656;
`;
const BottomBox = styled.div`
    position: relative;
    margin-bottom: 20px;
`;
const LeftContainer = styled.div`
    position: absolute;
    top: 30px;
    left: -43%;
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
    left: -8px;
    z-index: 3;
`;

const Round = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #49a76f;
    margin-right: 10px;
   
`;

const StartText = styled.h4`
    font-size: 16px;
    color:#49a76f;
    font-weight: 500;
    
`;



const StartNo = styled.div`
    color: 	#A9A9A9;
    background-color: #fff;
    position: absolute;
    top: 50px;
    left: -9px;
    font-size: 14px;
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
    /* width: 60%;
    margin: 0 auto; */
`;
const Box = styled.div`
    display: flex;
    /* justify-content:center; */
    align-items: center;
    margin-bottom: 5px;
`;
const DotBox = styled.div`
    width: 10px;
    margin-right: 10px;
`;
const DotImg = styled.img`
    display: block;
    width: 100%;
`;
const TextBox = styled.h4`
    color: 	#696969;
    font-size: 16px;
    font-weight: 500;

`;
const StartButton = styled.div`
    padding: 12px;
    background-image: linear-gradient(
    to right,#5ab757,#31b375,#00ad8d,#05a59d,#359ca4);
    cursor: pointer;
    border-radius: 6px;
    width: 40%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
`;
const StartBtnText = styled.h3`
    color: #fff;
    font-weight: 500;
    font-size: 14px;
    text-align: center;
    /* margin-right: 10px; */
`;
const RightArrow = styled.div`
    width: 18px;

`;
const ArrowImg = styled.img`
    display: block;
    width: 100%;
`;



export default ExamStartSpotlight
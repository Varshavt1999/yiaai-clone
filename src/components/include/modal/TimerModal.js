import React, { useEffect, useState } from 'react'
import styled from "styled-components"


function TimerModal() {
    const [timerHrs, setTimerHrs] = useState(3);
    const [timerMins, setTimerMins] = useState(0)
    const [timerSecs, setTimerSecs] = useState(0)

    useEffect(() => {
        let interval = setInterval(()=>{
            if(timerSecs>0){
                setTimerSecs(timerSecs-1)
            }
            if(timerSecs===0){
                if(timerMins>0){
                    setTimerMins(timerMins-1)
                    setTimerSecs(59)
                }
                if(timerMins===0){
                    if(timerHrs>0){
                        setTimerHrs(timerHrs-1)
                        setTimerMins(59 )
                    }
                    if(timerHrs===0){
                        clearInterval(interval)
                    }
                }
            }

        },1000)
        return ()=>{
            clearInterval(interval)
        }
    })
  return (
        <ExaminationBox>
            <LeftBox>
                <Logo>
                    <LogoImg src={require("../../../assets/images/11-exam-start-page/logo.svg").default}  alt="exam-logo"/>
                </Logo>
                <Title>Tefun Examination</Title>
            </LeftBox>
            <RightBox>
              <TimingBox>
                    <TimingTitle>Time Remaining</TimingTitle>
                    <TimeContainer>
                        <TimeItem>
                            <Value>{timerHrs}</Value>
                            <TimeText>Hr</TimeText>
                        </TimeItem>
                        <ColumnBox>:</ColumnBox>
                        <TimeItem>
                            <Value>{timerMins}</Value>
                            <TimeText>Min</TimeText>
                        </TimeItem>
                        <ColumnBox>:</ColumnBox>
                        <TimeItem>
                            <Value>{timerSecs}</Value>
                            <TimeText>Sec</TimeText>
                        </TimeItem>
                    </TimeContainer>
              </TimingBox>
            </RightBox>
        </ExaminationBox>

  )
}

// const Container = styled.div`
//     padding: 8% 20px 20px;
// `;
const ExaminationBox = styled.div`
    padding: 15px;
    background-color: #fef6f9;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #DCDCDC;
`;
const LeftBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Logo = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #d28149;
    padding: 10px;
    margin-right: 10px;
`;
const LogoImg = styled.img`
    width: 60%;
    margin: 0 auto;
    display: block;
`;
const Title = styled.h3`
    font-size: 14px;
    font-weight: 500;
    
`;
const RightBox = styled.div`
    
`;
const TimingBox = styled.div`
    
`;
const TimingTitle = styled.h4`
    font-size: 12px;
    color: 	#A9A9A9;
    font-weight: 500;
    text-align: center;
    margin-bottom: 5px;
`;
// const Time = styled.div`
//     font-size: 24px;
// `;
// const TimeAbout = styled.div`
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
// `;
// const Hr = styled.div`
//     font-size: 12px; 
//     color: 	#A9A9A9;
//     font-weight: 500;
// `;
// const Min = styled.div`
//     font-size: 12px;
//     color: 	#A9A9A9;
//     font-weight: 500;
// `;
// const Sec = styled.div`
//     font-size: 12px;
//     color: 	#A9A9A9;
//     font-weight: 500;
// `;
const TimeContainer = styled.div`
   display: flex;
   align-items: center;
   border-left: 1px solid #C0C0C0;
   padding-left: 20px;

`;
const TimeItem = styled.div`
   margin-right: 10px;
   &:last-child{
       margin-right: 0;
   }
`;
const Value = styled.div`
   font-size: 12px;
`;
const TimeText = styled.div`
   font-size: 12px;
`;
const ColumnBox = styled.div`
   margin-right: 10px;
   font-size: 12px;
   font-weight: 600;
   transform: translateY(-9px);
   `;

export default TimerModal
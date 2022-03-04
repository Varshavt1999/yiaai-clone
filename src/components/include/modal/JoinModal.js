import React from 'react'
import styled from "styled-components"
import back from "../../../assets/images/decorator.svg"
import {Link} from "react-router-dom"

function JoinModal({joinClick, setJoinClick}) {
  return (
        <MainBg className={joinClick?"active":""}>
            <ColorBg>
                <Close onClick={()=>{
                            setJoinClick(joinClick=>!joinClick)
                        }}>
                            <CloseImg src={require("../../../assets/images/close.svg").default} alt="close"/>
                </Close>
            </ColorBg>
            <WhiteBg >
                <JoinBox>
                    <Heading>Login to your account</Heading>
                    <SubHeading>Enter your registered phone number</SubHeading>
                    <ContainerBox>
                        <Flag>
                            <FlagImage src={require("../../../assets/images/india-flag.jpeg")} alt="india-flag"/>
                        </Flag>
                        <ArrowBox>
                            <ArrowImg src={require("../../../assets/images/arrow (1).svg").default} alt="arrow"/>
                        </ArrowBox>
                        <Form>
                            <CallBox>
                                <CallImg src={require("../../../assets/images/phone.svg").default} alt="arrow"/>
                            </CallBox>
                            <CountryCode>+91</CountryCode>
                            <Input type="number" placeholder="Enter Your Phone Number"/>
                        </Form>
                    </ContainerBox>
                    <NextButton to="/new-student-data/">Next</NextButton>
                    <Text>New To Yiaai?<SubText> Create an account</SubText></Text>
                    <Terms>Terms of Service</Terms>
                </JoinBox>
            </WhiteBg>
        </MainBg>
  )
}
const MainBg = styled.div`
        /* height: 100%; */
        width: 100%;
        display: flex;
        z-index: 100;
        position: fixed;
        top: 0;
        right: -100%;
        height: 100vh;
        transition: all 0.6s ease ;
        opacity: 0;
        /* display:none; */
        &.active{
            right: 0;
            opacity: 1;
            transition: all 0.6s ease ;
            /* display: block; */
        }
    `;
    const ColorBg = styled.div`
        /* position: fixed; */
        /* top: 0px;
        left: 0px; */
        height: 100%;
        width: 58%;
        background: rgba(0, 0, 0, 0.6);
        z-index: 500;
        position: relative;
    `;
    const WhiteBg = styled.div`
        background: #fff;
        width: 42%;
        z-index: 100;
        /* position: absolute;
        top: 0;
        right: -100%;
        height: 100vh;
        transition: all 0.6s ease ;
        &.active{
            right: 0;
            transition: all 0.6s ease ;
        } */
        `;
    const JoinBox = styled.div`
        background: url(${back});
        padding: 28% 12% 0;
        width: 100%;
        background-repeat: no-repeat;
        background-size: 100%;
        position: relative;
        
        `;
    const Close = styled.div`
        width: 25px;
        position: absolute;
        right: 5px;
        top: 5px;
        height: 25px;
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        padding: 5px;
    `;
    const CloseImg = styled.img`
        display: block;
        width: 90%;
    `;
    const Heading = styled.h3`
        font-size: 28px;
        font-weight: 500;
        margin-bottom: 25px;
    `;
    const SubHeading = styled.h4`
        font-size: 16px;
        font-weight: 400;
        margin-bottom: 35px;
    `;
    const ContainerBox = styled.div`
        display: flex;
        /* justify-content: space-between; */
        align-items: center;
        margin-bottom: 30px;
    `;
    const Flag = styled.div`
        width: 45px;
        height: 45px;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 10px;
    `;
    const FlagImage = styled.img`
        width: 100%; 
        height: 100%; 
        display: block;
    `;
    const ArrowBox = styled.div`
        width: 8px;
        transform: rotate(90deg);
        margin-right: 10px;
    `;
    const ArrowImg = styled.img`
        width: 100%; 
        display: block;
    `;
    const Form = styled.form`
        display: flex;
        align-items: center;
        border: 1px solid #000;
        border-radius: 8px;
        padding: 15px;
        width: 80%;
    `;
    const CallBox = styled.div`
        width: 15px;
        margin-right: 10px;
    `;
    const CallImg = styled.img`
        width: 100%; 
        display: block;
    `;
    const CountryCode = styled.div`
        margin-right: 10px;
    `;
    const Input = styled.input`
    border: none;
    background: none;
    width: 100%;
    ::placeholder {
       font-size: 16px;
   }
   
    `;
    const NextButton = styled(Link)`
        cursor: pointer;
        background-image: linear-gradient(to right, #2f9aac, #00a5a6, #00ae93, #27b576, #61b950);
        padding: 14px 30px;
        border-radius: 5px;
        color: #fff;
        display: block;
        font-weight: bold;
        width: 100%;
        text-align: center;
        margin: 0 auto 20px;
        font-size: 16px;
    `;
    
    const Text = styled.h4`
        font-size: 16px;
        margin-bottom: 20px;
        font-weight: 400;
        text-align: center;
        padding-bottom:90px;
        border-bottom: 1px solid #d1dbda;
    `;
    const SubText = styled.span`
        color: #61b950;
    `;
    const Terms = styled.p`
        text-align: center;
        padding: 10px 0;
    `;

export default JoinModal
import React from 'react'
import { useState } from 'react/cjs/react.development'
import styled from 'styled-components'
import Bg from "../../assets/images/newstudentdataimage/bg.svg"


function NewStudentDataSpotlight({click,setClick}) {
    // console.log(click,"-----------------------");
  return (
    
    <MainContainer>
        <ItemContainer>
            <HeadingBox>
                <Heading>Fill Your Details</Heading>
            </HeadingBox>
            <FormBox>
                <Label>Campus Name/code*</Label>
                <InputBox>
                    <Input type="text" placeholder="hjggfwefguegf"/>
                    <ArrowBox>
                        <ArrowImg src={require("../../assets/images/newstudentdataimage/downarrow.svg").default} alt="down-arrow"/>
                    </ArrowBox>
                </InputBox>
                
                <Label>Select Class*</Label>
                <InputBox>
                    <Input type="number" placeholder="10"/>
                    <ArrowBox>
                        <ArrowImg src={require("../../assets/images/newstudentdataimage/downarrow.svg").default} alt="down-arrow"/>
                    </ArrowBox>
                </InputBox>
                <Label>Select Devision*</Label>
                <InputBox>
                    <Input type="text" placeholder="b"/>
                    <ArrowBox>
                        <ArrowImg src={require("../../assets/images/newstudentdataimage/downarrow.svg").default} alt="down-arrow"/>
                    </ArrowBox>
                </InputBox>
            </FormBox>
            <ButtonBox>
                <BackButton>Back</BackButton>
                <SubmitButton onClick={()=>setClick(true)}>Submit</SubmitButton>
            </ButtonBox>
            <BottomLineImg>
                <Image  src={require("../../assets/images/newstudentdataimage/bottomline.svg").default} alt="bottomline"/>
            </BottomLineImg>
        </ItemContainer>
    </MainContainer>
    
  )
}

const MainContainer = styled.div`
    /* padding: 10%; */
    /* height: calc( 100vh - 80px); */
    background-image: url(${Bg});
    background-repeat: no-repeat;
    background-position: left 0 top 80px;
    background-size: 150px;
    padding-top: 9%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const ItemContainer = styled.div`
    width: 35%;
    margin: 0 auto;
    border-radius: 6px;
    border: 1px solid #E6E6E6;
`;
const HeadingBox = styled.div`
    padding: 15px;
    border-bottom: 1px solid #E6E6E6;
`;
const Heading = styled.h3`
    font-size: 16px;
    font-weight: 500;
`;
const FormBox = styled.div`
    border-bottom: 1px solid #E6E6E6;
    padding: 20px;
`;
const Label = styled.p`
    color: #707070;
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 10px;
`;
const InputBox = styled.div`
    padding: 15px;
    border: 1px solid #E6E6E6;
    margin-bottom: 15px;
    border-radius: 6px;
    display: flex;
    justify-content: space-between;
    &:hover{
        border-bottom: 1px solid #E6E6E6;
    }
`;
const Input = styled.input`
    border: none;
    outline: none;
    font-size: 16px;
    ::placeholder {
        font-size: 16px;
    }
`;
const ArrowBox = styled.div`
    width: 10px;
`;
const ArrowImg = styled.img`
    display: block;
    width: 100%;
`;
const ButtonBox = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding:15px ;
`;
const BackButton = styled.button`
    border: none;
    outline: none;
    padding: 10px 30px;
    background: none;
    margin-right: 15px;
    font-weight: 600;
    border-radius: 4px;
    border: 1px solid #E6E6E6;
    cursor: pointer;
`;
const SubmitButton = styled.button`
    border: none;
    outline: none;
    background-image: linear-gradient(to right, #5ab757, #31b375, #00ad8d, #05a59d, #359ca4);
    padding: 10px 30px;
    border-radius: 4px;
    border: 1px solid #08BD80;
    background-color: #08BD80;
    color: #fff;
    cursor: pointer;
    font-weight: 600;
`;
const BottomLineImg = styled.div`
    width: 100%;
`;
const Image = styled.img`
    display: block;
    width: 100%;
`;


export default NewStudentDataSpotlight
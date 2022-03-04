import React from 'react'
import styled from 'styled-components'

function OtherHeader() {
  return (
    <HeaderContainer className='wrapper'>
            <LeftLogo>
                <Logo src={require("../../assets/images/logo.svg").default} alt="Logo"/>
            </LeftLogo>
            <RightBox>
                <BellButton>
                    <Bell src={require("../../assets/images/newstudentdataimage/bell.svg").default} alt="bell"/>
                </BellButton>
                <UserBox>
                    <LogoLetter>M</LogoLetter>
                    <Name>Mark Anderson</Name>
                </UserBox>
            </RightBox>
    </HeaderContainer> 
  )
}

const HeaderContainer = styled.div`
    height:80px;
    padding:10px 5%;
    box-sizing:border-box;
    display:flex;
    justify-content:space-between;
    align-items:center;
    position: fixed;
    width: 100%;
    border-bottom: 1px solid #E6E6E6;
    background-color: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(8px);
`;
const LeftLogo = styled.div`
    width:100px;
    display:inline-block;
`;
const Logo = styled.img`
    display:block;
    width:100%
`;
const RightBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const BellButton = styled.div`
    width: 30px;
    border-right: 1px solid #000;
    padding-right: 14px;
    margin-right: 15px;
`;
const Bell = styled.img`
    display: block;
    width: 100%;
`;
const UserBox = styled.div`
    display: flex;
    align-items: center;
`;
const LogoLetter = styled.div`
    font-size: 20px;
    font-weight: 500;
    padding: 18px;
    color: #fff;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: green;
    border-radius: 50%;
    margin-right: 10px;
`;

const Name = styled.h4`
    font-size: 18px;
    font-weight: 500;
`;




export default OtherHeader
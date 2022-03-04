import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
        <BgContainer>
            <LogoBox>
                <LogoImg src={require("../../assets/images/logo-grey.svg").default} alt="logo" />
            </LogoBox>
            <SocialMediaBox>
                <Item>
                    <NoColor className='no-color'>
                        <Img src={require("../../assets/images/instagram.svg").default} alt="logo"/>
                    </NoColor>
                    <Color className="color">
                        <Img src={require("../../assets/images/instagram-color.svg").default} alt="logo"/>
                    </Color>

                </Item>
                <Item>
                    <NoColor className='no-color'>
                        <Img src={require("../../assets/images/facebook.svg").default} alt="logo"/>
                    </NoColor>
                    <Color className="color">
                        <Img src={require("../../assets/images/facebook-color.svg").default} alt="logo"/>
                    </Color>

                </Item>
                <Item>
                    <NoColor className='no-color'>
                        <Img src={require("../../assets/images/twitter.svg").default} alt="logo"/>
                    </NoColor>
                    <Color className="color">
                        <Img src={require("../../assets/images/twitter-color.svg").default} alt="logo"/>
                    </Color>

                </Item>
                <Item>
                    <NoColor className='no-color'>
                        <Img src={require("../../assets/images/linkedin.svg").default} alt="logo"/>
                    </NoColor>
                    <Color className="color">
                        <Img src={require("../../assets/images/linkedin-color.svg").default} alt="logo"/>
                    </Color>

                </Item>
                <Item>
                    <NoColor className='no-color'>
                        <Img src={require("../../assets/images/youtube.svg").default} alt="logo"/>
                    </NoColor>
                    <Color className="color">
                        <Img src={require("../../assets/images/youtube-color.svg").default} alt="logo"/>
                    </Color>

                </Item>
            </SocialMediaBox>
            <ContactBox>
                <PhNo>+91 858 99925678</PhNo>
                <Mail>yiaai@talrop.com</Mail>
            </ContactBox>
            <BottomTextBox>
                <LeftText>&copy; 2022, Talrop Private Limited</LeftText>
                <Terms>Terms Of Service </Terms>
                <Policy>Privacy Policy</Policy>
            </BottomTextBox>
        </BgContainer>
  )
}

const BgContainer = styled.div`
    padding: 60px 0 50px;
    background-color: rgb(30, 30, 30);
    &.wrapper{
        width: 100%;
    }
`;
const LogoBox = styled.div`
    width: 10%;
    margin: 0 auto 30px;
`;
const LogoImg = styled.img`
    display: block;
    width: 100%;
`;
const SocialMediaBox = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 18%;
    margin: 0 auto 30px;
`;
const Item = styled.li`
    width: 8%;
    display: flex;
    align-items: center;
    &:nth-child(2){
        width: 5%;
    }
    &:hover{
        .color{
            display: block;
        }
        .no-color{
            display: none;
        }
    }
`;
const NoColor = styled.div`
    width: 100%;

`;
const Color = styled.div`
    width: 100%;
    display: none;
`;
const Img = styled.img`
    display: block;
    width: 100%;
`;
const ContactBox = styled.div`
    width: 20%;
    margin: 0 auto 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const PhNo = styled.h5`
    color: #949494;
    font-size: 14px;
    font-weight: 400;
`;
const Mail = styled.h5`
   color: #949494; 
   font-size: 14px;
   font-weight: 400;
`;
const BottomTextBox = styled.ul`
    width: 30%;
    margin: 0 auto ;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const LeftText = styled.li`
    color: #949494;
    font-size: 13px;
    font-weight: 400;
`;
const Terms = styled.li`
    color: #949494;
    font-size: 13px;
    font-weight: 400;
`;
const Policy = styled.li`
    color: #949494;
    font-size: 13px;
    font-weight: 400;
`;


export default Footer
import React, { useState } from 'react'
import styled from "styled-components"
import Bg from "../../assets/images/lines-bg.svg"
import spotMin from "../../assets/images/spot-min.jpeg"
import back from "../../assets/images/decorator.svg"
import JoinModal from '../include/modal/JoinModal';

function Spotlight({joinClick,setJoinClick}) {
    // const [joinClick, setJoinClick] = useState(false)
  return (
      <MainContainer>
      <JoinModal joinClick={joinClick} setJoinClick={setJoinClick}/>
    <SpotlightContainer>
        <BgContainer>
            <LeftContainer>
                <TitleLogo>
                    <LogoImage src={require("../../assets/images/Tefun-logo.svg").default} alt="logo" />
                </TitleLogo>
                <MainHeading>Technology Fundamental Program</MainHeading>
                <NextHeading>കേരളത്തിലെ <Color>20 ലക്ഷം</Color> കുട്ടികൾക്ക്  Eസൗജന്യമായി ടെക്ക്നോളജി പഠിക്കാം!</NextHeading>
                <Description>
                ഇത് <SpecialText>Industry 4.0 </SpecialText>കാലഘട്ടം, ടെക്ക്‌നോളജിയുടെ പുത്തൻ സാധ്യതകൾ ഇനി നമ്മുടെ കുട്ടികൾ അറിയണം. സ്കൂൾ വിദ്യാർത്ഥികൾക്ക് ടെക്ക്നോളജിയെ തൊട്ടറിയുവാനും, ടെക്ക്-സാക്ഷരത ഉറപ്പുവരുത്തുന്നതിനുമുള്ള സൗജന്യാവസരം ഒരുക്കുകയാണ് <SpecialText>Talrop</SpecialText>.
                </Description>
                <IconBox>
                    <IconImage src={require("../../assets/images/640.svg").default} alt="Icon-Box" />
                </IconBox>
                <ButtonBox>
                    <Join onClick={()=>{
                                    setJoinClick(joinClick=>!joinClick)
                                }}>Join For Free</Join>
                    <RegOutline>
                        <Register> Are You a School?<Enquire>Enquire Now</Enquire></Register>
                    </RegOutline>
                </ButtonBox>
            </LeftContainer>
            <RightContainer>
                <MainImgBox>
                        <MainImg src={spotMin} alt="spot-img" />
                    <ArrowImgBox>
                        <ArrowImage src={require("../../assets/images/arrow.svg").default} alt="arrow"/>
                    </ArrowImgBox>
                    <PlayBtn>
                        <PlayImg src={require("../../assets/images/white-play-icon-22.jpg")}/>
                    </PlayBtn>
                </MainImgBox>
                <DwnlodFlex>
                    <Download>
                        <DownloadBtn href='#'>
                            <Img src={require("../../assets/images/grey-and-play.svg").default} alt="App"/>
                        </DownloadBtn>
                        <DownloadBtn href='#'>
                            <Img src={require("../../assets/images/grey-and-play.svg").default} alt="App"/>
                        </DownloadBtn>
                    </Download>
                </DwnlodFlex>
            </RightContainer>
        </BgContainer>
    </SpotlightContainer>
    </MainContainer>  )
}

const MainContainer = styled.div`
    overflow:hidden
`;
const SpotlightContainer = styled.div`
    padding-top:70px;
   
   
`;
const BgContainer = styled.div`
    background-image: url(${Bg});
    padding: 35px 0;
    display: flex;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
`;
const LeftContainer = styled.div`
    width: 45%;
`;
const TitleLogo = styled.div`
    width: 38%;
    margin-bottom: 10px;
`;
const LogoImage = styled.img`
    width: 100%;
    display: block;
`;
const MainHeading = styled.h2`
    font-size: 24px;
    font-weight: 500;
    color: #333;
    margin-bottom: 15px;
`;
const NextHeading = styled.h2`
    font-size: 34px;
    font-weight: 600;
    color: #333;
    margin-bottom: 20px;
`;
const Color = styled.span`
    font-size: 34px;
    display: inline-block;
    font-weight: 600;
    color:rgb(15, 167, 111);
`;
const Description = styled.p`
    font-size: 16px;
    font-weight: 400;
    width: 80%;
    color:rgb(84, 84, 84);
    margin-bottom: 20px;
`;
const SpecialText = styled.span`
`;

const IconBox = styled.div`
    width: 82%;
    margin-bottom: 30px;
`;
const IconImage = styled.img`
    display: block;
    width: 100%;
`;
const ButtonBox = styled.div`
    display:flex;
    width: 75%;
    justify-content: space-between;
`;
const Join = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  background-image: linear-gradient(to right, #5ab757, #31b375, #00ad8d, #05a59d, #359ca4);
  padding: 25px 35px;
  border-radius: 5px;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
const RegOutline = styled.div`
cursor: pointer;
  outline: none;
  border: none;
  background-image: linear-gradient(to right, #5ab757, #31b375, #00ad8d, #05a59d, #359ca4);
  border-radius: 8px;
  width: 200px;
  height: 68px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Register = styled.div`
    color:rgb(32, 156, 165) ;
    width: 196px;
    height: 64px;
    background-color: #fff;
    border-radius: 8px;
    box-sizing: border-box;
    padding: 10px 20px;
    font-size: 12px;
    text-align: center; 
`;
const Enquire = styled.div`
    font-size: 20px;
`;


const RightContainer = styled.div`
    font-size: 20px;
    width: 50%;
`;
const MainImgBox = styled.div`
    transform: rotate(2deg);
    position: relative;
    object-fit: cover;
    margin-bottom: 64px;
`;
const MainImg= styled.img`
    width: 100%;
    display: block;
    border-radius: 25px;
    overflow: hidden;
`;
const ArrowImgBox = styled.div`
    position: absolute;
    bottom:-81px;
    left:-113px;
    width: 200px;
`;
const ArrowImage = styled.img`
    width: 100%;
    display: block;
`;
const PlayBtn = styled.button`
   width: 80px;
   height:80px;
   border-radius:50%;
   display: flex;
   justify-content: center;
   align-items: center;
   outline: none;
   border: none;
   position: absolute;
   top:36%;
   left:0;
   right: 0;
   margin: 0 auto;
   background-image: linear-gradient(to right, #5ab757, #31b375, #00ad8d, #05a59d, #359ca4);
`;
const PlayImg = styled.img`
    width: 30px;
    display: block;
`;
const DwnlodFlex = styled.div`
    display: flex;
    justify-content:flex-end;
 
`;
const Download = styled.div`
    display: flex;
    justify-content: space-between;
    
`;
const DownloadBtn = styled.a`
    width: 45%;
    display: inline-block;
`;
const Img = styled.img`
    width: 100%;
    display: block;
`;

export default Spotlight
import React from 'react'
import styled from 'styled-components'

function MobileApp() {
  return (
    <Container>
        <BgContainer>
            <LeftBox>
                <Heading>Download Our mobile <br />App To Make IT Easier</Heading>
                <SubHeading>Tefun-ലൂടെ ടെക്ക്‌നോളജിയുടെ വിസ്മയലോകം ഇനിയിതാ നിങ്ങളിലേക്ക്. ടെക്ക്-പഠനം ഇനി കൂടുതൽ എളുപ്പമാക്കാൻ yia.ai മൊബൈൽ ആപ്പ് ഡൗൺലോഡ് ചെയ്യൂ.</SubHeading>
                <DownloadBox>
                    <Item href='#'>
                        <Image src={require("../../assets/images/green-and-play.svg").default} alt="image"/>
                    </Item>
                    <Item href='#'>
                        <Image src={require("../../assets/images/green-and-play.svg").default} alt="image"/>
                    </Item>
                </DownloadBox>
            </LeftBox>
            <RightBox>
                <AppsImg src={require("../../assets/images/mobile-app.png")} alt="mobile-app"/>
            </RightBox>
        </BgContainer>
    </Container>
  )
}

const Container = styled.div`
    padding: 50px 0;
`;
const BgContainer = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   position: relative;
   background-color: #f3f9eb;
   padding: 6% 65px;
   border-radius: 25px;
   
`;
const LeftBox = styled.div`
    width: 45%;
`;
const Heading = styled.h3`
    font-weight: 500;
    font-size: 34px;
    margin-bottom: 30px;
`;
const SubHeading = styled.h4`
    color: #8b8f87;
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 50px;
`;
const DownloadBox = styled.div`
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Item = styled.a`
    width: 45%;
    display: inline-block;
`;
const Image = styled.img`
    display: block;
    width: 100%;
`;
const RightBox = styled.div`
    width: 55%;
    position: absolute;
    top: -3%;
    right: -3%;
`;

const AppsImg = styled.img`
     display: block;
    width: 100%;
`;


export default MobileApp
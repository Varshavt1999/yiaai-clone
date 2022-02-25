import React from 'react'
import '../../../App.css';
import styled from 'styled-components'
import tech1 from "../../../assets/images/ai.jpg"

function Technologies() {

    const TechDetails = [
        {
           image:tech1,
           techname:"Artificial Intelligence", 
        },
    ]
  return (
    <Container>
        <Heading><Color>ഞങ്ങളുടെ </Color> പാഠ്യപദ്ധതികൾ </Heading>
        <SubHeading>ടെക്കിസ്‌ ക്ലബ്ബിലൂടെ ടെക്നോളജിയിൽ മാറ്റം കൈവരിച്ച ഞങ്ങളുടെ കുട്ടി എൻജിനേഴ്‌സിന് പറയാനുള്ളത് </SubHeading>
        <TechContainer>
            <TechItem>
                <ImgBox>
                    <Img src={require("../../../assets/images/ai.jpg")} />
                </ImgBox>
                <Title>Artificial Intelligence</Title>
            </TechItem>
            <TechItem>
                <ImgBox>
                    <Img src={require("../../../assets/images/robotics.jpg")} />
                </ImgBox>
                <Title>Robotics</Title>
            </TechItem>
            <TechItem>
                <ImgBox>
                    <Img src={require("../../../assets/images/meta.jpg")} />
                </ImgBox>
                <Title>Metaverse</Title>
            </TechItem>
            <TechItem>
                <ImgBox>
                    <Img src={require("../../../assets/images/3d.jpg")} />
                </ImgBox>
                <Title>3D Printing</Title>
            </TechItem>
            
            <TechItem>
                <ImgBox>
                    <Img src={require("../../../assets/images/ar&vr.jpg")} />
                </ImgBox>
                <Title>Ar & VR</Title>
            </TechItem>
            <TechItem>
                <ImgBox>
                    <Img src={require("../../../assets/images/car.jpg")} />
                </ImgBox>
                <Title>Driverless Cars</Title>
            </TechItem>
            <TechItem>
                <ImgBox>
                    <Img src={require("../../../assets/images/iot.jpg")} />
                </ImgBox>
                <Title>IoT</Title>
            </TechItem>
            <TechItem>
                <ImgBox>
                    <Img src={require("../../../assets/images/Group+49584.jpg")} />
                </ImgBox>
                <Title>Web 3.0</Title>
            </TechItem>
            <Topic>
                <TopicImg src={require("../../../assets/images/topic.svg").default}/>
            </Topic>
            
        </TechContainer>

    </Container>
  )
}

const Container = styled.div`
padding: 60px 0;
text-align: center;
   
`;
const Heading = styled.h1`
   font-weight: 700;
    font-size: 36px;
    margin-bottom: 10px;
`;
const Color = styled.span`
  color: #49a76e;
`;
const SubHeading = styled.h3`
  width: 50%;
   margin: 0 auto;
   color: #656661;
   font-size: 18px;
   font-weight: 400;
   margin-bottom: 60px;
`;
const TechContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  width: 90%;
  margin: 0 auto;
`;
const TechItem = styled.li`
  width: 23%;
  background-color: #e3f3e6;
  padding: 15px 0;
  border-radius: 8px;
  margin-bottom: 30px;
`;
const ImgBox = styled.div`
  width: 90%;
  margin: 0 auto 30px;
`;
const Img = styled.img`
  display: block;
  width: 100%;
`;
const Title = styled.h4`
  font-size: 16px;
  font-weight: 500;
  color: #312f34;
`;
const Topic = styled.div`
    width: 226px;
    position: absolute;
    bottom: -61px;
    right: -79px;
`;
const TopicImg = styled.img`
  display: block;
  width: 100%;
`;



export default Technologies
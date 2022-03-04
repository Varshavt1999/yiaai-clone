import React, { useState } from 'react'
import styled from 'styled-components'
// import back from "../../assets/images/decorator.svg"
import JoinModal from '../include/modal/JoinModal';

function SchoolJoin({joinClick,setJoinClick}) {
    // const [joinClick, setJoinClick] = useState(false)
    return (
        <>
        <JoinModal joinClick={joinClick} setJoinClick={setJoinClick}/>
        <OuterContainer>
            <Container>
                <TopHeading>How</TopHeading>
                <BottomHeading>Schools Can Join</BottomHeading>
                <ItemContainer>
                <Item>
                    <Number>01</Number>
                    <ColorBox className='green'></ColorBox>
                    <Media className='one'>
                    <ImgBox>
                    <Img src={require("../../assets/images/phone-g-call.svg").default} alt="phone" />
                    </ImgBox>
                    </Media>
                    <Paragraph>
                    സ്കൂൾ നിശ്ചയിക്കുന്ന ഉദ്ഘാടന ദിനത്തിൽ ആവശ്യമായ Inauguration Video ഡിജിറ്റലായി Talrop നൽകുന്നതാണ്.
                    </Paragraph>
                </Item>
                <Item>
                    <Number>02</Number>
                    <ColorBox className='yellow'></ColorBox>
                    <Media className='two'>
                    <ImgBox>
                    <Img src={require("../../assets/images/scissors.svg").default} alt="phone" />
                    </ImgBox>
                    </Media>
                    <Paragraph>
                    സ്കൂൾ നിശ്ചയിക്കുന്ന ഉദ്ഘാടന ദിനത്തിൽ ആവശ്യമായ Inauguration Video ഡിജിറ്റലായി Talrop നൽകുന്നതാണ്.
                    </Paragraph>
                </Item>
                <Item>
                    <Number>03</Number>
                    <ColorBox className='red'></ColorBox>
                    <Media className='three'>
                    <ImgBox>
                    <Img src={require("../../assets/images/certificate-r.svg").default} alt="phone" />
                    </ImgBox>
                    </Media>
                    <Paragraph>
                    സ്കൂൾ നിശ്ചയിക്കുന്ന ഉദ്ഘാടന ദിനത്തിൽ ആവശ്യമായ Inauguration Video ഡിജിറ്റലായി Talrop നൽകുന്നതാണ്.
                    </Paragraph>
                </Item>
                <Item>
                    <Number>04</Number>
                    <ColorBox className='violet'></ColorBox>
                    <Media className='four'>
                    <ImgBox>
                    <Img src={require("../../assets/images/devices.svg").default} alt="phone" />
                    </ImgBox>
                    </Media>
                    <Paragraph>
                    സ്കൂൾ നിശ്ചയിക്കുന്ന ഉദ്ഘാടന ദിനത്തിൽ ആവശ്യമായ Inauguration Video ഡിജിറ്റലായി Talrop നൽകുന്നതാണ്.
                    </Paragraph>
                </Item>
                <Item>
                    <Number>05</Number>
                    <ColorBox className='blue'></ColorBox>
                    <Media className='five'>
                    <ImgBox>
                    <Img src={require("../../assets/images/certificate.svg").default} alt="phone" />
                    </ImgBox>
                    </Media>
                    <Paragraph>
                    സ്കൂൾ നിശ്ചയിക്കുന്ന ഉദ്ഘാടന ദിനത്തിൽ ആവശ്യമായ Inauguration Video ഡിജിറ്റലായി Talrop നൽകുന്നതാണ്.
                    </Paragraph>
                </Item>
                </ItemContainer>
                <Button  onClick={()=>{
                setJoinClick(joinClick=>!joinClick)}}>Register Now</Button>
            </Container>

            <JoinModal/>
        
        </OuterContainer>
    </>
  )
}


const OuterContainer = styled.div`

`;
const Container = styled.div`
padding: 50px 0;
text-align: center;
`;
const TopHeading = styled.h2`
font-weight: 500;
    font-size: 34px;
    color: #49a76e;
    margin-bottom: 10px;
`;
const BottomHeading = styled.h3`
   font-size: 34px;
   font-weight: 500;
   margin-bottom: 60px;
`;
const ItemContainer = styled.ul`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
width: 90%;
margin: 0 auto;
`;
const Item = styled.li`
width: 33%;
position: relative;
margin-bottom: 60px;
`;
const Number = styled.div`
font-size: 55px;
color: #eae9ea;
font-weight: 500;
position: absolute;
    top: -37px;
    left: 114px;
    z-index: 3;
`;
const ColorBox = styled.div`
width: 100px;
height: 100px;
margin: 0 auto;
border-radius: 30px;
transform: rotate(45deg);
margin-bottom: 20px;
&.green{
  background-color: #439965;
}
&.yellow{
  background-color: #fab732;
}
&.red{
  background-color: #f4582c;
}
&.violet{
  background-color: #b572fb;
}
&.blue{
  background-color: #4d99fb;
}
`;
const Media = styled.div`
width: 65px;
height: 65px;
border-radius: 50%;
background-color: #fff;
display: flex;
justify-content: center;
align-items: center;
position: absolute;
    top: 49px;
    right: 106px;
&.one{
border: 2px solid #439965;
}
&.two{
  border: 2px solid #fab732;
}
&.three{
  border: 2px solid #f4582c;
}
&.four{
  border: 2px solid #b572fb;
}
&.five{
  border: 2px solid #4d99fb;
}
`;
const Paragraph = styled.p`
font-size: 16px;
color: #757573;
width: 80%;
margin: 0 auto;
`;
const ImgBox = styled.div`
width: 40%;
`;
const Img = styled.img`
display: block;
width: 100%;
`;
const Button = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  background-image: linear-gradient(to right top, #58b658, #19b27b, #00ab96, #00a2a8, #2d98ad);
  padding: 16px 30px;
  border-radius: 5px;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  transition-duration: 0.6s;
  &:hover{
      background-image: linear-gradient(to right top, #2d98ad, #00a2a8, #00ab96, #19b27b, #58b658);
      transition-duration: 0.6s;
  }
`;

export default SchoolJoin
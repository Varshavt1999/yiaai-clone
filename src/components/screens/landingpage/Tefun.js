import React from 'react'
import '../../../App.css';
import styled from "styled-components"
import person1 from "../../../assets/images/lady1.jpeg"
import person2 from "../../../assets/images/lady2.jpeg"
import person3 from "../../../assets/images/lady3.jpeg"
import person4 from "../../../assets/images/lady4.jpeg"
import person5 from "../../../assets/images/lady5.jpeg"
import person6 from "../../../assets/images/lady6.jpeg"
import person7 from "../../../assets/images/lady7.jpeg"


function Tefun() {
    const cardDetails = [
        {
            id:1,
            name:"Swathy Menon",
            standard:8,
            school:"Jamia Edavanna",
            image:person1,
        },
        {
            id:2,
            name:"Swathy Menon",
            standard:8,
            school:"Jamia Edavanna",
            image:person2,
        },
        {
            id:3,
            name:"Swathy Menon",
            standard:8,
            school:"Jamia Edavanna",
            image:person3,
        },
        {
            id:4,
            name:"Swathy Menon",
            standard:8,
            school:"Jamia Edavanna",
            image:person4,
        },
        {
            id:5,
            name:"Swathy Menon",
            standard:8,
            school:"Jamia Edavanna",
            image:person5,
        },
        {
            id:6,
            name:"Swathy Menon",
            standard:8,
            school:"Jamia Edavanna",
            image:person6,
        },
        {
            id:7,
            name:"Swathy Menon",
            standard:8,
            school:"Jamia Edavanna",
            image:person7,
        },
        {
            id:8,
            name:"Swathy Menon",
            standard:8,
            school:"Jamia Edavanna",
            image:person2,
        },
        {
            id:9,
            name:"Swathy Menon",
            standard:8,
            school:"Jamia Edavanna",
            image:person4,
        },
        {
            id:10,
            name:"Swathy Menon",
            standard:8,
            school:"Jamia Edavanna",
            image:person1,
        },
        {
            id:11,
            name:"Swathy Menon",
            standard:8,
            school:"Jamia Edavanna",
            image:person6,
        },
        {
            id:12,
            name:"Swathy Menon",
            standard:8,
            school:"Jamia Edavanna",
            image:person1,
        }
        

    ]
    const cardItem = ()=>{
        return cardDetails.map(content=>{
            return <Item key={content.id}>
                <MainImg className="main-img" src={content.image} alt="lady" />
                <BlurBox className='blur'></BlurBox>
                <TextBox className='textbox'>
                    <Name>{content.name}</Name>
                    <School>{content.standard}<TopText>th</TopText>{content.school}</School>
                    <Button className='button'>
                        <Play>
                            <PlayImg src={require("../../../assets/images/white-play-icon-22.jpg")} alt="Play"/>
                        </Play>
                        <Text>Watch Story</Text>
                    </Button>
                </TextBox>
            </Item>})
         }

    return (
        <Container>
            <Heading>Tefun</Heading>
            <SubHeading>എന്നുപറയുമ്പോൾ </SubHeading>
            <Paragraph>ടെക്കിസ്‌ ക്ലബ്ബിലൂടെ ടെക്നോളജിയിൽ മാറ്റം കൈവരിച്ച ഞങ്ങളുടെ കുട്ടി എൻജിനേഴ്‌സിന് പറയാനുള്ളത്  </Paragraph>
            <ItemContainer >
                {cardItem()}
            </ItemContainer>
        </Container>
  )
}


const Container = styled.div`
    padding: 7% 0;
`;
const Heading = styled.h2`
    text-align: center;
    color: #49a76e;
    font-weight: 700;
    font-size: 40px;
    margin-bottom: 10px;
`;
const SubHeading = styled.h3`
    text-align: center;
    font-size: 38px;
    color: #2d2d2d;
    font-weight: 600;
    margin-bottom: 10px;
`;
const Paragraph = styled.p`
    text-align: center;
    color: #909090;
    font-size: 19px;
    width: 48%;
    margin: 0 auto;
    margin-bottom: 60px;
`;
const ItemContainer = styled.ul`
    width: 90%;
    margin: 0 auto; 
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`;
const Item = styled.li`
    width: 23%;
    position: relative;
    margin-bottom: 30px;
    border-radius: 8px;
    overflow: hidden;
    transition: 0.6s all ease-in-out;
    &:hover{
        .button{
            display: flex;
        }
        .textbox{
            bottom: 24px;
            transition: 0.6s all ease-in-out;
        }
        .main-img{
            transform: scale(1.2);
            transition: 0.6s all ease-in-out;
        }
        .blur{
            display: block;
        }

    }
`;
const BlurBox = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.6);
    display: none;
`;
const MainImg = styled.img`
    display: block;
    width: 100%;
    object-fit: cover;
    background:red;
`;
const TextBox = styled.div`
    position: absolute;
    bottom: 12px;
    width: 100%;
`;
const Name = styled.h3`
    color: #fff;
    font-weight: 600;
    font-size: 24px;
    margin-bottom: 6px;
    text-align: center;
`;
const School = styled.h6`
    font-size: 14px;
    font-weight: 500;
    color: #fff;
    text-align:center ;
    margin-bottom: 10px;
`;
const TopText = styled.span`
    vertical-align: super;
`;
const Button = styled.button`
    border: none;
    outline: none;
    background-color: #fff;
    border-radius: 6px;
    padding: 10px 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 85%;
    margin: 0 auto;
    display: none;
`;
const Play = styled.div`
    width: 20px;
    /* margin-right: 10px; */
`;
const PlayImg = styled.img`
    display: block;
    width: 100%;
`;
const Text = styled.h6`
    font-size: 14px;
    color: #494949;
    font-weight: 400;
`;


export default Tefun
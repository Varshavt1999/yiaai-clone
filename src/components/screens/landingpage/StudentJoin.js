import React from 'react'
import '../../../App.css';
import styled from 'styled-components'

function StudentJoin() {
  return (
    <Container>
        <TopTitle>How</TopTitle>
        <BottomTitle>Students Can Join</BottomTitle>
        <MainContainer>
            <LeftBox>
                <Item>
                    <NumberBox>01</NumberBox>
                    <Text>വിദ്യാർത്ഥികൾക്ക് Virtual Schooling-ലൂടെ ഇഷ്ടമുള്ള സമയത്ത് പഠിക്കാൻ സാധിക്കും.</Text>
                </Item>
                <Item>
                    <NumberBox>02</NumberBox>
                    <Text>വിദ്യാർത്ഥികൾക്ക് Virtual Schooling-ലൂടെ ഇഷ്ടമുള്ള സമയത്ത് പഠിക്കാൻ സാധിക്കും.</Text>
                </Item>
                <Item>
                    <NumberBox>03</NumberBox>
                    <Text>വിദ്യാർത്ഥികൾക്ക് Virtual Schooling-ലൂടെ ഇഷ്ടമുള്ള സമയത്ത് പഠിക്കാൻ സാധിക്കും.</Text>
                </Item>
                <Item>
                    <NumberBox>04</NumberBox>
                    <Text>വിദ്യാർത്ഥികൾക്ക് Virtual Schooling-ലൂടെ ഇഷ്ടമുള്ള സമയത്ത് പഠിക്കാൻ സാധിക്കും.</Text>
                </Item>
            </LeftBox>
            <RightBox>
                <JoinImg src={require("../../../assets/images/join-img.png")} alt="join-img"/>
            </RightBox>
        </MainContainer>
    </Container>
  )
}

const Container = styled.div`
    padding: 50px 0;
    width: 90%;
    margin: 0 auto;
`;
const TopTitle = styled.h2`
    font-weight: 500;
    font-size: 34px;
    margin-bottom: 10px;
    color: #49a76e;
`;
const BottomTitle = styled.h2`
    font-size: 34px;
    margin-bottom: 60px;
`;
const MainContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
`;
const LeftBox = styled.ul`
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    &::before{
        content:"";
        position: absolute;
        width: 2px;
        height: 85%;
        border-left: 2px dashed #49a76e ;
        left: -2%;
        top: 0;
        bottom: 0;
        margin: auto 0;
        z-index: 2;
    }
`;
const Item = styled.li`
    padding: 25px 30px 25px 45px;
    position: relative;
    background-color: #ebf2fa;
    border-radius: 10px;
    margin-bottom: 20px;
    &:hover{
        background-color: #fff6ed;
    }
    &:last-child{
        margin-bottom: 0;
    }
`;
const NumberBox = styled.div`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 3px solid #49a76e;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: -28px;
    color:#49a76e ;
    font-weight: 600;
    z-index: 5;
    background-color: #fff;
`;
const Text = styled.p`
font-size: 16px;
font-weight: 400;
`;
const RightBox = styled.div`
    width: 40%;
    position: absolute;
    top: -13%;
    right: 0%;
`;
const JoinImg = styled.img`
    display: block;
    width: 100%;
`;

export default StudentJoin
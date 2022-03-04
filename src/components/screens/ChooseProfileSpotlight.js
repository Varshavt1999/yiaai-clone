import React from 'react'
import { useState } from 'react'
import styled from "styled-components"
import RoundBg from "../../assets/images/02-Choose-profile/round-bg.svg"

function ChooseProfileSpotlight() {
    const profileDetails = [
        {
            id:1,
            name:"Akshay M",
            class:"5A",
            school:"LVHS Pothencode"
        },
        {
            id:2,
            name:"Akhila C",
            class:"6C",
            school:"GUPS Thekkumbad"
        },
        {
            id:3,
            name:"Varsha V T",
            class:"5B",
            school:"GHSS Kunhimangalam"
        },
    ]
    const [tickId, setTickId] = useState(false)
    const ProfilesItems = ()=>{
        return profileDetails.map((item)=>{
            return  <ItemBox>
                        <LeftBox>
                            <ProfileLogo></ProfileLogo>
                            <ProfileDetails>
                                <Name>{item.name},({item.name})</Name>
                                <School>{item.school}</School>
                            </ProfileDetails>
                        </LeftBox>
                        <TickMark onClick={()=>{
                           if (item.id===tickId){
                               setTickId("")
                           } 
                           else{
                            setTickId(item.id)
                           }}}>
                            <TickImg className={item.id === tickId && "active"} src={require("../../assets/images/02-Choose-profile/tick.svg").default} alt="tick"/>
                        </TickMark>
                    </ItemBox>
        })
    }
    
  return (
    <MainContainer>
        <ProfileBox>
            <TopBox>
                <ChooseProfile>Choose Your Profile</ChooseProfile>
                <ContactNumber>(+91 989 9768 7659)</ContactNumber>
            </TopBox>
            <MiddleBox>
                {ProfilesItems()}
            </MiddleBox>
            <BottomBox>
                <NotMeButton>Not Me!</NotMeButton>
                <EnrollButton>Enroll</EnrollButton>
            </BottomBox>
            <BottomLine>
                <LineImg src={require("../../assets/images/02-Choose-profile/line.svg").default} alt="line"/>
            </BottomLine>
        </ProfileBox>
    </MainContainer>
  )
}

const MainContainer = styled.div`
    padding: 60px;
    background: url(${RoundBg});
    background-repeat: no-repeat;
    background-position: left 0 top 80px;
    background-size: 150px;
    padding-top: 9%;
`;
const ProfileBox = styled.div`
    width: 40%;
    margin: 0 auto;
    border: 1px solid #0000001F;
    border-radius: 4px;
`;
const TopBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid #0000001F;
`;
const ChooseProfile = styled.h5`
    font-size: 14px;
    font-weight: 600;
`;
const ContactNumber = styled.h5`
    font-size: 14px;
    color: #08BD80;
    font-weight: 600;
`;
const MiddleBox = styled.div`
    
`;
const ItemBox = styled.div`
    padding: 20px;
    border-bottom: 1px solid #0000001F;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const LeftBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const ProfileLogo = styled.div`
    width: 35px;
    /* padding: 20px; */
    border-bottom: 1px solid #0000001F;
    height: 35px;
    border-radius: 50%;
    border: 1px solid #08BD80;
    margin-right: 10px;
`;
const ProfileDetails = styled.div`
    
`;
const Name = styled.h5`
    font-size: 14px;
    color: #38444E;
    font-weight: 500;
    margin-bottom: 4px;
`;
const School = styled.p`
    font-size: 12px;
    color: #08BD80;
    font-weight: 500;
`;
const TickMark = styled.button`
    border: none;
    outline: none;
    background: none;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: 1px solid #08BD80;
    overflow: hidden;
    .active{
        display: block;
    }
`;
const TickImg = styled.img`
    width: 100%;
    height: 100%;
    display: none;
    
`;
const BottomBox = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 20px;
`;
const NotMeButton = styled.button`
    margin-right: 20px;
    border: none;
    outline: none;
    background: none;
    padding: 10px 20px;
    border-radius: 4px;
    border: 1px solid #FF0000;
    border-top: 1px solid #FD7070;
    font-size: 14px;
    color: #FD7070;
    cursor: pointer;
`;
const EnrollButton = styled.button`
    border: none;
    outline: none;
    background: none;
    padding: 10px 22px;
    border-radius: 4px;
    background: #08BD80;
    font-size: 14px;
    color: #fff;
    cursor: pointer;
`;
const BottomLine = styled.div`
    width: 100%;
`;
const LineImg = styled.img`
    display: block;
    width: 100%;
`;

export default ChooseProfileSpotlight
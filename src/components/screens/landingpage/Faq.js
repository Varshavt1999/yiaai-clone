import React, { useState } from 'react'
import '../../../App.css';
import styled from 'styled-components'

function Faq() {
    const[selectedId,setSelectedId] = useState("")
    const faqLists = [
        {
            id:1,
            question : "Tefun പ്രോഗ്രാമിന്റെ ഭാഗമാവാൻ സാധിക്കുന്നത് ആർക്കെല്ലാം?",
            answer : "LP, UP, HS, HSE, VHSE  സ്കൂൾ വിദ്യാർത്ഥികൾക്ക് Tefun പ്രോഗ്രാമിന്റെ ഭാഗമാകാവുന്നതാണ്.",
        },
        {
            id:2,
            question : "എങ്ങനെയാണ് സ്കൂളുകൾക്ക് Tefun പ്രോഗ്രാമിൽ പങ്കെടുക്കുവാൻ സാധിക്കുക?",
            answer : "ഈ പ്രോഗ്രാമിന്റെ ഭാഗമാകാൻ ആഗ്രഹിക്കുന്ന സ്കൂളുകൾക്ക് Talrop നൽകിയിരിക്കുന്ന ഫോൺ നമ്പരിൽ കോൺടാക്ട് ചെയ്ത് പ്രോഗ്രാം സ്കൂളിൽ നടപ്പിലാക്കാവുന്നതാണ്.",
        },
        {
            id:3,
            question : "Tefun പ്രോഗ്രാമിന്റെ ഭാഗമാവാൻ സാധിക്കുന്നത് ആർക്കെല്ലാം?",
            answer : "LP, UP, HS, HSE, VHSE  സ്കൂൾ വിദ്യാർത്ഥികൾക്ക് Tefun പ്രോഗ്രാമിന്റെ ഭാഗമാകാവുന്നതാണ്.",
        },
        {
            id:4,
            question : "Tefun പ്രോഗ്രാമിന്റെ ഭാഗമാവാൻ സാധിക്കുന്നത് ആർക്കെല്ലാം?",
            answer : "LP, UP, HS, HSE, VHSE  സ്കൂൾ വിദ്യാർത്ഥികൾക്ക് Tefun പ്രോഗ്രാമിന്റെ ഭാഗമാകാവുന്നതാണ്.",
        },
        {
            id:5,
            question : "Tefun പ്രോഗ്രാമിന്റെ ഭാഗമാവാൻ സാധിക്കുന്നത് ആർക്കെല്ലാം?",
            answer : "LP, UP, HS, HSE, VHSE  സ്കൂൾ വിദ്യാർത്ഥികൾക്ക് Tefun പ്രോഗ്രാമിന്റെ ഭാഗമാകാവുന്നതാണ്.",
        }
    ]

    const faq=()=>{
        return faqLists.map((faqList)=>{
                return <Item key={faqList.id}>
                    <TopBox onClick={()=>{
                           if (faqList.id===selectedId){
                               setSelectedId("")
                           } 
                           else{
                            setSelectedId(faqList.id)
                           }
                        }}>
                        <Question>{faqList.question}</Question>
                        <ArrowBox className={faqList.id === selectedId && 'active'} >
                            <ArrowImg src={require("../../../assets/images/down-arrow.svg").default } alt="down-arrow"/>
                        </ArrowBox>
                    </TopBox>
                    <BottomBox className={faqList.id === selectedId && 'active'}>
                        <Answer>{faqList.answer}</Answer>
                    </BottomBox>
                </Item>
        })
    }


    return (
        <Container>
            <TopHeading>Frequently</TopHeading>
            <BottomHeading>Asked Questions</BottomHeading>
            <ListBox>
                {faq()}
            </ListBox>
        </Container>
  )
}
const Container = styled.div`
    padding: 10% 0;
`;
const TopHeading = styled.h3`
    font-weight: 500;
    font-size: 34px;
    margin-bottom: 10px;
    color: #49a76e;
    text-align: center;
`;
const BottomHeading = styled.h3`
    font-weight: 500;
    font-size: 34px;
    margin-bottom: 60px;
    text-align: center;
`;
const ListBox = styled.ul`
    width: 70%;
    margin: 0 auto;
`;
const Item = styled.li`
    width: 100%;
    padding: 30px;
    margin-bottom: 20px;
    
    border: 1px solid #DCDCDC;
    border-radius: 10px;
    background-color: #f8fbf4;
    &:last-child{
        margin-bottom: 0;
    }
`;
const TopBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Question = styled.p`
    color: #656562;
    font-size: 16px;
    font-weight: 500;
`;
const BottomBox = styled.div`
    width: 100%;
    margin-top: 20px;
    display: none;
    &.active{
        display: block;
    }
`;
const Answer = styled.p`
    color: #656562;
    font-size: 16px;
    font-weight: 500;
`;
const ArrowBox = styled.div`
    width: 18px;
    cursor: pointer;
    transition: 0.5s ease-in-out;
    &.active{
        transform: rotate(180deg);
        transition: 0.5s ease-in-out;
    }
`;
const ArrowImg = styled.img`
    display: block;
    width: 100%;
`;
export default Faq
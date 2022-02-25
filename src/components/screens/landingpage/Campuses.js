    import React from "react";
    import "../../../App.css";
    import styled from "styled-components";
    import Logo1 from "../../../assets/images/jamia.png"
    import Logo2 from "../../../assets/images/clg1.jpeg"
    import Logo3 from "../../../assets/images/clg2.png"
    import Logo4 from "../../../assets/images/clg3.jpeg"
    import Logo5 from "../../../assets/images/clg4.png"
    import Logo6 from "../../../assets/images/clg5.jpeg"
    import Logo7 from "../../../assets/images/clg6.png"
    import Logo8 from "../../../assets/images/clg7.jpeg"

    
    function Campuses() {
    const LogoDetails =[
        {
            id:1,
            logo:Logo1,
            college:"Jamia Nadviyya Arts & Science College",
            place:"Malappuram",
        },
        {
            id:2,
            logo:Logo2,
            college:"Govt Engineering College",
            place:"Idukki",
        },
        {
            id:1,
            logo:Logo3,
            college:"Jamia Nadviyya Arts & Science College",
            place:"Malappuram",
        },
        {
            id:3,
            logo:Logo4,
            college:"College of Engineering Trivandrum",
            place:"Trivandrum",
        },
        {
            id:1,
            logo:Logo5,
            college:"Jamia Nadviyya Arts & Science College",
            place:"Malappuram",
        },
        {
            id:4,
            logo:Logo6,
            college:"Govt Engineering College",
            place:"Idukki",
        },
        {
            id:5,
            logo:Logo7,
            college:"Govt Engineering College",
            place:"Kannur",
        },
        {
            id:6,
            logo:Logo8,
            college:"Jamia Nadviyya Arts & Science College",
            place:"Malappuram",
        },
        {
            id:7,
            logo:Logo4,
            college:"Sreenaraya Guru College of engineering",
            place:"chalakkod",
        },
        {
            id:8,
            logo:Logo1,
            college:"Maharajas arts & science college",
            place:"Ernakulam",
        },
        {
            id:9,
            logo:Logo2,
            college:"Govt Engineering College",
            place:"Idukki",
        },
        {
            id:10,
            logo:Logo3,
            college:"Barton Hill",
            place:"Trivandrum",
        },
        {
            id:11,
            logo:Logo4,
            college:"Jamia Nadviyya Arts & Science College",
            place:"Malappuram",
        }

    ]
    const campuses=()=>{
        return LogoDetails.map((item)=>{
            return <Item key={item.id}>
                        <LogoBox>
                            <Logo src={item.logo} alt="college" />
                        </LogoBox>
                        <Title>{item.college}</Title>
                        <SubTitle>{item.place}</SubTitle>
                    </Item>
        })
    }
    return (
        <Container>
        <Heading>
            <Assosiate>Assosiated</Assosiate> Campuses
        </Heading>
        <SubHeading>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non dolor
            mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            sagittis{" "}
        </SubHeading>
        <ItemContainer>
            {campuses()}
        </ItemContainer>
        <BottomText>
            And <Color>300</Color> more Campuses All Over Kerala
        </BottomText>
        </Container>
    );
    }

    const Container = styled.div`
    padding: 30px 0;
    text-align: center;
    `;
    const Heading = styled.h2`
    font-weight: 500;
    font-size: 36px;
    margin-bottom: 10px;
    `;
    const Assosiate = styled.span`
    color: #49a76e;
    `;
    const SubHeading = styled.h5`
    width: 55%;
    margin: 0 auto;
    color: #656661;
    font-size: 15px;
    font-weight: 400;
    margin-bottom: 60px;
    `;
    const ItemContainer = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 60px;
   
    `;
    const Item = styled.li`
    width: 14%;
    margin-bottom: 30px;
    &:first-child{
        margin-left: 50px;
    }
    &:nth-child(6){
        margin-right: 50px;
    }
    `;
    const LogoBox = styled.div`
    width: 35%;
    margin: 0 auto;
    `;
    const Logo = styled.img`
    width: 100%;
    display: block; /*  */
    `;
    const Title = styled.h3`
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 5px;
    `;
    const SubTitle = styled.h4`
    font-size: 12px;
    font-weight: 500;
    color: #49a76e;
    `;
    const BottomText = styled.h4`
    font-size: 16px;
    font-weight: 600;
    color: #2d2d2b;
    `;
    const Color = styled.span`
    color: #49a76e;
    font-weight: 600;
    `;

    export default Campuses;

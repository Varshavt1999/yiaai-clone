import React from 'react'
import styled from 'styled-components'

function Certificates() {
  return (
    <Container>
        <Box>
            <MedalBox>
                <MedalImg src={require("../../assets/images/medal+.svg").default}/>
            </MedalBox>
            <Heading>Certification</Heading>
            <SubHeading>പ്രോഗ്രാം പൂർത്തിയാക്കുന്ന എല്ലാ വിദ്യാർത്ഥികൾക്കും സ്കൂൾ ലോഗോയോടു കൂടിയ കംപ്ലീഷൻ സർട്ടിഫിക്കറ്റുകൾ.</SubHeading>
            <Certificate>
                <CertificateImg src={require("../../assets/images/certificate.png")} alt="certificate"/>
            </Certificate>
            <ArrowImgBox>
                <ArrowImg src={require("../../assets/images/arrow.svg").default} alt="arrow"/>
            </ArrowImgBox>
        </Box>
    </Container>
  )
}

const Container = styled.div`
    padding: 50px 0;
`;
const Box = styled.div`
    width: 90%;
    margin: 0 auto;
    background-image: linear-gradient(to right, #5ab757, #31b375, #00ad8d, #05a59d, #359ca4);
    position: relative;
    padding: 8% 50px;
    border-radius: 15px;
`;

const MedalBox = styled.div`
    width:50px;
    position: absolute;
    top: 0;
`;
const MedalImg = styled.img`
    width: 100%;
    display: block;
`;
const Heading = styled.h1`
    font-size: 32px;
    color: #fff;
    font-weight:500;
    max-width: 50%;
    margin-bottom: 10px;
`;
const SubHeading = styled.p`
    font-size: 18px;
    color: #fff;
    font-weight:300;
    max-width: 50%;
`;
const Certificate = styled.div`
    width: 48%;
    position: absolute;
    top: -46px;
    right: 0;
`;
const CertificateImg = styled.img`
width: 100%;
    display: block;
`;
const ArrowImgBox = styled.div`
    position: absolute;
    bottom: -79px;
    right: 39%;
    width: 161px;
`;
const ArrowImg = styled.img`
width: 100%;
    display: block;
`;


export default Certificates

    import React, { useState } from 'react'
    import '../../App.css';
    import styled from 'styled-components'
    import back from "../../assets/images/decorator.svg"

    function Header() {
        const [JoinClick, setJoinClick] = useState(false)
        return (
    
                <Main>
                    <SubContainer>
                        <HeaderContainer className='wrapper'>
                            <LeftLogo>
                                <Logo src={require("../../assets/images/logo.svg").default} alt="Logo"/>
                            </LeftLogo>
                            <RightBox>
                                <Button onClick={()=>{
                                    setJoinClick(JoinClick=>!JoinClick)
                                }}>Join Now</Button>
                                {/* <MenuIcon>
                                    <Menu src={require("../../assets/images/menu-icon.svg").default} alt="Menu-icon"/>
                                </MenuIcon> */}
                            </RightBox>
                        </HeaderContainer> 

                        <MainBg className={JoinClick?"active":""}>
                            <ColorBg>
                                <Close onClick={()=>{
                                            setJoinClick(JoinClick=>!JoinClick)
                                        }}>
                                            <CloseImg src={require("../../assets/images/close.svg").default} alt="close"/>
                                        </Close>
                            </ColorBg>
                            <WhiteBg >
                                <JoinBox>
                                    <Heading>Login to your account</Heading>
                                    <SubHeading>Enter your registered phone number</SubHeading>
                                    <ContainerBox>
                                        <Flag>
                                            <FlagImage src={require("../../assets/images/india-flag.jpeg")} alt="india-flag"/>
                                        </Flag>
                                        <ArrowBox>
                                            <ArrowImg src={require("../../assets/images/arrow (1).svg").default} alt="arrow"/>
                                        </ArrowBox>
                                        <Form>
                                            <CallBox>
                                                <CallImg src={require("../../assets/images/phone.svg").default} alt="arrow"/>
                                            </CallBox>
                                            <CountryCode>+91</CountryCode>
                                            <Input type="number" placeholder="Enter Your Phone Number"/>
                                        </Form>
                                    </ContainerBox>
                                    <NextButton>Next</NextButton>
                                    <Text>New To Yiaai?<SubText> Create an account</SubText></Text>
                                    <Terms>Terms of Service</Terms>
                                </JoinBox>
                            </WhiteBg>
                        </MainBg>
                    </SubContainer>
                </Main>
                
        )
    }

    const Main = styled.div`
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        z-index: 2;
    `;
    const SubContainer = styled.div`
        position: relative;
    `;
    const HeaderContainer = styled.div`
        height:100px;
        padding:10px 5%;
        box-sizing:border-box;
        display:flex;
        justify-content:space-between;
        align-items:center;
        position: relative;
        /* background-color:rgba(f, f, f, 0.5); */
        /* opacity: 0.5; */
        width: 100%;
        box-shadow: rgb(0 0 0 / 3%) 0px 16px 24px;
        background-color: rgba(255, 255, 255, 0.3);
        backdrop-filter: blur(8px)
    `;

    const LeftLogo = styled.div`
        width:120px;
        display:inline-block;
    `;
    const Logo = styled.img`
        display:block;
        width:100%
    `;
    const RightBox = styled.div`
        display:flex;
        align-items: center;
    `;

    const Button = styled.button`
        margin-right: 20px;
        cursor: pointer;
        outline: none;
        border: none;
        background-image: linear-gradient(to right, #5ab757, #31b375, #00ad8d, #05a59d, #359ca4);
        padding: 18px 30px;
        border-radius: 5px;
        color: #fff;
        font-weight: bold;
        font-size: 16px;
    `;
    /* const MenuIcon = styled.div`
        margin-right: 0;
        width: 20px;
    `;
    const Menu = styled.img`
        width: 100%;
        display: block;
    `; */



    const MainBg = styled.div`
        height: 100%;
        width: 100%;
        display: flex;
        z-index: 100;
        position: absolute;
        top: 0;
        right: -100%;
        height: 100vh;
        transition: all 0.6s ease ;
        &.active{
            right: 0;
            transition: all 0.6s ease ;
        }
    `;
    const ColorBg = styled.div`
        /* position: fixed; */
        /* top: 0px;
        left: 0px; */
        height: 100%;
        width: 50%;
        background: rgba(0, 0, 0, 0.6);
        z-index: 500;
        position: relative;
    `;
    const WhiteBg = styled.div`
        background: #fff;
        width: 50%;
        z-index: 100;
        /* position: absolute;
        top: 0;
        right: -100%;
        height: 100vh;
        transition: all 0.6s ease ;
        &.active{
            right: 0;
            transition: all 0.6s ease ;
        } */
        `;
    const JoinBox = styled.div`
        background: url(${back});
        padding: 28% 40px 0;
        width: 100%;
        background-repeat: no-repeat;
        background-size: 100%;
        position: relative;
        
        `;
    const Close = styled.div`
        width: 25px;
        position: absolute;
        right: 5px;
        top: 5px;
        height: 25px;
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        padding: 5px;
    `;
    const CloseImg = styled.img`
        display: block;
        width: 90%;
    `;
    const Heading = styled.h3`
        font-size: 28px;
        font-weight: 500;
        margin-bottom: 25px;
    `;
    const SubHeading = styled.h4`
        font-size: 16px;
        font-weight: 400;
        margin-bottom: 35px;
    `;
    const ContainerBox = styled.div`
        display: flex;
        /* justify-content: space-between; */
        align-items: center;
        margin-bottom: 30px;
    `;
    const Flag = styled.div`
        width: 45px;
        height: 45px;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 10px;
    `;
    const FlagImage = styled.img`
        width: 100%; 
        height: 100%; 
        display: block;
    `;
    const ArrowBox = styled.div`
        width: 8px;
        transform: rotate(90deg);
        margin-right: 10px;
    `;
    const ArrowImg = styled.img`
        width: 100%; 
        display: block;
    `;
    const Form = styled.form`
        display: flex;
        align-items: center;
        border: 1px solid #000;
        border-radius: 8px;
        padding: 15px;
        width: 70%;
    `;
    const CallBox = styled.div`
        width: 15px;
        margin-right: 10px;
    `;
    const CallImg = styled.img`
        width: 100%; 
        display: block;
    `;
    const CountryCode = styled.div`
        margin-right: 10px;
    `;
    const Input = styled.input`
    border: none;
    background: none;
    width: 100%;
    ::placeholder {
       font-size: 16px;
   }
   
    `;
    const NextButton = styled.button`
        cursor: pointer;
        outline: none;
        border: none;
        background-image: linear-gradient(to right, #2f9aac, #00a5a6, #00ae93, #27b576, #61b950);
        padding: 18px 30px;
        border-radius: 5px;
        color: #fff;
        font-weight: bold;
        width: 90%;
        margin: 0 auto 20px;
        font-size: 16px;
    `;
    
    const Text = styled.h4`
        font-size: 16px;
        margin-bottom: 20px;
        font-weight: 400;
        text-align: center;
        padding-bottom:90px;
        border-bottom: 1px solid #d1dbda;
    `;
    const SubText = styled.span`
        color: #61b950;
    `;
    const Terms = styled.p`
        text-align: center;
        padding: 10px 0;
    `;




    export default Header
import React,{useState} from 'react'
import OtherHeader from '../include/OtherHeader'
import styled from 'styled-components'
import video from "../../assets/images/07-video-page/video.jpeg"

export default function MainVideoPage() {
const [select, setSelect] = useState(false)
const [selectedId, setSelectedId] = useState("")
  const [LessonDetails] = useState([
    {
        id:1,
        heading:"lesson1",
        topics:[
            {
                id:0,
                subHeading:"Introduction",
            },
            {
                id:1,
                subHeading:"Create Beautiful Stunning Websites For E-Commerce",
            },
            {
                id:2,
                subHeading:"What is Technology",
            },
            {
                id:3,
                subHeading:"What is Information Technology",
            },
        ]
    },
    {
        id:2,
        heading:"lesson2",
        topics:[
            {
                id:0,
                subHeading:"HardWare",
            },
            {
                id:1,
                subHeading:"Software",
            },
            {
                id:2,
                subHeading:"Operating System",
            },
            {
                id:3,
                subHeading:"Devices",
            },
        ]
    },
    {
        id:3,
        heading:"lesson3",
        topics:[
            {
                id:0,
                subHeading:"5G Network",
            },
            {
                id:1,
                subHeading:"Robotics",
            },
            {
                id:2,
                subHeading:"AR And VR",
            },
            {
                id:3,
                subHeading:"What is Information Technology",
            },
        ]
    },
    {
        id:4,
        heading:"lesson1",
        topics:[
            {
                id:4,
                subHeading:"Introduction",
            },
            {
                id:1,
                subHeading:"Artificial Intelligence",
            },
            {
                id:2,
                subHeading:"What is Technology",
            },
            {
                id:3,
                subHeading:"Voice Assistant",
            },
        ]
    },
    {
        id:5,
        heading:"lesson5",
        topics:[
            {
                id:0,
                subHeading:"Internet",
            },
            {
                id:1,
                subHeading:"Websites",
            },
            {
                id:2,
                subHeading:"Browsers",
            },
            {
                id:3,
                subHeading:"Web 3.0 And Metaverse",
            }
        ]
    }
  ])
    

const renderLessons = LessonDetails.map((lessonitem)=>{
        return <LessonBox key= {lessonitem.id}>
                    <TopLessonBox>
                        <LessonHeading>{lessonitem.heading}</LessonHeading>
                        <DropDown>
                            <ArrowImg src={require("../../assets/images/07-video-page/dropdown.svg").default} alt="drop-down"/>
                        </DropDown>
                    </TopLessonBox>
                    {lessonitem.topics.map((subheaditem)=>{
                        return <SubHeadBox key={subheaditem.id}>
                                        <IconBox>
                                            <TickIcon>
                                                <GreenTickImg src={require("../../assets/images/07-video-page/tick.svg").default} alt="tick"/>
                                            </TickIcon>
                                            {/* <PlayIcon>
                                                <PlayImg src={require("../../assets/images/07-video-page/Icon feather-play-circle-1.svg").default} alt="play"/>
                                            </PlayIcon>
                                            <LockIcon>
                                                <LockImg src={require("../../assets/images/07-video-page/lock.svg").default} alt="lock"/>
                                            </LockIcon> */}
                                        </IconBox>
                                        <LessonSubHeading>{subheaditem.subHeading}</LessonSubHeading>
                                </SubHeadBox>
                            })}
                </LessonBox>
    })


return (
    <Container>
        <OtherHeader/>
        <MainContainer>
            <LeftContiner>
                <TopBox>
                    <VideoBox>
                        {/* <Video src={require()}/> */}
                    </VideoBox>
                    <AboutBox>
                        <TitleBox>
                            <Title>Technology fundamentals</Title>
                            <SubTitle>introduction</SubTitle>
                        </TitleBox>
                        <StatusBox>
                            <Tickbox>
                                <TickImg src={require("../../assets/images/07-video-page/tick.svg").default} alt="tick" />
                            </Tickbox>
                            <Status>Mark as Compleateted</Status>
                        </StatusBox>
                    </AboutBox>
                </TopBox>
                <AdvertisementBox>
                    <AdvertisementImg src={require("../../assets/images/07-video-page/advert.svg").default} alt="advertisement"/>
                </AdvertisementBox>
            
            </LeftContiner>
            <RightContainer>
                {renderLessons}
            </RightContainer>
        </MainContainer>
    </Container>
)
}
// export default MainVideoPage;
const Container = styled.div`
    
`;
const MainContainer = styled.div`
    padding: 8% 20px 20px;
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
`;
const LeftContiner = styled.div`
    width: 70%;
`;
const TopBox = styled.div`
    padding: 20px;
    background-color: #f3f9eb;
    border-radius: 6px;
`;
const VideoBox = styled.div`
    height: 400px;
    border-radius: 6px;
    /* background-color: #000; */
    background-image: url(${video});
    margin-bottom: 20px;

`;

const AboutBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const TitleBox = styled.div`
    width: 20%;
`;
const Title = styled.h3`
    font-size: 12px;
    color: #a9a9a9;
    font-weight: 500;
`;
const SubTitle = styled.h5`
    font-size: 20px;
    font-weight: 500;
`;
const StatusBox = styled.div`
    width: 22%;
    padding: 10px;
    background-image: linear-gradient(to right, #55b460, #26b07d, #00aa95, #00a2a4, #3099aa);
    border-radius: 6px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    
`;

const Tickbox = styled.div`

`;

const TickImg = styled.img`
    fill: #fff;
`;

const Status = styled.h5`

`;
const AdvertisementBox = styled.div`
    width: 100%;
`;

const AdvertisementImg = styled.img`
    width: 100%;
    display: block;
`;

const RightContainer = styled.div`
    width: 28%;
`;

// const LessonContainer = styled.div`

// `;
const LessonBox = styled.div`

`;
const TopLessonBox = styled.div`
    padding: 5px 10px;
    background-color: #f3f9eb;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const LessonHeading = styled.h3`
    padding: 10px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 6px;
`;
const DropDown = styled.div`
    width: 15px;
`;
const ArrowImg = styled.img`
    display: block;
    width: 100%;
`;
const SubHeadBox = styled.div`

`;
const IconBox = styled.div`

`;
const LessonSubHeading = styled.h4`

`;
const TickIcon = styled.div`
    width: 10px;
`;
const GreenTickImg = styled.img`
    display: block;
    width: 100%;
`;
// const PlayIcon = styled.div`
//     width: 10px;
// `;
// const PlayImg = styled.img`
//     display: block;
//     width: 100%;
//     filter: invert(0%) sepia(92%) saturate(10%) hue-rotate(285deg) brightness(98%) contrast(100%);
// `;
// const LockIcon = styled.div`
//     width: 10px;
// `;
// const LockImg = styled.img`
//     display: block;
//     width: 100%;
//     filter: invert(0%) sepia(92%) saturate(10%) hue-rotate(285deg) brightness(98%) contrast(100%);
// `;




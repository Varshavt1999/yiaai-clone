import React, {useState} from "react"
import Header from '../include/Header';
import Spotlight from "../screens/Spotlight"
import Tefun from './Tefun';
import Campuses from './Campuses';
import Technologies from './Technologies';
import Certificates from './Certificates';
import SchoolJoin from './SchoolJoin';
import StudentJoin from './StudentJoin';
import MobileApp from './MobileApp';
import Faq from './Faq';
import Footer from './Footer';


function LandingPage() {
  const [joinClick, setJoinClick] = useState(false);
  const [isModal,setModal] = useState(false);
  return (

    <div>
         <div className='wrapper'>
            <Header joinClick={joinClick} setJoinClick={setJoinClick}/>
            <Spotlight joinClick={joinClick} setJoinClick={setJoinClick}/>
            <Tefun />
            <Campuses/>
            <Technologies/>
            <Certificates/>
            <SchoolJoin joinClick={joinClick} setJoinClick={setJoinClick}/>
            <StudentJoin/>
            <MobileApp/>
            <Faq/>
        </div>
        <Footer/>
    </div>
  )
}

export default LandingPage
import '../../../App.css';
import React from "react"
import Header from '../../include/Header';
import Spotlight from './Spotlight';
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
  return (
    <div>
         <div className='wrapper'>
            <Header/>
            <Spotlight/>
            <Tefun />
            <Campuses/>
            <Technologies/>
            <Certificates/>
            <SchoolJoin/>
            <StudentJoin/>
            <MobileApp/>
            <Faq/>
        </div>
        <Footer/>
    </div>
  )
}

export default LandingPage
import React from 'react'
// import {Route,Routes} from "react-router-dom"
import LandingPage from '../screens/LandingPage';
import NewStudentData from '../screens/NewStudentData';
import SecondLanding from '../screens/SecondLanding';
import ChooseProfileMain from '../screens/ChooseProfileMain';
import MainVideoPage from '../screens/MainVideoPage';
import ExamStartPage from '../screens/ExamStartPage';
import ExamPage from '../screens/ExamPage';
import ExamCompleteModal from '../include/modal/ExamCompleteModal';
import ExamLockModal from '../include/modal/ExamLockModal';
import CourseCompletePopUp from '../include/modal/CourseCompletePopUp';
import { BrowserRouter as  Router, Route, Routes} from "react-router-dom";



function AppRouter() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/main-video/" element={<MainVideoPage/>} />
            <Route path="/new-student-data/" element={<NewStudentData/>} />
            <Route path="/second-landing/" element={<SecondLanding/> } />
            <Route path="/exam-start/" element={<ExamStartPage/>} />
            <Route path="/exam/" element={<ExamPage/>} />
            <Route path="/exam-complete/" element={<ExamCompleteModal/>} />
            <Route path="/exam-lock/" element={<ExamLockModal/>} />
            <Route path="/course-complete" element={<CourseCompletePopUp/>} />
    
        </Routes>
    </div>
  )
}

export default AppRouter
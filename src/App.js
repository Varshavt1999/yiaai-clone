import './App.css';
import React from "react"
import LandingPage from './components/screens/LandingPage';
import NewStudentData from './components/screens/NewStudentData';
import SecondLanding from './components/screens/SecondLanding';
import ChooseProfileMain from './components/screens/ChooseProfileMain';
import MainVideoPage from './components/screens/MainVideoPage';
import ExamStartPage from './components/screens/ExamStartPage';
import ExamPage from './components/screens/ExamPage';
import ExamCompleteModal from './components/include/modal/ExamCompleteModal';
import ExamLockModal from './components/include/modal/ExamLockModal';
import CourseCompletePopUp from './components/include/modal/CourseCompletePopUp';
import { BrowserRouter as  Router, Route, Routes} from "react-router-dom";
import MainRouter from './components/router/MainRouter';





function App() {
  return (
    <div >
      <Router>
            <MainRouter/>
      </Router>
      <MainVideoPage/>
      
    </div>
  );
}

export default App;

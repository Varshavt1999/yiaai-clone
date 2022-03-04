import React,{useState} from 'react'
import NewStudentDataSpotlight from './NewStudentDataSpotlight'
import WelcomePopUp from '../include/modal/WelcomePopUp';

import OtherHeader from '../include/OtherHeader';


function NewStudentData() {
  
  const [click, setClick] = useState(false)
    
  return (
    <div>
        <WelcomePopUp click={click} setClick={setClick}/> 
        <OtherHeader/>
        <NewStudentDataSpotlight click={click} setClick={setClick}/>
    </div>
  )
}

export default NewStudentData
import React from 'react';
import {useNavigate} from "react-router-dom";
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { VscLinkExternal } from 'react-icons/vsc';
import axios from "axios";

import Popup from "./Popup"
 

function Assignment(props) {
const [submissionLink,changeInput ]=React.useState("")  
const[showPopup,setPopup]=React.useState(false)
let navigate=useNavigate()
  
   const onInputChange =(event)=>{
    changeInput(event.target.value)
  }
 
  const onShowPopup =()=>{
    setPopup(true);
  }
  
const onSubmit =()=>{
axios.put(`https://api.codeyogi.io/assignment/${props.detailId}/submit`,{submissionLink},{withCredentials:true})
  setPopup(false)
 
};
    
 
  const dueDatePassed=true;
  return (
    <>
    
  {showPopup && <Popup placeHolder="Submission link " onPopupClose={()=>setPopup(false)} onSubmit={onSubmit} value={submissionLink} onChange={onInputChange}/>}
    <div className=" p-4 m-4 bg-white space-y-4   shadow-2xl grow ">
   
  <div onClick={()=>navigate(`/assignments/${props.detailId}/detail`)}>
    <div className="flex text-xl font-bold  space-x-4   ">   
    <h1 >#{props.count} {props.about}  <span className="text-gray-500">{props.date}</span></h1>
    
    </div>  
   
    
    <div className="flex justify-between  ">
    <div className="space-y-2 ">
  <div className=" text-xl text-red-400 ">Due Date:{props.dueDate}{dueDatePassed && <h1 className="  text-red-400 ">(Submission will count as late now)</h1>}  </div>
      </div> 
        <h1 className="text-green-800 font-bold text-xl">SUBMITTED</h1>  
  
    </div>
     </div>
         <div className="flex justify-between  ">
           
    <div  onClick={onShowPopup} className=" p-4 flex ">
    <div  className="text-green-700 mt-2 text-2xl"><IoIosCheckmarkCircleOutline /></div>
    <div className="font-bold text-xl m-2 text-green-700 ">Re-submit</div> </div>
    <span className=" border-r-2 pl-[58px] border-gray-300"></span>  
     <a href={submissionLink} target="blank" className="p-4 flex ">
      <div className="text-indigo-400 mt-3 text-xl"><VscLinkExternal /></div>
    <div className="text-xl font-bold m-2   underline text-indigo-400"> See Your Submission</div> </a> </div>
      </div> 
      
    </>
   
  );
}

export default Assignment;
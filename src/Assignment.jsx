import React from 'react';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { VscLinkExternal } from 'react-icons/vsc';
function Assignment(props) {
  const dueDatePassed=true;
  return (
    
    <div className=" p-4 m-4 bg-white space-y-4   shadow-2xl ">
    
    <div className="flex text-xl font-bold space-x-4  ">   
    <h1 >#{props.count} {props.about}  <span className="text-gray-500">{props.date}</span></h1>
   
    </div>  
   
     
    <div className="flex justify-between">
    <div className="space-y-2">
  <h2 className=" text-xl text-red-400 ">Due Date:{props.dueDate}{dueDatePassed && <h1 className="  text-red-400 ">(Submission will count as late now)</h1>}  </h2>
       
  
    </div>
      <h1 className="text-green-800 font-bold text-xl">SUBMITTED</h1>  </div> 
         <div className="flex justify-between ">
           
    <div className=" p-4 flex ">
    <div className="relative top-2 text-green-700  text-2xl"><IoIosCheckmarkCircleOutline /></div>
    <h1 className=" text-xl font-bold m-2 text-green-700">Re-submit</h1> </div>
    <span className=" border-r-2 pl-[58px] border-gray-300"></span>  
     <div className="p-4 flex ">
      <div className="relative top-3 text-indigo-400 text-xl"><VscLinkExternal /></div>
    <h1 className="text-xl font-bold m-2  underline text-indigo-400"> See Your Submission</h1> </div> </div>
   
    </div> 
  );
}

export default Assignment;
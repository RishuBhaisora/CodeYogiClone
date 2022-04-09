import React from 'react';
import Assignment from './Assignment'
import assignmentData from './mockData/dataAssignment';
import {Link,useNavigate} from "react-router-dom";


function AssignmentList(props) {
   const data=assignmentData;
  let navigate=useNavigate();
  return (
    
    <div className="m-10 bg-gray-100 p-4 h-fit w-full  rounded-md">
    <h1 className="text-2xl font-black ">Assignment List</h1>
   { data.map(d=><div key={d.id} onClick={()=>navigate(`/assignments/${d.id}/detail`)}><Assignment  count={d.id+1} about={d.about} date={d.date} dueDate={d.dueDate} >
    
    </Assignment></div>)}
     
    </div>
    
  );
}

export default AssignmentList;
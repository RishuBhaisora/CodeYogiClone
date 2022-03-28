import React from 'react';
import Assignment from './Assignment'
import assignmentData from './mockData/dataAssignment';
import {Link} from "react-router-dom";


function AssignmentList(props) {
   const data=assignmentData;
  
  return (
    
    <div className="m-10 bg-gray-100 p-4 h-full w-full rounded-md">
    <h1 className="text-2xl font-black ">Assignment List</h1>
   { data.map(d=><div key={d.id}><Link to={`/assignments/${d.id}/detail`}><Assignment   count={d.id+1} about={d.about} date={d.date} dueDate={d.dueDate} >
    
    </Assignment></Link></div>)}
     
    </div>
    
  );
}

export default AssignmentList;
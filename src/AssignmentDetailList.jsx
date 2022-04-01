import React from 'react';
import { useParams } from "react-router-dom";
import detailAssignmentData from './mockData/dataAssignmentDetail';
import AssignmentDetail from './AssignmentDetail';


function AssignmentDetailList() {
  
  const data=detailAssignmentData;
  const stringParams=useParams();
  const numberParams=(+stringParams.id);
  
  const newData=detailAssignmentData.map(d=><><div className=" m-10 bg-gray-100 p-4 h-full w-full rounded-md">
  
  <AssignmentDetail key={d.id} datePassed={d.datePassed} dueDate={d.dueDate} title={d.title} discription={d.discription}></AssignmentDetail></div></> );
   
  return (
 <>
   {newData[data[numberParams].id]}
 </>
   
   );
}

export default AssignmentDetailList;
